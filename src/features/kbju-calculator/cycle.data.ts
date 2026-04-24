import type { CyclePhase, Goal } from './kbju.types'

export interface PhaseConfig {
  label: string
  emoji: string
  days: string
  color: string
  tagColor: string
  /** Добавка к TDEE (до применения коэффициента цели) */
  calorieDelta: number
  /** Сдвиг макросов в % (применяется поверх базовых пропорций цели) */
  macroDelta: { protein: number; fat: number; carbs: number }
  tips: string[]
  foods: string[]
}

export const PHASE_CONFIGS: Record<CyclePhase, PhaseConfig> = {
  menstrual: {
    label: 'Менструальная',
    emoji: '🌑',
    days: '1–5 день',
    color: '#ff4d4f',
    tagColor: 'red',
    calorieDelta: -50,
    macroDelta: { protein: +3, fat: +3, carbs: -6 },
    tips: [
      'Метаболизм незначительно замедлен — норма калорий чуть ниже',
      'Увеличьте потребление железа для восполнения потерь',
      'Магний снижает болевые ощущения и спазмы',
      'Тёплая пища и достаточный питьевой режим помогают самочувствию',
      'Высокоинтенсивные тренировки лучше заменить на лёгкие',
    ],
    foods: ['Красное мясо', 'Бобовые', 'Шпинат', 'Тыквенные семечки', 'Горький шоколад', 'Имбирный чай'],
  },
  follicular: {
    label: 'Фолликулярная',
    emoji: '🌱',
    days: '6–13 день',
    color: '#1677ff',
    tagColor: 'blue',
    calorieDelta: 0,
    macroDelta: { protein: -2, fat: -3, carbs: +5 },
    tips: [
      'Высокая чувствительность к инсулину — углеводы усваиваются эффективнее',
      'Идеальное время для силовых тренировок и набора мышц',
      'Эстроген на подъёме — энергия и настроение растут',
      'Хорошее время для экспериментов с рационом',
      'Организм лучше использует гликоген — спорт на углеводах даёт максимум',
    ],
    foods: ['Цельнозерновые крупы', 'Фрукты', 'Кисломолочные продукты', 'Яйца', 'Авокадо', 'Ростки злаков'],
  },
  ovulatory: {
    label: 'Овуляторная',
    emoji: '⚡',
    days: '14–15 день',
    color: '#faad14',
    tagColor: 'gold',
    calorieDelta: +50,
    macroDelta: { protein: 0, fat: 0, carbs: 0 },
    tips: [
      'Пик эстрогена — максимум энергии и силы',
      'Базовые пропорции КБЖУ оптимальны для этой фазы',
      'Отличное время для интенсивных тренировок и рекордов',
      'Небольшое повышение потребности в энергии',
      'Следите за гидратацией при высокой активности',
    ],
    foods: ['Лёгкие белки (рыба, птица)', 'Свежие овощи', 'Ягоды', 'Орехи', 'Зелень', 'Оливковое масло'],
  },
  luteal: {
    label: 'Лютеиновая',
    emoji: '🌙',
    days: '16–28 день',
    color: '#722ed1',
    tagColor: 'purple',
    calorieDelta: +150,
    macroDelta: { protein: +5, fat: +3, carbs: -8 },
    tips: [
      'Прогестерон повышает базовый метаболизм на ~5–10% — нужно больше калорий',
      'Больше белка снижает выраженность ПМС и поддерживает мышцы',
      'Сложные углеводы вместо простых помогают контролировать тягу к сладкому',
      'Омега-3 и магний уменьшают отёчность и раздражительность',
      'Снизьте интенсивность кардио, акцент на силовые упражнения',
    ],
    foods: ['Лосось', 'Грецкие орехи', 'Батат', 'Гречка', 'Семена льна', 'Бананы', 'Тёмный шоколад'],
  },
}

/** Дни цикла → фаза */
export function getPhaseByDay(day: number): CyclePhase {
  if (day <= 5) return 'menstrual'
  if (day <= 13) return 'follicular'
  if (day <= 15) return 'ovulatory'
  return 'luteal'
}

/** Скорректированные пропорции макросов с учётом фазы */
export function getAdjustedMacroRatios(
  base: Record<'protein' | 'fat' | 'carbs', number>,
  phase: CyclePhase,
): Record<'protein' | 'fat' | 'carbs', number> {
  const delta = PHASE_CONFIGS[phase].macroDelta
  const protein = Math.max(15, base.protein * 100 + delta.protein) / 100
  const fat = Math.max(10, base.fat * 100 + delta.fat) / 100
  const carbs = Math.max(15, base.carbs * 100 + delta.carbs) / 100
  // Нормализуем до 100%
  const total = protein + fat + carbs
  return {
    protein: protein / total,
    fat: fat / total,
    carbs: carbs / total,
  }
}

/** Справочник "цель → макросы" (дублируем здесь для доступа из cycle.data) */
export const BASE_GOAL_RATIOS: Record<Goal, Record<'protein' | 'fat' | 'carbs', number>> = {
  lose:     { protein: 0.35, fat: 0.25, carbs: 0.40 },
  maintain: { protein: 0.30, fat: 0.25, carbs: 0.45 },
  gain:     { protein: 0.30, fat: 0.20, carbs: 0.50 },
}
