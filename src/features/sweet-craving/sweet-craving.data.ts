import type { Question, SweetCategory } from './sweet-craving.types'

export const QUESTIONS: Question[] = [
  {
    id: 'frequency',
    text: 'Как часто хочется сладкого?',
    options: [
      { id: 'rare', label: 'Редко' },
      { id: 'weekly', label: 'Несколько раз в неделю' },
      { id: 'daily', label: 'Каждый день' },
      { id: 'every_meal', label: 'После каждого приёма пищи' },
    ],
  },
  {
    id: 'whenStrong',
    text: 'Когда сильнее всего хочется сладкого?',
    options: [
      { id: 'morning', label: 'Утром' },
      { id: 'after_meal', label: 'После еды' },
      { id: 'evening', label: 'Вечером' },
      { id: 'when_stressed', label: 'При стрессе' },
    ],
  },
  {
    id: 'sleepinessAfterMeal',
    text: 'Бывает ли сонливость после еды?',
    options: [
      { id: 'none', label: 'Нет' },
      { id: 'sometimes', label: 'Иногда' },
      { id: 'often', label: 'Часто' },
      { id: 'almost_always', label: 'Почти всегда' },
    ],
  },
  {
    id: 'hungerAfterMeal',
    text: 'Бывает ли чувство голода через 1–2 часа после еды?',
    options: [
      { id: 'none', label: 'Нет' },
      { id: 'sometimes', label: 'Иногда' },
      { id: 'often', label: 'Часто' },
      { id: 'almost_always', label: 'Почти всегда' },
    ],
  },
  {
    id: 'sleepHours',
    text: 'Сколько вы спите?',
    options: [
      { id: 'seven_nine', label: '7–9 часов' },
      { id: 'six_seven', label: '6–7 часов' },
      { id: 'under_six', label: 'Меньше 6 часов' },
    ],
  },
  {
    id: 'stressLevel',
    text: 'Есть ли стресс?',
    options: [
      { id: 'low', label: 'Низкий' },
      { id: 'moderate', label: 'Умеренный' },
      { id: 'high', label: 'Высокий' },
    ],
  },
  {
    id: 'bellyFat',
    text: 'Есть ли лишний вес в области живота?',
    options: [
      { id: 'no', label: 'Нет' },
      { id: 'little', label: 'Немного' },
      { id: 'yes', label: 'Да' },
    ],
  },
]

export interface CauseConfig {
  title: string
  emoji: string
  color: string
  tagColor: string
  /** Возможная причина — короткий текст для карточки */
  summary: string
}

export const CAUSE_CONFIGS: Record<SweetCategory, CauseConfig> = {
  bloodSugar: {
    title: 'Скачки сахара',
    emoji: '📊',
    color: '#1677ff',
    tagColor: 'blue',
    summary:
      'Тяга к сладкому может быть связана с резкими колебаниями глюкозы и инсулина после еды.',
  },
  stress: {
    title: 'Стрессовое переедание',
    emoji: '🧘',
    color: '#722ed1',
    tagColor: 'purple',
    summary:
      'Сладкое может использоваться организмом как быстрый способ получить дофамин и снизить напряжение.',
  },
  sleep: {
    title: 'Недосып',
    emoji: '😴',
    color: '#08979c',
    tagColor: 'cyan',
    summary: 'Недостаток сна усиливает голод и тягу к быстрым углеводам.',
  },
  insulinResistance: {
    title: 'Возможная инсулинорезистентность',
    emoji: '🔬',
    color: '#d4380d',
    tagColor: 'volcano',
    summary:
      'Если тяга к сладкому сочетается с сонливостью после еды, голодом и лишним весом в области живота, стоит проверить углеводный обмен.',
  },
}

export const CATEGORY_PRIORITY: SweetCategory[] = [
  'insulinResistance',
  'bloodSugar',
  'stress',
  'sleep',
]
