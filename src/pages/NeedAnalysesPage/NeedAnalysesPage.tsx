import { useState } from 'react'
import { Card } from 'antd'
import { NeedAnalyses, NeedAnalysesResult, calculate } from '@/features/need-analyses'
import type { AnswerOption, NeedAnalysesResultType } from '@/features/need-analyses'
import styles from './NeedAnalysesPage.module.scss'

type Stage = 'quiz' | 'result'

function scrollToTop() {
  globalThis.scrollTo?.({ top: 0, behavior: 'smooth' })
}

export function NeedAnalysesPage() {
  const [stage, setStage] = useState<Stage>('quiz')
  const [result, setResult] = useState<NeedAnalysesResultType | null>(null)

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
        <span className={styles.emoji}>🧪</span>
        <h1 className={styles.title}>Нужны ли вам анализы?</h1>
        <p className={styles.subtitle}>
          9 коротких вопросов — и вы получите ориентир, какие анализы может быть полезно обсудить с врачом.
        </p>
      </div>
      <Card className={styles.card}>
        {stage === 'quiz' && <NeedAnalyses onFinish={handleFinish} />}
        {stage === 'result' && result && <NeedAnalysesResult result={result} onRetake={handleRetake} />}
      </Card>
    </div>
  )
}
