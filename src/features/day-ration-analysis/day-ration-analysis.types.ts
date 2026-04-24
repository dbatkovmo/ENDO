export type Goal = 'loss' | 'maintain' | 'gain'
export type BinaryChoice = 'yes' | 'no'

export interface DayRationAnalysisFormValues {
  breakfast: string
  lunch: string
  dinner: string
  snacks: string
  drinks: string
  goal: Goal
  sweetCraving: BinaryChoice
  sleepyAfterMeal: BinaryChoice
}

export type AnalysisIssueKey =
  | 'lowProtein'
  | 'lowVegetables'
  | 'fastCarbs'
  | 'liquidCalories'
  | 'chaoticMeals'
  | 'longGaps'
  | 'noMajorIssue'

export interface IssueConfig {
  title: string
  emoji: string
  color: string
  tagColor: string
  description: string
  recommendations: string[]
}

export interface DayRationAnalysisResultData {
  positives: string[]
  blockers: string[]
  mainIssue: AnalysisIssueKey
  recommendations: string[]
  notes: string[]
}
