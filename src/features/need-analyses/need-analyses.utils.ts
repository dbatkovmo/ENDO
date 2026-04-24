import { LAB_GROUPS } from './need-analyses.data'
import type { LabGroupKey, NeedAnalysesAnswerMap, NeedAnalysesResult } from './need-analyses.types'

function hasAnswer(answers: NeedAnalysesAnswerMap, questionId: string, optionId: string): boolean {
  return answers[questionId]?.id === optionId
}

export function calculate(answers: NeedAnalysesAnswerMap): NeedAnalysesResult {
  const mainComplaint = answers.mainComplaint?.id
  const hadRecentLabs = hasAnswer(answers, 'recentLabs', 'yes')

  const hasMetabolicSignals =
    hasAnswer(answers, 'bellyWeight', 'yes') ||
    hasAnswer(answers, 'sleepyAfterMeal', 'yes') ||
    hasAnswer(answers, 'sweetCraving', 'yes') ||
    mainComplaint === 'sweet-craving' ||
    mainComplaint === 'sleepy-after-meal'

  const hasThyroidSignals =
    hasAnswer(answers, 'morningFatigue', 'yes') ||
    hasAnswer(answers, 'cold', 'yes') ||
    hasAnswer(answers, 'hairLoss', 'yes') ||
    mainComplaint === 'fatigue' ||
    mainComplaint === 'hair-loss'

  const hasReproductiveSignals =
    hasAnswer(answers, 'irregularCycle', 'yes') ||
    hasAnswer(answers, 'hairLoss', 'yes') ||
    mainComplaint === 'irregular-cycle'

  const hasEdemaSignals = mainComplaint === 'edema'

  const groups: LabGroupKey[] = ['base']
  const reasons: string[] = []

  if (hasMetabolicSignals) {
    groups.push('metabolic')
    reasons.push('Есть признаки, которые могут быть связаны с углеводным обменом и чувствительностью к инсулину.')
  }

  if (hasThyroidSignals) {
    groups.push('thyroidDeficiency')
    reasons.push('Есть симптомы, которые могут напоминать дефицитные состояния или нарушения функции щитовидной железы.')
  }

  if (hasReproductiveSignals) {
    groups.push('reproductive')
    reasons.push('Есть поводы обсудить с врачом репродуктивные гормоны и цикл, чтобы не пропустить гормональные причины.')
  }

  if (hasEdemaSignals) {
    groups.push('edema')
    reasons.push('Отеки лучше обсуждать шире: не только со стороны щитовидной железы, но и со стороны почек, печени и белкового обмена.')
  }

  if (reasons.length === 0) {
    reasons.push('По ответам не видно одной узкой причины, поэтому логично начать с базового чек-апа и уже потом уточнять план вместе с врачом.')
  }

  if (hadRecentLabs) {
    reasons.push('Если анализы уже были недавно, может быть полезно не повторять всё подряд, а взять результаты с собой на прием и уточнить, что действительно стоит досдать.')
  }

  const avoidWithoutDoctor = [
    'Не сдавайте большие панели «на всё сразу» без жалоб и понятной цели.',
    'Не добавляйте антитела, половые гормоны и специальные маркеры просто «на всякий случай» — часть из них имеет смысл только по показаниям и в нужный день цикла.',
    'Не повторяйте недавние анализы без необходимости: интерпретация динамики важнее количества бланков.',
  ]

  return {
    groups: Array.from(new Set(groups)).filter((group) => LAB_GROUPS[group]),
    reasons,
    avoidWithoutDoctor,
    hadRecentLabs,
  }
}
