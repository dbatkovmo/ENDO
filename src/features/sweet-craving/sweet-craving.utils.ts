import { CATEGORY_PRIORITY } from './sweet-craving.data'
import type { AnswerOption, CategoryScores, SweetCategory, SweetQuizResult } from './sweet-craving.types'

function freqNumeric(id: string | undefined): number {
  switch (id) {
    case 'rare':
      return 0
    case 'weekly':
      return 1
    case 'daily':
      return 2
    case 'every_meal':
      return 3
    default:
      return 0
  }
}

function sleepinessHungerNumeric(id: string | undefined): number {
  switch (id) {
    case 'none':
      return 0
    case 'sometimes':
      return 1
    case 'often':
      return 2
    case 'almost_always':
      return 3
    default:
      return 0
  }
}

export function calculate(answers: Record<string, AnswerOption>): SweetQuizResult {
  const freq = freqNumeric(answers.frequency?.id)
  const when = answers.whenStrong?.id
  const sleepiness = sleepinessHungerNumeric(answers.sleepinessAfterMeal?.id)
  const hunger = sleepinessHungerNumeric(answers.hungerAfterMeal?.id)
  const sleepH = answers.sleepHours?.id
  const stress = answers.stressLevel?.id
  const belly = answers.bellyFat?.id

  let bloodSugarScore = 0
  let stressScore = 0
  let sleepScore = 0
  let insulinResistanceScore = 0

  // Тяга после еды / частота + сонливость после еды + голод через 1–2 ч → скачки сахара
  if (when === 'after_meal') bloodSugarScore += 5
  if (sleepiness >= 2) bloodSugarScore += 4
  if (hunger >= 2) bloodSugarScore += 4
  if (freq >= 2) bloodSugarScore += 3
  if (freq === 3) bloodSugarScore += 2

  // Стресс
  if (stress === 'high') stressScore += 6
  else if (stress === 'moderate') stressScore += 2
  if (when === 'when_stressed') stressScore += 4

  // Сон
  if (sleepH === 'under_six') sleepScore += 7
  else if (sleepH === 'six_seven') sleepScore += 2
  if (when === 'evening') sleepScore += 1

  // Возможная инсулинорезистентность: живот + сонливость после еды + частая тяга
  const bellyMet = belly === 'yes' || belly === 'little'
  const sleepMet = sleepiness >= 2
  const freqMet = freq >= 2
  const trio = [bellyMet, sleepMet, freqMet].filter(Boolean).length
  if (trio === 3) insulinResistanceScore += 12
  else if (trio === 2) insulinResistanceScore += 5
  else if (trio === 1) insulinResistanceScore += 1

  const scores: CategoryScores = {
    bloodSugar: bloodSugarScore,
    stress: stressScore,
    sleep: sleepScore,
    insulinResistance: insulinResistanceScore,
  }

  const total = scores.bloodSugar + scores.stress + scores.sleep + scores.insulinResistance
  if (total === 0) {
    scores.bloodSugar = 1
  }

  const sorted = (Object.keys(scores) as SweetCategory[]).sort((a, b) => {
    const diff = scores[b] - scores[a]
    if (diff !== 0) return diff
    return CATEGORY_PRIORITY.indexOf(a) - CATEGORY_PRIORITY.indexOf(b)
  })

  const primary = sorted[0]
  const second = sorted[1]
  const secondary = scores[second] > 0 && second !== primary ? second : null

  return { primary, secondary, scores }
}
