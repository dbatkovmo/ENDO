export type Gender = 'male' | 'female'

export type ActivityLevel =
  | 'sedentary'
  | 'light'
  | 'moderate'
  | 'active'
  | 'very_active'

export type Goal = 'lose' | 'maintain' | 'gain'

export type CyclePhase = 'menstrual' | 'follicular' | 'ovulatory' | 'luteal'

export interface KbjuFormValues {
  gender: Gender
  age: number
  weight: number
  height: number
  activity: ActivityLevel
  goal: Goal
  useCycle?: boolean
  cycleDay?: number
  cyclePhase?: CyclePhase
}

export interface Macros {
  calories: number
  protein: number
  fat: number
  carbs: number
}

export interface CyclePhaseAdjustment {
  phase: CyclePhase
  calorieDelta: number
}

export interface KbjuResult {
  bmr: number
  tdee: number
  goal: Goal
  macros: Macros
  cycleAdjustment?: CyclePhaseAdjustment
}
