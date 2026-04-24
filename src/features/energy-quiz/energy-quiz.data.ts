import type { EnergyCategory, Question } from './energy-quiz.types'

export const QUESTIONS: Question[] = [
  {
    id: 'timing',
    text: 'Когда вы чувствуете усталость?',
    options: [
      { id: 'morning', label: 'Утром, сразу после пробуждения', scores: { thyroid: 2 } },
      { id: 'postmeal', label: 'После еды', scores: { bloodSugar: 3 } },
      { id: 'evening', label: 'Вечером', scores: { stress: 1 } },
      { id: 'allday', label: 'Весь день', scores: { deficiency: 2 } },
    ],
  },
  {
    id: 'sleep',
    text: 'Сколько часов вы спите в сутки?',
    options: [
      { id: 'optimal', label: '7–9 часов', scores: {} },
      { id: 'ok', label: '6–7 часов', scores: { sleep: 1 } },
      { id: 'low', label: 'Меньше 6 часов', scores: { sleep: 3 } },
    ],
  },
  {
    id: 'sleepiness',
    text: 'Бывает ли сонливость после еды?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'sometimes', label: 'Иногда', scores: { bloodSugar: 1 } },
      { id: 'often', label: 'Часто', scores: { bloodSugar: 3 } },
    ],
  },
  {
    id: 'hairloss',
    text: 'Есть ли выпадение волос?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 2, deficiency: 2 } },
    ],
  },
  {
    id: 'cold',
    text: 'Вы часто мёрзнете?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 3 } },
    ],
  },
  {
    id: 'sweets',
    text: 'Есть ли тяга к сладкому?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { bloodSugar: 2 } },
    ],
  },
  {
    id: 'mood',
    text: 'Есть ли раздражительность или тревожность?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'sometimes', label: 'Иногда', scores: { stress: 1 } },
      { id: 'often', label: 'Часто', scores: { stress: 3 } },
    ],
  },
  {
    id: 'eating',
    text: 'Насколько регулярное у вас питание?',
    options: [
      { id: 'regular', label: 'Ем регулярно', scores: {} },
      { id: 'skip', label: 'Часто пропускаю приёмы', scores: { bloodSugar: 2 } },
      { id: 'chaotic', label: 'Питаюсь хаотично', scores: { bloodSugar: 2, deficiency: 1 } },
    ],
  },
]

export interface CauseConfig {
  title: string
  emoji: string
  color: string
  tagColor: string
  description: string
  explanation: string
  tips: string[]
}

export const CAUSE_CONFIGS: Record<EnergyCategory, CauseConfig> = {
  thyroid: {
    title: 'Возможные проблемы со щитовидной железой', emoji: '🦋', color: '#13c2c2', tagColor: 'cyan',
    description: 'Щитовидная железа регулирует скорость всех обменных процессов. При гипотиреозе энергии не хватает даже после сна.',
    explanation: 'Усталость с утра, зябкость, выпадение волос — классическая триада. Это легко проверить анализами.',
    tips: [
      'Сдайте ТТГ и свободный Т4',
      'Не принимайте йод без назначения',
      'При диагнозе лечение хорошо переносится',
    ],
  },
  bloodSugar: {
    title: 'Скачки сахара и инсулина', emoji: '📈', color: '#1677ff', tagColor: 'blue',
    description: 'Энергия падает вместе с глюкозой. Сонливость после еды — сигнал.',
    explanation: 'После быстрых углеводов сахар резко растёт, инсулин выбрасывается, глюкоза падает — энергетическая яма.',
    tips: [
      'Белок и клетчатка к каждому приёму',
      'Равномерные приёмы пищи',
      'Сдайте глюкозу и инсулин натощак',
    ],
  },
  stress: {
    title: 'Стресс и перегрузка нервной системы', emoji: '🧠', color: '#722ed1', tagColor: 'purple',
    description: 'Хронический стресс истощает надпочечники.',
    explanation: 'Постоянно высокий кортизол нарушает сон, повышает тягу к сладкому и вызывает хроническую усталость.',
    tips: [
      'Физическая активность снижает кортизол',
      'Техники дыхания помогают быстро',
      'При длительном стрессе проверьте кортизол',
    ],
  },
  sleep: {
    title: 'Недостаток сна', emoji: '😴', color: '#2f54eb', tagColor: 'geekblue',
    description: 'Даже один час недосыпа снижает энергию на следующий день.',
    explanation: 'Во время сна восстанавливается гормональный баланс и запасы энергии. При недосыпе этого не происходит.',
    tips: [
      'Ложитесь в одно и то же время',
      'За 1 час до сна уберите яркий свет',
      'Температура спальни 18–20°C',
    ],
  },
  deficiency: {
    title: 'Возможные дефициты микронутриентов', emoji: '💊', color: '#fa8c16', tagColor: 'orange',
    description: 'Дефицит железа, витамина D или B12 — частая причина хронической усталости.',
    explanation: 'Ферритин ниже нормы, дефицит витамина D или В12 дают одинаковую картину: слабость, туман, выпадение волос.',
    tips: [
      'Сдайте ферритин (не только гемоглобин)',
      'Проверьте витамин D',
      'Не принимайте железо без анализов',
    ],
  },
}

export const ALL_LABS: { name: string; categories: EnergyCategory[] }[] = [
  { name: 'ТТГ', categories: ['thyroid'] },
  { name: 'Свободный Т4', categories: ['thyroid'] },
  { name: 'Ферритин', categories: ['deficiency'] },
  { name: 'Витамин D (25-OH)', categories: ['deficiency'] },
  { name: 'Витамин В12', categories: ['deficiency'] },
  { name: 'Глюкоза натощак', categories: ['bloodSugar'] },
  { name: 'Инсулин натощак', categories: ['bloodSugar'] },
  { name: 'Общий анализ крови', categories: ['deficiency', 'sleep'] },
  { name: 'Кортизол утренний', categories: ['stress'] },
]

export const CATEGORY_PRIORITY: EnergyCategory[] = ['thyroid', 'deficiency', 'bloodSugar', 'stress', 'sleep']
