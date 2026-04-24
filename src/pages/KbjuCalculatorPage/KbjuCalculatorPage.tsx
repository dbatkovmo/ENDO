import { useState } from 'react'
import { Card, Divider, Typography } from 'antd'
import { CalculatorOutlined } from '@ant-design/icons'
import { KbjuForm, KbjuResult, calculate } from '@/features/kbju-calculator'
import type { KbjuFormValues, KbjuResultType } from '@/features/kbju-calculator'
import styles from './KbjuCalculatorPage.module.scss'

const { Title, Paragraph } = Typography

export function KbjuCalculatorPage() {
  const [result, setResult] = useState<KbjuResultType | null>(null)

  const handleCalculate = (values: KbjuFormValues) => {
    setResult(calculate(values))
  }

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <CalculatorOutlined className={styles.icon} />
        <Title level={2} className={styles.title}>Калькулятор КБЖУ</Title>
        <Paragraph className={styles.subtitle}>
          Рассчитайте суточную норму калорий, белков, жиров и углеводов
        </Paragraph>
      </div>

      <div className={styles.content}>
        <Card className={styles.formCard} title="Ваши параметры">
          <KbjuForm onCalculate={handleCalculate} />
        </Card>

        {result && (
          <>
            <Divider className={styles.divider} />
            <Card className={styles.resultCard} title="Ваш результат">
              <KbjuResult result={result} />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
