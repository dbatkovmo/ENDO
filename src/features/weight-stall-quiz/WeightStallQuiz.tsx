import { useState } from 'react'
import { Button, Progress } from 'antd'
import { ArrowLeftOutlined } from '@ant-design/icons'
import { QUESTIONS } from './weight-stall-quiz.data'
import type { AnswerOption } from './weight-stall-quiz.types'
import styles from './WeightStallQuiz.module.scss'

interface Props { onFinish: (answers: Record<string, AnswerOption>) => void }

export function WeightStallQuiz({ onFinish }: Props) {
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState<Record<string, AnswerOption>>({})
  const [selected, setSelected] = useState<string | null>(null)

  const question = QUESTIONS[step]
  const isLast = step === QUESTIONS.length - 1
  const progress = Math.round((step / QUESTIONS.length) * 100)

  const handleNext = () => {
    if (!selected) return
    const option = question.options.find((o) => o.id === selected)!
    const newAnswers = { ...answers, [question.id]: option }
    if (isLast) onFinish(newAnswers)
    else { setAnswers(newAnswers); setSelected(null); setStep((s) => s + 1) }
  }
  const handleBack = () => {
    if (step === 0) return
    setStep((s) => s - 1)
    setSelected(answers[QUESTIONS[step - 1].id]?.id ?? null)
  }

  return (
    <div className={styles.quiz}>
      <div className={styles.progressArea}>
        <div className={styles.progressMeta}>
          <span className={styles.stepLabel}>Вопрос {step + 1} из {QUESTIONS.length}</span>
          <span className={styles.stepPct}>{progress}%</span>
        </div>
        <Progress percent={progress} showInfo={false}
          strokeColor={{ from: '#fa8c16', to: '#f5222d' }}
          trailColor="#f0f0f0" size={['100%', 6]} />
      </div>
      <div className={styles.questionBlock}>
        <p className={styles.questionNum}>#{step + 1}</p>
        <h2 className={styles.questionText}>{question.text}</h2>
      </div>
      <div className={styles.options}>
        {question.options.map((option) => {
          const isActive = selected === option.id
          return (
            <button key={option.id} type="button"
              className={`${styles.option} ${isActive ? styles.optionActive : ''}`}
              onClick={() => setSelected(option.id)}>
              <span className={`${styles.optionCircle} ${isActive ? styles.optionCircleActive : ''}`}>
                {isActive && <span className={styles.optionDot} />}
              </span>
              <span className={styles.optionLabel}>{option.label}</span>
            </button>
          )
        })}
      </div>
      <div className={styles.nav}>
        {step > 0 && (
          <Button icon={<ArrowLeftOutlined />} onClick={handleBack} className={styles.backBtn}>Назад</Button>
        )}
        <Button type="primary" size="large" disabled={!selected} onClick={handleNext} className={styles.nextBtn}>
          {isLast ? 'Узнать причину' : 'Далее'}
        </Button>
      </div>
    </div>
  )
}
