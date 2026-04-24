import type { ActivityLevel, CyclePhase, Goal, KbjuFormValues, KbjuResult, Macros } from './kbju.types'
import { BASE_GOAL_RATIOS, getAdjustedMacroRatios, getPhaseByDay, PHASE_CONFIGS } from './cycle.data'

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
}

const GOAL_MULTIPLIERS: Record<Goal, number> = {
  lose: 0.8,
  maintain: 1.0,
  gain: 1.2,
}

function calcBmr(values: KbjuFormValues): number {
  const { gender, age, weight, height } = values
  const base = 10 * weight + 6.25 * height - 5 * age
  return gender === 'male' ? base + 5 : base - 161
}

function calcMacros(
  calories: number,
  ratios: Record<'protein' | 'fat' | 'carbs', number>,
): Macros {
  return {
    calories: Math.round(calories),
    protein: Math.round((calories * ratios.protein) / 4),
    fat: Math.round((calories * ratios.fat) / 9),
    carbs: Math.round((calories * ratios.carbs) / 4),
  }
}

function resolvePhase(values: KbjuFormValues): CyclePhase | undefined {
  if (!values.useCycle) return undefined
  if (values.cyclePhase) return values.cyclePhase
  if (values.cycleDay != null) return getPhaseByDay(values.cycleDay)
  return undefined
}

export function calculate(values: KbjuFormValues): KbjuResult {
  const bmr = calcBmr(values)
  const tdee = bmr * ACTIVITY_MULTIPLIERS[values.activity]
  const phase = resolvePhase(values)

  const calorieDelta = phase ? PHASE_CONFIGS[phase].calorieDelta : 0
  const adjustedTdee = tdee + calorieDelta
  const targetCalories = adjustedTdee * GOAL_MULTIPLIERS[values.goal]

  const baseRatios = BASE_GOAL_RATIOS[values.goal]
  const finalRatios = phase
    ? getAdjustedMacroRatios(baseRatios, phase)
    : baseRatios

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    goal: values.goal,
    macros: calcMacros(targetCalories, finalRatios),
    cycleAdjustment: phase
      ? { phase, calorieDelta }
      : undefined,
  }
}

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: 'Минимальная (сидячий образ жизни)',
  light: 'Низкая (1–3 тренировки в неделю)',
  moderate: 'Средняя (3–5 тренировок в неделю)',
  active: 'Высокая (6–7 тренировок в неделю)',
  very_active: 'Очень высокая (физический труд + тренировки)',
}

export const GOAL_LABELS: Record<Goal, string> = {
  lose: 'Похудение',
  maintain: 'Поддержание веса',
  gain: 'Набор массы',
}

export { getPhaseByDay }
