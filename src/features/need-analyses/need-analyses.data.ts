import type { LabGroupConfig, LabGroupKey, Question } from './need-analyses.types'

export const QUESTIONS: Question[] = [
  {
    id: 'mainComplaint',
    text: 'Основная жалоба',
    options: [
      { id: 'weight-stall', label: 'Не худею' },
      { id: 'fatigue', label: 'Усталость' },
      { id: 'sweet-craving', label: 'Тяга к сладкому' },
      { id: 'hair-loss', label: 'Выпадение волос' },
      { id: 'irregular-cycle', label: 'Нерегулярный цикл' },
      { id: 'sleepy-after-meal', label: 'Сонливость после еды' },
      { id: 'weight-gain', label: 'Набор веса' },
      { id: 'edema', label: 'Отеки' },
    ],
  },
  {
    id: 'bellyWeight',
    text: 'Есть ли лишний вес в области живота?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'sleepyAfterMeal',
    text: 'Есть ли сонливость после еды?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'sweetCraving',
    text: 'Есть ли тяга к сладкому?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'morningFatigue',
    text: 'Есть ли усталость утром?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'hairLoss',
    text: 'Есть ли выпадение волос?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'irregularCycle',
    text: 'Есть ли нерегулярный цикл?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
      { id: 'na', label: 'Не актуально' },
    ],
  },
  {
    id: 'cold',
    text: 'Есть ли холодные руки/ноги, зябкость?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
  {
    id: 'recentLabs',
    text: 'Были ли анализы за последние 6 месяцев?',
    options: [
      { id: 'yes', label: 'Да' },
      { id: 'no', label: 'Нет' },
    ],
  },
]

export const LAB_GROUPS: Record<LabGroupKey, LabGroupConfig> = {
  base: {
    title: 'Базовый чек-ап',
    emoji: '🧾',
    color: '#1677ff',
    tagColor: 'blue',
    why: 'Это стартовый набор, который часто помогает не пропустить дефициты, нарушения углеводного обмена и функцию щитовидной железы.',
    labs: [
      { name: 'Общий анализ крови' },
      { name: 'Ферритин' },
      { name: 'Витамин D' },
      { name: 'Глюкоза натощак' },
      { name: 'Инсулин натощак' },
      { name: 'ТТГ' },
      { name: 'Свободный Т4' },
    ],
  },
  metabolic: {
    title: 'Углеводный обмен и метаболический риск',
    emoji: '📈',
    color: '#fa8c16',
    tagColor: 'orange',
    why: 'Такая группа может быть полезна, если есть тяга к сладкому, сонливость после еды, абдоминальный набор веса или сложности со снижением веса.',
    labs: [
      { name: 'HOMA-IR' },
      { name: 'HbA1c' },
      { name: 'Липидограмма' },
    ],
  },
  thyroidDeficiency: {
    title: 'Щитовидная железа и дефицитные состояния',
    emoji: '🦋',
    color: '#13c2c2',
    tagColor: 'cyan',
    why: 'Эта группа может быть полезна при усталости, зябкости, выпадении волос и жалобах, похожих на дефициты или снижение функции щитовидной железы.',
    labs: [
      { name: 'ТТГ' },
      { name: 'Свободный Т4' },
      { name: 'Анти-ТПО', note: 'По показаниям' },
      { name: 'Ферритин' },
      { name: 'B12' },
    ],
  },
  reproductive: {
    title: 'Репродуктивные гормоны',
    emoji: '🌸',
    color: '#c41d7f',
    tagColor: 'magenta',
    why: 'Такую группу можно обсудить с врачом при нерегулярном цикле и/или выпадении волос, когда нужно исключить гормональные причины.',
    labs: [
      { name: 'Пролактин' },
      { name: 'Общий тестостерон' },
      { name: 'Свободный тестостерон' },
      { name: 'ДГЭА-С' },
      { name: 'ЛГ' },
      { name: 'ФСГ' },
      { name: 'Эстрадиол' },
      { name: 'Прогестерон', note: 'По дню цикла' },
    ],
  },
  edema: {
    title: 'Отёки и причины задержки жидкости',
    emoji: '💧',
    color: '#2f54eb',
    tagColor: 'geekblue',
    why: 'Эта группа может быть полезна, если есть выраженные отеки и нужно оценить почки, белковый статус, печень и щитовидную железу.',
    labs: [
      { name: 'Общий анализ мочи' },
      { name: 'Креатинин' },
      { name: 'АЛТ' },
      { name: 'АСТ' },
      { name: 'Альбумин' },
      { name: 'ТТГ' },
    ],
  },
}
