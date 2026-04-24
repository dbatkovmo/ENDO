import { useState } from 'react'
import { Card, Divider, Typography } from 'antd'
import { FireOutlined } from '@ant-design/icons'
import { FatBurnForecastForm, FatBurnForecastResult, calculate } from '@/features/fat-burn-forecast'
import type { FatBurnForecastFormValues, FatBurnForecastResultType } from '@/features/fat-burn-forecast'
import styles from './FatBurnForecastPage.module.scss'

const { Title, Paragraph } = Typography

export function FatBurnForecastPage() {
  const [result, setResult] = useState<FatBurnForecastResultType | null>(null)
  const [goal, setGoal] = useState<FatBurnForecastFormValues['goal']>('moderate')

  const handleCalculate = (values: FatBurnForecastFormValues) => {
    setGoal(values.goal)
    setResult(calculate(values))
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <FireOutlined className={styles.icon} />
        <Title level={2} className={styles.title}>Сколько жира вы реально можете сжечь?</Title>
        <Paragraph className={styles.subtitle}>
          Реалистичный прогноз снижения жира за 30 и 90 дней на основе формулы Миффлина–Сан Жеора,
          активности и выбранного дефицита.
        </Paragraph>
      </div>

      <div className={styles.content}>
        <Card className={styles.formCard} title="Ваши параметры">
          <FatBurnForecastForm onCalculate={handleCalculate} />
        </Card>

        {result && (
          <>
            <Divider className={styles.divider} />
            <Card className={styles.resultCard} title="Ваш прогноз">
              <FatBurnForecastResult result={result} goal={goal} />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
