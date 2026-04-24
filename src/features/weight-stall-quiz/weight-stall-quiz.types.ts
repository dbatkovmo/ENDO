export type WeightStallCategory =
  | 'nutritionError'
  | 'stressSleep'
  | 'insulin'
  | 'hormone'
  | 'thyroid'
  | 'waterRetention'
  | 'plateau'

export type WeightStallCause =
  | 'nutritionError'
  | 'stressSleep'
  | 'insulin'
  | 'hormonal'
  | 'waterRetention'
  | 'plateau'

export type CategoryScores = Record<WeightStallCategory, number>
export type CauseScores = Record<WeightStallCause, number>

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
  primary: WeightStallCause
  secondary: WeightStallCause | null
  categoryScores: CategoryScores
  causeScores: CauseScores
}
