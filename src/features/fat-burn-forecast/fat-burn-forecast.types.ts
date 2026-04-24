export type Gender = 'male' | 'female'

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'very_active'

export type DeficitGoal = 'gentle' | 'moderate' | 'active'

export interface FatBurnForecastFormValues {
  gender: Gender
  age: number
  height: number
  weight: number
  activity: ActivityLevel
  goal: DeficitGoal
  bodyFatPercent?: number
}

export interface FatBurnForecastResult {
  bmr: number
  tdee: number
  deficitPercent: number
  dailyDeficit: number
  targetCalories: number
  fatLoss30: number
  fatLoss90: number
  projectedFatMass?: {
    currentKg: number
    after30Kg: number
    after90Kg: number
  }
  warnings: string[]
}
