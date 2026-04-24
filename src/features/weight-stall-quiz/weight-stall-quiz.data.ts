import type { Question, WeightStallCause, WeightStallCategory } from './weight-stall-quiz.types'

export const QUESTIONS: Question[] = [
  {
    id: 'duration',
    text: 'Сколько недель вес не снижается?',
    options: [
      { id: 'lt2', label: 'Меньше 2 недель', scores: {} },
      { id: 'to4', label: '2–4 недели', scores: { plateau: 1 } },
      { id: 'gt4', label: 'Больше 4 недель', scores: { plateau: 3 } },
    ],
  },
  {
    id: 'tracking',
    text: 'Считаете ли вы калории?',
    options: [
      { id: 'precise', label: 'Да, точно', scores: {} },
      { id: 'rough', label: 'Примерно', scores: { nutritionError: 2 } },
      { id: 'no', label: 'Нет', scores: { nutritionError: 3 } },
    ],
  },
  {
    id: 'snacking',
    text: 'Бывают ли перекусы, кофе с молоком, орехи, сладости «по чуть-чуть»?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'rarely', label: 'Иногда', scores: { nutritionError: 1 } },
      { id: 'often', label: 'Часто', scores: { nutritionError: 3 } },
    ],
  },
  {
    id: 'sleep',
    text: 'Есть ли сон меньше 6 часов?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { stressSleep: 3 } },
    ],
  },
  {
    id: 'stress',
    text: 'Есть ли высокий стресс?',
    options: [
      { id: 'low', label: 'Нет', scores: {} },
      { id: 'moderate', label: 'Умеренный', scores: { stressSleep: 1 } },
      { id: 'high', label: 'Высокий', scores: { stressSleep: 3 } },
    ],
  },
  {
    id: 'edema',
    text: 'Есть ли у вас отёки?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'rarely', label: 'Иногда', scores: { waterRetention: 1 } },
      { id: 'often', label: 'Часто', scores: { waterRetention: 3 } },
    ],
  },
  {
    id: 'insulin',
    text: 'Есть ли тяга к сладкому и сонливость после еды?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { insulin: 3 } },
    ],
  },
  {
    id: 'cycle',
    text: 'У женщин: есть ли нерегулярный цикл?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { hormone: 3 } },
      { id: 'na', label: 'Не актуально', scores: {} },
    ],
  },
  {
    id: 'thyroid',
    text: 'Есть ли проблемы со щитовидной железой?',
    options: [
      { id: 'no', label: 'Нет / не знаю', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 3 } },
    ],
  },
]

export interface CauseConfig {
  title: string
  emoji: string
  color: string
  tagColor: string
  description: string
  recommendations: string[]
}

export const CAUSE_CONFIGS: Record<WeightStallCause, CauseConfig> = {
  nutritionError: {
    title: 'Скрытый перебор калорий',
    emoji: '🍽️',
    color: '#d4380d',
    tagColor: 'volcano',
    description: 'Даже небольшие перекусы и напитки могут незаметно убрать дефицит калорий.',
    recommendations: [
      'На 7–14 дней начните считать еду точнее и взвешивать порции.',
      'Записывайте перекусы, кофе с молоком, орехи, сладости и соусы.',
      'Сравните фактический рацион с вашей текущей нормой калорий.',
    ],
  },
  stressSleep: {
    title: 'Недосып и стресс',
    emoji: '😴',
    color: '#2f54eb',
    tagColor: 'geekblue',
    description: 'Недосып и высокий стресс могут усиливать аппетит, задерживать воду и мешать снижению веса.',
    recommendations: [
      'Постарайтесь вернуть сон хотя бы к 7 часам в сутки.',
      'Добавьте регулярные прогулки, паузы на отдых и снижение перегруза.',
      'Если тренировки выматывают, временно уменьшите их интенсивность.',
    ],
  },
  insulin: {
    title: 'Возможная инсулинорезистентность',
    emoji: '📈',
    color: '#fa8c16',
    tagColor: 'orange',
    description: 'Тяга к сладкому и сонливость после еды могут быть связаны с нарушением углеводного обмена.',
    recommendations: [
      'Сделайте приемы пищи более сытными за счет белка и клетчатки.',
      'Сократите сладкие напитки, десерты и частые быстрые углеводы.',
      'Обсудите со специалистом анализы на глюкозу, инсулин и HOMA-IR.',
    ],
  },
  hormonal: {
    title: 'Гормональные причины',
    emoji: '🧬',
    color: '#c41d7f',
    tagColor: 'magenta',
    description: 'Нерегулярный цикл, проблемы со щитовидной железой и другие гормональные факторы могут мешать снижению веса.',
    recommendations: [
      'Не пытайтесь лечить это самостоятельно только диетой и тренировками.',
      'Запишитесь к эндокринологу или гинекологу-эндокринологу.',
      'Обсудите со специалистом, нужны ли ТТГ, свободный Т4 и половые гормоны.',
    ],
  },
  waterRetention: {
    title: 'Задержка жидкости',
    emoji: '💧',
    color: '#1677ff',
    tagColor: 'blue',
    description: 'Отёки и колебания жидкости могут маскировать реальное снижение жировой массы.',
    recommendations: [
      'Смотрите не только на вес, но и на объемы тела и самочувствие.',
      'Старайтесь не злоупотреблять соленой едой и алкоголем.',
      'Поддерживайте регулярное движение и достаточное потребление воды.',
    ],
  },
  plateau: {
    title: 'Нормальное плато',
    emoji: '⚖️',
    color: '#389e0d',
    tagColor: 'green',
    description: 'Иногда вес временно стоит даже при хорошем плане питания и активности.',
    recommendations: [
      'Оценивайте динамику не по 2–3 дням, а хотя бы по нескольким неделям.',
      'Проверьте, не изменилась ли ваша текущая норма калорий на фоне похудения.',
      'Ориентируйтесь не только на вес, но и на объемы, фото и общее самочувствие.',
    ],
  },
}

export const CATEGORY_TO_CAUSE: Record<WeightStallCategory, WeightStallCause> = {
  nutritionError: 'nutritionError',
  stressSleep: 'stressSleep',
  insulin: 'insulin',
  hormone: 'hormonal',
  thyroid: 'hormonal',
  waterRetention: 'waterRetention',
  plateau: 'plateau',
}

export const CAUSE_PRIORITY: WeightStallCause[] = [
  'nutritionError',
  'stressSleep',
  'insulin',
  'hormonal',
  'waterRetention',
  'plateau',
]
