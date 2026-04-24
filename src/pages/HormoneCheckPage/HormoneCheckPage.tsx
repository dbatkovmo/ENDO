import { useState } from 'react'
import { Card } from 'antd'
import { HormoneCheck, HormoneCheckResult, calculate } from '@/features/hormone-check'
import type { AnswerOption, HormoneCheckResultType } from '@/features/hormone-check'
import styles from './HormoneCheckPage.module.scss'

type Stage = 'quiz' | 'result'

export function HormoneCheckPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<HormoneCheckResultType | null>(null)

  const handleFinish = (answers: Record<string, AnswerOption>) => {
    setResult(calculate(answers))
    setStage('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleRetake = () => {
    setResult(null)
    setStage('quiz')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.emoji}>🩺</span>
        <h1 className={styles.title}>Есть ли у вас гормональный дисбаланс?</h1>
        <p className={styles.subtitle}>
          {stage === 'quiz'
            ? '9 вопросов — скрининг симптомов, которые стоит обсудить с врачом'
            : 'Разбираем, что могут означать ваши симптомы'}
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <HormoneCheck onFinish={handleFinish} />}
        {stage === 'result' && result && <HormoneCheckResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
