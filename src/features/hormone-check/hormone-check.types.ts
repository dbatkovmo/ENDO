export type HormoneCategory =
  | 'thyroid'
  | 'insulin'
  | 'androgen'
  | 'stress'
  | 'deficiency'
  | 'hormone'

export type RiskLevel = 'low' | 'medium' | 'high'

export type CategoryScores = Record<HormoneCategory, number>

export interface AnswerOption {
  id: string
  label: string
  scores: Partial<CategoryScores>
}

export interface Question {
  id: string
  text: string
  options: AnswerOption[]
}

export interface HormoneCheckResult {
  primary: HormoneCategory
  secondary: HormoneCategory | null
  others: HormoneCategory[]
  scores: CategoryScores
  totalScore: number
  riskLevel: RiskLevel
}
