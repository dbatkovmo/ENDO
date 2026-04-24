import type { HormoneCategory, Question } from './hormone-check.types'

export const QUESTIONS: Question[] = [
  {
    id: 'weight',
    text: 'Есть ли у вас резкий набор веса без очевидной причины?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 2, insulin: 2 } },
    ],
  },
  {
    id: 'hairloss',
    text: 'Есть ли усиленное выпадение волос?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 2, deficiency: 1 } },
    ],
  },
  {
    id: 'acne',
    text: 'Есть ли акне или высыпания во взрослом возрасте?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { androgen: 3 } },
    ],
  },
  {
    id: 'cycle',
    text: 'Есть ли нерегулярный или нарушенный менструальный цикл?',
    options: [
      { id: 'no', label: 'Нет, цикл регулярный', scores: {} },
      { id: 'yes', label: 'Да, нарушен или нерегулярный', scores: { androgen: 3, hormone: 3 } },
      { id: 'na', label: 'Не актуально', scores: {} },
    ],
  },
  {
    id: 'fatigue',
    text: 'Есть ли усталость по утрам — даже после полноценного сна?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 2, stress: 1 } },
    ],
  },
  {
    id: 'sweets',
    text: 'Есть ли постоянная тяга к сладкому?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { insulin: 2 } },
    ],
  },
  {
    id: 'sleepy',
    text: 'Есть ли сонливость после еды?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { insulin: 3 } },
    ],
  },
  {
    id: 'cold',
    text: 'Вы часто мёрзнете даже в тёплом помещении?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да', scores: { thyroid: 3 } },
    ],
  },
  {
    id: 'anxiety',
    text: 'Есть ли раздражительность, тревожность или плохой сон?',
    options: [
      { id: 'no', label: 'Нет', scores: {} },
      { id: 'yes', label: 'Да, что-то из перечисленного', scores: { stress: 3 } },
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

export const CAUSE_CONFIGS: Record<HormoneCategory, CauseConfig> = {
  thyroid: {
    title: 'Возможные признаки нарушения функции щитовидной железы',
    emoji: '🦋',
    color: '#13c2c2',
    tagColor: 'cyan',
    description: 'Зябкость, утренняя усталость, выпадение волос и набор веса — характерная картина при гипофункции щитовидной железы.',
    explanation: 'Щитовидная железа регулирует скорость всех обменных процессов. При её недостаточной работе замедляется метаболизм, появляется усталость и резистентность к похудению. Это легко проверить с помощью ТТГ.',
    tips: [
      'Сдайте ТТГ и свободный Т4 — это первый шаг',
      'Не принимайте препараты йода без обследования',
      'Гипотиреоз хорошо поддаётся лечению при своевременной диагностике',
    ],
  },
  insulin: {
    title: 'Возможные признаки инсулинорезистентности',
    emoji: '📈',
    color: '#fa8c16',
    tagColor: 'orange',
    description: 'Тяга к сладкому, сонливость после еды и набор веса — классические признаки снижения чувствительности клеток к инсулину.',
    explanation: 'При инсулинорезистентности поджелудочная железа вырабатывает больше инсулина для поддержания нормального сахара. Это состояние предшествует диабету 2 типа, но хорошо корректируется питанием и образом жизни.',
    tips: [
      'Ограничьте быстрые углеводы и сахар',
      'Добавляйте белок и клетчатку к каждому приёму пищи',
      'Сдайте: глюкоза натощак, инсулин натощак, HOMA-IR',
    ],
  },
  androgen: {
    title: 'Возможные признаки избытка андрогенов',
    emoji: '⚡',
    color: '#d4380d',
    tagColor: 'volcano',
    description: 'Акне у взрослого и нарушения цикла нередко указывают на повышенный уровень мужских половых гормонов.',
    explanation: 'СПКЯ — самая частая причина избытка андрогенов у женщин. Это гормональное состояние, при котором нарушается овуляция, появляются акне и трудности с весом.',
    tips: [
      'Сдайте: тестостерон общий, ДГЭА-С, пролактин',
      'Обратитесь к гинекологу-эндокринологу',
      'Не начинайте приём гормональных препаратов без диагностики',
    ],
  },
  stress: {
    title: 'Возможное влияние стресса и нарушений сна',
    emoji: '🧠',
    color: '#722ed1',
    tagColor: 'purple',
    description: 'Хронический стресс и плохой сон — не просто «плохое самочувствие», а реальный гормональный дисбаланс через систему кортизола.',
    explanation: 'При хроническом стрессе кортизол остаётся повышенным, угнетает работу щитовидной железы, нарушает цикл и снижает чувствительность к инсулину.',
    tips: [
      'Нормализуйте сон — это базовый фактор гормонального баланса',
      'Добавьте умеренную физическую активность: прогулки, йога',
      'При длительном стрессе стоит проверить кортизол утренний',
    ],
  },
  deficiency: {
    title: 'Возможные дефициты микронутриентов',
    emoji: '💊',
    color: '#389e0d',
    tagColor: 'green',
    description: 'Дефицит железа, витамина D или B12 создаёт симптомы, которые легко спутать с гормональными нарушениями.',
    explanation: 'Выпадение волос при нормальном ТТГ — часто дефицит ферритина. Усталость при нормальной щитовидке — дефицит витамина D. Прежде чем искать гормональную причину, стоит проверить нутриентный статус.',
    tips: [
      'Сдайте ферритин — он точнее, чем гемоглобин',
      'Проверьте витамин D (25-OH)',
      'Не принимайте железо без анализов',
    ],
  },
  hormone: {
    title: 'Возможные нарушения цикла и женских гормонов',
    emoji: '🌸',
    color: '#c41d7f',
    tagColor: 'magenta',
    description: 'Нерегулярный цикл — сигнал о дисбалансе репродуктивных гормонов, который требует уточнения.',
    explanation: 'Нарушения цикла могут быть вызваны СПКЯ, гиперпролактинемией, недостаточностью лютеиновой фазы и другими состояниями. Каждое имеет своё лечение — важна точная диагностика.',
    tips: [
      'Сдайте: ЛГ, ФСГ, пролактин, АМГ',
      'Сделайте УЗИ органов малого таза',
      'Обратитесь к гинекологу-эндокринологу',
    ],
  },
}

export interface LabItem {
  name: string
  categories: HormoneCategory[]
  isBase: boolean
  conditional: boolean
}

export const ALL_LABS: LabItem[] = [
  { name: 'Общий анализ крови', categories: ['deficiency'], isBase: true, conditional: false },
  { name: 'Ферритин', categories: ['deficiency'], isBase: true, conditional: false },
  { name: 'Витамин D (25-OH)', categories: ['deficiency'], isBase: true, conditional: false },
  { name: 'ТТГ', categories: ['thyroid'], isBase: false, conditional: false },
  { name: 'Свободный Т4', categories: ['thyroid'], isBase: false, conditional: false },
  { name: 'Глюкоза натощак', categories: ['insulin'], isBase: false, conditional: false },
  { name: 'Инсулин натощак', categories: ['insulin'], isBase: false, conditional: false },
  { name: 'HOMA-IR', categories: ['insulin'], isBase: false, conditional: false },
  { name: 'Тестостерон общий', categories: ['androgen'], isBase: false, conditional: true },
  { name: 'ДГЭА-С', categories: ['androgen'], isBase: false, conditional: true },
  { name: 'Пролактин', categories: ['androgen', 'hormone'], isBase: false, conditional: true },
  { name: 'ЛГ и ФСГ', categories: ['hormone'], isBase: false, conditional: true },
  { name: 'Кортизол утренний', categories: ['stress'], isBase: false, conditional: true },
]

export const CATEGORY_PRIORITY: HormoneCategory[] = [
  'thyroid', 'androgen', 'hormone', 'insulin', 'deficiency', 'stress',
]

export const RISK_CONFIGS = {
  low: {
    label: 'Низкий уровень',
    description: 'Симптомов немного. Тем не менее плановая проверка базовых анализов будет полезна.',
    color: '#389e0d', background: '#f6ffed', border: '#b7eb8f', tagColor: 'success' as const,
  },
  medium: {
    label: 'Умеренный уровень',
    description: 'Несколько симптомов, которые стоит обсудить с врачом. Обследование будет разумным шагом.',
    color: '#d46b08', background: '#fff7e6', border: '#ffd591', tagColor: 'warning' as const,
  },
  high: {
    label: 'Высокий уровень',
    description: 'Выраженная симптоматика. Рекомендуем не откладывать визит к специалисту.',
    color: '#cf1322', background: '#fff1f0', border: '#ffa39e', tagColor: 'error' as const,
  },
}
