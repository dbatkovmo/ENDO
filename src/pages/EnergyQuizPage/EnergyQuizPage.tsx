import { useState } from 'react'
import { Card } from 'antd'
import { EnergyQuiz, EnergyResult, calculate } from '@/features/energy-quiz'
import type { AnswerOption, EnergyQuizResult } from '@/features/energy-quiz'
import styles from './EnergyQuizPage.module.scss'

type Stage = 'quiz' | 'result'

export function EnergyQuizPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<EnergyQuizResult | null>(null)

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
        <span className={styles.emoji}>⚡</span>
        <h1 className={styles.title}>Почему у меня нет энергии?</h1>
        <p className={styles.subtitle}>
          {stage === 'quiz'
            ? '8 вопросов — и вы узнаете возможную причину хронической усталости'
            : 'Разбираем, что может стоять за вашей усталостью'}
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <EnergyQuiz onFinish={handleFinish} />}
        {stage === 'result' && result && <EnergyResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
