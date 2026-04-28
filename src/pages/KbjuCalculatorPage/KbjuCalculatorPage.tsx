import { useState } from 'react'
import { Card, Divider, Typography } from 'antd'
import { CalculatorOutlined } from '@ant-design/icons'
import { KbjuForm, KbjuResult, calculate } from '@/features/kbju-calculator'
import type { KbjuFormValues, KbjuResultType } from '@/features/kbju-calculator'
import './KbjuCalculatorPage.scss'

const { Title, Paragraph } = Typography

export function KbjuCalculatorPage() {
  const [result, setResult] = useState<KbjuResultType | null>(null)

  const handleCalculate = (values: KbjuFormValues) => {
    setResult(calculate(values))
  }

  return (
    <div className="kbju-page__page">
      <div className="kbju-page__header">
        <CalculatorOutlined className="kbju-page__icon" />
        <Title level={2} className="kbju-page__title">Калькулятор КБЖУ</Title>
        <Paragraph className="kbju-page__subtitle">
          Рассчитайте суточную норму калорий, белков, жиров и углеводов
        </Paragraph>
      </div>

      <div className="kbju-page__content">
        <Card className="kbju-page__form-card" title="Ваши параметры">
          <KbjuForm onCalculate={handleCalculate} />
        </Card>

        {result && (
          <>
            <Divider className="kbju-page__divider" />
            <Card className="kbju-page__result-card" title="Ваш результат">
              <KbjuResult result={result} />
            </Card>
          </>
        )}
      </div>
    </div>
  )
}
