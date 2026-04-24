import type { Question, WeightStallCategory } from './weight-stall-quiz.types'

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
      { id: 'precise', label: 'Да, точно взвешиваю и считаю', scores: {} },
      { id: 'rough', label: 'Примерно, на глаз', scores: { nutritionError: 2 } },
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
    text: 'Бывает ли у вас сон менее 6 часов?',
    options: [
      { id: 'no', label: 'Нет, сплю достаточно', scores: {} },
      { id: 'yes', label: 'Да, регулярно не высыпаюсь', scores: { stressSleep: 3 } },
    ],
  },
  {
    id: 'stress',
    text: 'Как бы вы оценили уровень стресса?',
    options: [
      { id: 'low', label: 'Низкий', scores: {} },
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
    text: 'Есть ли нерегулярный менструальный цикл?',
    options: [
      { id: 'no', label: 'Нет, регулярный', scores: {} },
      { id: 'yes', label: 'Да, нерегулярный', scores: { hormone: 3 } },
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
  explanation: string
  tips: string[]
}

export const CAUSE_CONFIGS: Record<WeightStallCategory, CauseConfig> = {
  nutritionError: {
    title: 'Скрытый перебор калорий', emoji: '🍽️', color: '#d4380d', tagColor: 'volcano',
    description: 'Небольшие «невидимые» калории могут полностью нивелировать дефицит.',
    explanation: 'Люди недооценивают реальное потребление в среднем на 20–40%. Кофе с молоком, ложка масла, горсть орехов — всё это складывается в сотни калорий.',
    tips: [
      'Взвешивайте еду хотя бы 2 недели',
      'Учитывайте все напитки: кофе с молоком, смузи, соки',
      'Проверьте вечерние «автоматические» перекусы',
    ],
  },
  stressSleep: {
    title: 'Недосып и хронический стресс', emoji: '😴', color: '#2f54eb', tagColor: 'geekblue',
    description: 'Высокий кортизол блокирует жиросжигание и усиливает тягу к еде.',
    explanation: 'При хроническом стрессе кортизол удерживается на высоком уровне: стимулирует накопление жира, разрушает мышцы, снижает чувствительность к инсулину.',
    tips: [
      'Нормализуйте сон до 7–8 часов',
      'Добавьте прогулки и дыхательные практики',
      'Временно снизьте интенсивность тренировок',
    ],
  },
  insulin: {
    title: 'Возможная инсулинорезистентность', emoji: '📈', color: '#fa8c16', tagColor: 'orange',
    description: 'Клетки «не слышат» инсулин — организм не может эффективно использовать жировые запасы.',
    explanation: 'Тяга к сладкому и сонливость после еды — классические признаки. Это состояние хорошо корректируется, но нужны анализы.',
    tips: [
      'Ограничьте быстрые углеводы и сахар',
      'Добавляйте белок и клетчатку к каждому приёму',
      'Сдайте: глюкоза, инсулин, HOMA-IR',
    ],
  },
  hormone: {
    title: 'Гормональные нарушения', emoji: '🌸', color: '#c41d7f', tagColor: 'magenta',
    description: 'Дисбаланс половых гормонов влияет на метаболизм и склонность к накоплению жира.',
    explanation: 'Нерегулярный цикл может указывать на СПКЯ и другие состояния, при которых вес уходит медленно даже в дефиците.',
    tips: [
      'Обратитесь к гинекологу-эндокринологу',
      'Сдайте: ЛГ, ФСГ, пролактин, тестостерон',
      'Нормализация фона ускоряет снижение веса',
    ],
  },
  thyroid: {
    title: 'Возможный гипотиреоз', emoji: '🦋', color: '#13c2c2', tagColor: 'cyan',
    description: 'Щитовидная железа регулирует метаболизм. При гипотиреозе вес стоит даже при дефиците.',
    explanation: 'Гипотиреоз — одна из часто пропускаемых причин плато. Простой анализ ТТГ позволяет быстро исключить или подтвердить.',
    tips: [
      'Сдайте ТТГ и свободный Т4',
      'Не принимайте йод без назначения',
      'Лечение восстанавливает нормальный метаболизм',
    ],
  },
  waterRetention: {
    title: 'Задержка жидкости', emoji: '💧', color: '#1677ff', tagColor: 'blue',
    description: 'Отёки могут маскировать реальное снижение жировой массы.',
    explanation: 'Соль, гормональные колебания, воспаление задерживают воду. Жир уходит, а вес на весах стоит из-за «водного балласта».',
    tips: [
      'Ограничьте соль до 3–5 г в день',
      'Пейте достаточно воды — это снимает отёки',
      'Добавьте движение для лимфодренажа',
    ],
  },
  plateau: {
    title: 'Нормальное метаболическое плато', emoji: '⚖️', color: '#389e0d', tagColor: 'green',
    description: 'После недель похудения организм адаптируется — это нормальная физиология.',
    explanation: 'Метаболическая адаптация — защитный механизм. При долгом дефиците тело «экономит» энергию. Нужно скорректировать стратегию.',
    tips: [
      'Пересчитайте норму калорий',
      'Попробуйте рефид-день раз в 1–2 недели',
      'Смените тип или интенсивность тренировок',
    ],
  },
}

export const ALL_LABS: { name: string; categories: WeightStallCategory[] }[] = [
  { name: 'ТТГ', categories: ['thyroid'] },
  { name: 'Свободный Т4', categories: ['thyroid'] },
  { name: 'Глюкоза натощак', categories: ['insulin'] },
  { name: 'Инсулин натощак', categories: ['insulin'] },
  { name: 'HOMA-IR', categories: ['insulin'] },
  { name: 'ЛГ и ФСГ', categories: ['hormone'] },
  { name: 'Пролактин', categories: ['hormone'] },
  { name: 'Тестостерон общий', categories: ['hormone', 'insulin'] },
  { name: 'Кортизол утренний', categories: ['stressSleep'] },
]

export const CATEGORY_PRIORITY: WeightStallCategory[] = [
  'thyroid', 'hormone', 'insulin', 'nutritionError', 'stressSleep', 'waterRetention', 'plateau',
]
