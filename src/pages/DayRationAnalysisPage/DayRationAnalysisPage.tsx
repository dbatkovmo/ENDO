import { useState } from 'react'
import { Card } from 'antd'
import {
  DayRationAnalysisForm,
  DayRationAnalysisResult,
  analyze,
} from '@/features/day-ration-analysis'
import type {
  DayRationAnalysisFormValues,
  DayRationAnalysisResultData,
} from '@/features/day-ration-analysis'
import styles from './DayRationAnalysisPage.module.scss'

export function DayRationAnalysisPage() {
  const [result, setResult] = useState<DayRationAnalysisResultData | null>(null)

  const handleAnalyze = (values: DayRationAnalysisFormValues) => {
    setResult(analyze(values))
    globalThis.scrollTo?.({ top: 0, behavior: 'smooth' })
  }

  const handleReset = () => {
    setResult(null)
    globalThis.scrollTo?.({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <span className={styles.emoji}>🍽️</span>
        <h1 className={styles.title}>Разбор рациона за 1 день</h1>
        <p className={styles.subtitle}>
          Опишите, что вы ели за день, и приложение даст базовый разбор по структуре рациона,
          белку, овощам, быстрым углеводам и напиткам.
        </p>
      </div>

      <Card className={styles.card}>
        {!result && <DayRationAnalysisForm onAnalyze={handleAnalyze} />}
        {result && <DayRationAnalysisResult result={result} onReset={handleReset} />}
      </Card>
    </div>
  )
}
