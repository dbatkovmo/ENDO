import { useState } from 'react'
import { Card } from 'antd'
import { WeightStallQuiz, WeightStallResult, calculate } from '@/features/weight-stall-quiz'
import type { AnswerOption, WeightStallResultType } from '@/features/weight-stall-quiz'
import styles from './WeightStallPage.module.scss'

type Stage = 'quiz' | 'result'

export function WeightStallPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<WeightStallResultType | null>(null)

  const handleFinish = (answers: Record<string, AnswerOption>) => {
    setResult(calculate(answers))
    setStage('result')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  const handleRetake = () => {
    setResult(null); setStage('quiz')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.emoji}>⚖️</span>
        <h1 className={styles.title}>Почему я не худею?</h1>
        <p className={styles.subtitle}>
          {stage === 'quiz'
            ? '9 вопросов — и вы узнаете возможную причину остановки веса'
            : 'Разбираем, что может стоять за плато на весах'}
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <WeightStallQuiz onFinish={handleFinish} />}
        {stage === 'result' && result && <WeightStallResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
