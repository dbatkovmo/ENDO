import { CATEGORY_PRIORITY } from './hormone-check.data'
import type {
  AnswerOption,
  CategoryScores,
  HormoneCategory,
  HormoneCheckResult,
  RiskLevel,
} from './hormone-check.types'

export function calculate(answers: Record<string, AnswerOption>): HormoneCheckResult {
  const scores: CategoryScores = {
    thyroid: 0, insulin: 0, androgen: 0, stress: 0, deficiency: 0, hormone: 0,
  }
  for (const a of Object.values(answers)) {
    for (const [cat, val] of Object.entries(a.scores)) {
      scores[cat as HormoneCategory] += val ?? 0
    }
  }
  const totalScore = Object.values(scores).reduce((s, v) => s + v, 0)
  const riskLevel: RiskLevel = totalScore <= 4 ? 'low' : totalScore <= 11 ? 'medium' : 'high'
  const sorted = (Object.keys(scores) as HormoneCategory[]).sort((a, b) =>
    scores[b] !== scores[a] ? scores[b] - scores[a] : CATEGORY_PRIORITY.indexOf(a) - CATEGORY_PRIORITY.indexOf(b)
  )
  const [primary, secondary, ...rest] = sorted
  return {
    primary,
    secondary: scores[secondary] > 0 ? secondary : null,
    others: rest.filter((c) => scores[c] > 0),
    scores,
    totalScore,
    riskLevel,
  }
}
