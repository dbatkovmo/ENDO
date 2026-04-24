import type {
  ActivityLevel,
  DeficitGoal,
  FatBurnForecastFormValues,
  FatBurnForecastResult,
} from './fat-burn-forecast.types'

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
}

const DEFICIT_PERCENTS: Record<DeficitGoal, number> = {
  gentle: 0.1,
  moderate: 0.15,
  active: 0.2,
}

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: 'Минимальная',
  light: 'Низкая',
  moderate: 'Средняя',
  active: 'Высокая',
  very_active: 'Очень высокая',
}

export const GOAL_LABELS: Record<DeficitGoal, string> = {
  gentle: 'Мягкое снижение',
  moderate: 'Умеренное',
  active: 'Активное',
}

function calcBmr(values: FatBurnForecastFormValues): number {
  const base = 10 * values.weight + 6.25 * values.height - 5 * values.age
  return values.gender === 'male' ? base + 5 : base - 161
}

function roundToOne(value: number): number {
  return Math.round(value * 10) / 10
}

export function calculate(values: FatBurnForecastFormValues): FatBurnForecastResult {
  const bmr = calcBmr(values)
  const tdee = bmr * ACTIVITY_MULTIPLIERS[values.activity]
  const deficitPercent = DEFICIT_PERCENTS[values.goal]
  const dailyDeficit = tdee * deficitPercent
  const targetCalories = tdee - dailyDeficit

  const rawFatLoss30 = (dailyDeficit * 30) / 7700
  const rawFatLoss90 = (dailyDeficit * 90) / 7700
  const cappedFatLoss30 = Math.min(rawFatLoss30, 4)
  const capRatio = rawFatLoss30 > 4 ? 4 / rawFatLoss30 : 1
  const cappedFatLoss90 = rawFatLoss90 * capRatio

  const warnings: string[] = []

  if (rawFatLoss30 > 4) {
    warnings.push('Формула дает высокий темп. Для реалистичного прогноза мы ограничили оценку до 4 кг жира за 30 дней.')
  }

  if (values.gender === 'female' && targetCalories < 1200) {
    warnings.push('Калорийность для снижения опускается ниже 1200 ккал. Такой уровень лучше не использовать без наблюдения специалиста.')
  }

  if (values.gender === 'male' && targetCalories < 1500) {
    warnings.push('Калорийность для снижения опускается ниже 1500 ккал. Такой уровень лучше не использовать без наблюдения специалиста.')
  }

  if (values.goal === 'active') {
    warnings.push('Активный дефицит лучше применять под контролем специалиста.')
  }

  const bodyFatPercent = values.bodyFatPercent ?? null
  const projectedFatMass = bodyFatPercent != null
    ? {
        currentKg: roundToOne((values.weight * bodyFatPercent) / 100),
        after30Kg: roundToOne(Math.max(0, (values.weight * bodyFatPercent) / 100 - cappedFatLoss30)),
        after90Kg: roundToOne(Math.max(0, (values.weight * bodyFatPercent) / 100 - cappedFatLoss90)),
      }
    : undefined

  return {
    bmr: Math.round(bmr),
    tdee: Math.round(tdee),
    deficitPercent: Math.round(deficitPercent * 100),
    dailyDeficit: Math.round(dailyDeficit),
    targetCalories: Math.round(targetCalories),
    fatLoss30: roundToOne(cappedFatLoss30),
    fatLoss90: roundToOne(cappedFatLoss90),
    projectedFatMass,
    warnings,
  }
}
