import { CATEGORY_PRIORITY } from './energy-quiz.data'
import type { AnswerOption, CategoryScores, EnergyCategory, EnergyQuizResult } from './energy-quiz.types'

export function calculate(answers: Record<string, AnswerOption>): EnergyQuizResult {
  const scores: CategoryScores = { thyroid: 0, bloodSugar: 0, stress: 0, sleep: 0, deficiency: 0 }
  for (const a of Object.values(answers)) {
    for (const [cat, val] of Object.entries(a.scores)) {
      scores[cat as EnergyCategory] += val ?? 0
    }
  }
  const sorted = (Object.keys(scores) as EnergyCategory[]).sort((a, b) =>
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
