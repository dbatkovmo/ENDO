export type WeightStallCategory =
  | 'nutritionError' | 'stressSleep' | 'insulin' | 'hormone'
  | 'thyroid' | 'waterRetention' | 'plateau'

export type CategoryScores = Record<WeightStallCategory, number>

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

export interface WeightStallResult {
  primary: WeightStallCategory
  secondary: WeightStallCategory | null
  others: WeightStallCategory[]
  scores: CategoryScores
}
