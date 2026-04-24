import { CATEGORY_TO_CAUSE, CAUSE_PRIORITY } from './weight-stall-quiz.data'
import type {
  AnswerOption,
  CategoryScores,
  CauseScores,
  WeightStallCategory,
  WeightStallCause,
  WeightStallResult,
} from './weight-stall-quiz.types'

export function calculate(answers: Record<string, AnswerOption>): WeightStallResult {
  const categoryScores: CategoryScores = {
    nutritionError: 0,
    stressSleep: 0,
    insulin: 0,
    hormone: 0,
    thyroid: 0,
    waterRetention: 0,
    plateau: 0,
  }

  for (const a of Object.values(answers)) {
    for (const [cat, val] of Object.entries(a.scores)) {
      categoryScores[cat as WeightStallCategory] += val ?? 0
    }
  }

  const causeScores: CauseScores = {
    nutritionError: 0,
    stressSleep: 0,
    insulin: 0,
    hormonal: 0,
    waterRetention: 0,
    plateau: 0,
  }

  for (const [category, score] of Object.entries(categoryScores) as [WeightStallCategory, number][]) {
    const cause = CATEGORY_TO_CAUSE[category]
    causeScores[cause] += score
  }

  const sorted = (Object.keys(causeScores) as WeightStallCause[]).sort((a, b) =>
    causeScores[b] !== causeScores[a]
      ? causeScores[b] - causeScores[a]
      : CAUSE_PRIORITY.indexOf(a) - CAUSE_PRIORITY.indexOf(b)
  )

  const [topCause] = sorted
  const primary = causeScores[topCause] > 0 ? topCause : 'plateau'
  const secondary = sorted.find((cause) => cause !== primary && causeScores[cause] > 0) ?? null

  return {
    primary,
    secondary,
    categoryScores,
    causeScores,
  }
}
