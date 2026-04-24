export type EnergyCategory = 'thyroid' | 'bloodSugar' | 'stress' | 'sleep' | 'deficiency'

export type CategoryScores = Record<EnergyCategory, number>

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

export interface EnergyQuizResult {
  primary: EnergyCategory
  secondary: EnergyCategory | null
  others: EnergyCategory[]
  scores: CategoryScores
}
