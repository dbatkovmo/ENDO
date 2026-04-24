import {
  GOOD_CARB_KEYWORDS,
  ISSUE_CONFIGS,
  LIQUID_CALORIES_KEYWORDS,
  PROTEIN_KEYWORDS,
  SUGAR_KEYWORDS,
  VEGETABLE_KEYWORDS,
} from './day-ration-analysis.data'
import type {
  AnalysisIssueKey,
  DayRationAnalysisFormValues,
  DayRationAnalysisResultData,
} from './day-ration-analysis.types'

type MealKey = 'breakfast' | 'lunch' | 'dinner'

function normalizeText(value: string): string {
  return value.trim().toLowerCase().replace(/ё/g, 'е')
}

function hasAnyKeyword(text: string, keywords: string[]): boolean {
  return keywords.some((keyword) => text.includes(keyword))
}

function countMealMatches(texts: string[], keywords: string[]): number {
  return texts.filter((text) => hasAnyKeyword(text, keywords)).length
}

export function analyze(values: DayRationAnalysisFormValues): DayRationAnalysisResultData {
  const breakfast = normalizeText(values.breakfast)
  const lunch = normalizeText(values.lunch)
  const dinner = normalizeText(values.dinner)
  const snacks = normalizeText(values.snacks)
  const drinks = normalizeText(values.drinks)

  const mainMeals: Record<MealKey, string> = { breakfast, lunch, dinner }
  const mainMealTexts = Object.values(mainMeals)
  const allFoodTexts = [breakfast, lunch, dinner, snacks]
  const allTexts = [...allFoodTexts, drinks]

  const mainMealCount = mainMealTexts.filter(Boolean).length
  const skippedMainMeals = 3 - mainMealCount
  const snackPresent = Boolean(snacks)

  const proteinInMainMeals = countMealMatches(mainMealTexts, PROTEIN_KEYWORDS)
  const vegetablesInMeals = countMealMatches(allFoodTexts, VEGETABLE_KEYWORDS)
  const goodCarbMeals = countMealMatches(allFoodTexts, GOOD_CARB_KEYWORDS)
  const sugarSignals = countMealMatches(allTexts, SUGAR_KEYWORDS)
  const liquidCaloriesSignals = countMealMatches(allTexts, LIQUID_CALORIES_KEYWORDS)

  const issueScores: Record<AnalysisIssueKey, number> = {
    lowProtein: proteinInMainMeals === 0 ? 5 : proteinInMainMeals === 1 ? 4 : proteinInMainMeals === 2 ? 1 : 0,
    lowVegetables: vegetablesInMeals === 0 ? 5 : vegetablesInMeals === 1 ? 3 : 0,
    fastCarbs: sugarSignals >= 2 ? 5 : sugarSignals === 1 ? 3 : 0,
    liquidCalories: liquidCaloriesSignals >= 2 ? 5 : liquidCaloriesSignals === 1 ? 4 : 0,
    chaoticMeals: skippedMainMeals >= 2 ? 5 : skippedMainMeals === 1 && snackPresent ? 4 : 0,
    longGaps: skippedMainMeals >= 1 && !snackPresent ? 4 : 0,
    noMajorIssue: 0,
  }

  if (values.sweetCraving === 'yes' && issueScores.fastCarbs > 0) {
    issueScores.fastCarbs += 1
  }

  if (goodCarbMeals > 0 && issueScores.fastCarbs > 0) {
    issueScores.fastCarbs -= 1
  }

  const positives: string[] = []

  if (proteinInMainMeals >= 2) {
    positives.push('В рационе есть источники белка хотя бы в двух основных приемах пищи.')
  }
  if (vegetablesInMeals >= 2) {
    positives.push('В течение дня есть овощи или зелень.')
  }
  if (goodCarbMeals >= 1 && sugarSignals === 0) {
    positives.push('Есть более ровные источники углеводов: крупы, картофель, цельнозерновые продукты или фрукты.')
  }
  if (mainMealCount === 3) {
    positives.push('Есть три основных приема пищи без явных пропусков.')
  }
  if (liquidCaloriesSignals === 0 && drinks) {
    positives.push('Не видно явных жидких калорий среди напитков.')
  }
  if (positives.length === 0) {
    positives.push('Вы уже сделали важный шаг: зафиксировали рацион за день и теперь его можно улучшать точечно.')
  }

  const blockers: string[] = []

  if (proteinInMainMeals <= 1) {
    blockers.push('Белка в течение дня, вероятно, мало или он распределен неравномерно.')
  }
  if (vegetablesInMeals === 0) {
    blockers.push('В рационе почти нет овощей и зелени.')
  }
  if (sugarSignals > 0) {
    blockers.push('Есть быстрые углеводы или сладкие продукты, которые могут мешать цели.')
  }
  if (liquidCaloriesSignals > 0) {
    blockers.push('Есть жидкие калории: они легко проходят незаметно и хуже насыщают.')
  }
  if (skippedMainMeals > 0) {
    blockers.push('Есть пропуски основных приемов пищи, из-за чего рацион становится менее стабильным.')
  }
  if (skippedMainMeals > 0 && snackPresent) {
    blockers.push('Перекусы могут заменять полноценную еду и делать питание хаотичным.')
  }

  const rankedIssues = (Object.entries(issueScores) as [AnalysisIssueKey, number][])
    .filter(([, score]) => score > 0)
    .sort((a, b) => b[1] - a[1])

  const mainIssue = rankedIssues[0]?.[0] ?? 'noMajorIssue'
  const recommendations = ISSUE_CONFIGS[mainIssue].recommendations

  const notes: string[] = []

  if (values.goal === 'loss' && ((sugarSignals > 0 && snackPresent) || liquidCaloriesSignals > 0)) {
    notes.push('Вероятно, дефицит калорий может нарушаться из-за перекусов и жидких калорий.')
  }

  if (values.sleepyAfterMeal === 'yes') {
    notes.push('Сонливость после еды может быть связана с составом приема пищи и реакцией углеводного обмена.')
  }

  if (blockers.length === 0) {
    blockers.push('Критичных ошибок по одному дню не видно, но для более точного вывода лучше смотреть рацион за несколько дней подряд.')
  }

  return {
    positives: positives.slice(0, 4),
    blockers: blockers.slice(0, 5),
    mainIssue,
    recommendations,
    notes,
  }
}
