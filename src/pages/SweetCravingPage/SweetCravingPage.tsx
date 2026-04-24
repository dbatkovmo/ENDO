import { useState } from 'react'
import { Card } from 'antd'
import { SweetCravingQuiz, SweetCravingResult, calculate } from '@/features/sweet-craving'
import type { AnswerOption, SweetQuizResult } from '@/features/sweet-craving'
import styles from './SweetCravingPage.module.scss'

type Stage = 'quiz' | 'result'

export function SweetCravingPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<SweetQuizResult | null>(null)

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
        <span className={styles.emoji}>🍬</span>
        <h1 className={styles.title}>Почему я постоянно хочу сладкое?</h1>
        <p className={styles.subtitle}>
          {stage === 'quiz'
            ? '7 вопросов — возможные причины тяги к сладкому. Не заменяет приём врача.'
            : 'Ориентировочный результат на основе ответов'}
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <SweetCravingQuiz onFinish={handleFinish} />}
        {stage === 'result' && result && <SweetCravingResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
