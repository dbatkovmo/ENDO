export type SweetCategory = 'bloodSugar' | 'stress' | 'sleep' | 'insulinResistance'

export type CategoryScores = Record<SweetCategory, number>

export interface AnswerOption {
  id: string
  label: string
}

export interface Question {
  id: string
  text: string
  options: AnswerOption[]
}

export interface SweetQuizResult {
  primary: SweetCategory
  secondary: SweetCategory | null
  scores: CategoryScores
}
