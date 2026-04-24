import { useState } from 'react'
import { Card } from 'antd'
import { WeightStallQuiz, WeightStallResult, calculate } from '@/features/weight-stall-quiz'
import type { AnswerOption, WeightStallResultType } from '@/features/weight-stall-quiz'
import styles from './WeightStallPage.module.scss'

type Stage = 'quiz' | 'result'

function scrollToTop() {
  globalThis.scrollTo?.({ top: 0, behavior: 'smooth' })
}

export function WeightStallPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<WeightStallResultType | null>(null)

  const handleFinish = (answers: Record<string, AnswerOption>) => {
    setResult(calculate(answers))
    setStage('result')
    scrollToTop()
  }
  const handleRetake = () => {
    setResult(null)
    setStage('quiz')
    scrollToTop()
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.emoji}>⚖️</span>
        <h1 className={styles.title}>Почему я не худею?</h1>
        <p className={styles.subtitle}>
          {stage === 'quiz'
            ? '9 вопросов — и вы получите 1–2 основные причины, почему вес стоит'
            : 'Главная причина, вторичная причина и что можно сделать дальше'}
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <WeightStallQuiz onFinish={handleFinish} />}
        {stage === 'result' && result && <WeightStallResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
