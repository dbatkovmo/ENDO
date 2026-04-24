import { CATEGORY_PRIORITY } from './weight-stall-quiz.data'
import type { AnswerOption, CategoryScores, WeightStallCategory, WeightStallResult } from './weight-stall-quiz.types'

export function calculate(answers: Record<string, AnswerOption>): WeightStallResult {
  const scores: CategoryScores = {
    nutritionError: 0, stressSleep: 0, insulin: 0, hormone: 0,
    thyroid: 0, waterRetention: 0, plateau: 0,
  }
  for (const a of Object.values(answers)) {
    for (const [cat, val] of Object.entries(a.scores)) {
      scores[cat as WeightStallCategory] += val ?? 0
    }
  }
  const sorted = (Object.keys(scores) as WeightStallCategory[]).sort((a, b) =>
    scores[b] !== scores[a] ? scores[b] - scores[a] : CATEGORY_PRIORITY.indexOf(a) - CATEGORY_PRIORITY.indexOf(b)
  )
  const [primary, secondary, ...rest] = sorted
  return {
    primary,
    secondary: scores[secondary] > 0 ? secondary : null,
    others: rest.filter((c) => scores[c] > 0),
    scores,
  }
}
