import { Button, Form, Input, Radio, message } from 'antd'
import { GOAL_OPTIONS } from './day-ration-analysis.data'
import type { DayRationAnalysisFormValues } from './day-ration-analysis.types'
import styles from './DayRationAnalysisForm.module.scss'

interface Props {
  onAnalyze: (values: DayRationAnalysisFormValues) => void
}

const { TextArea } = Input

export function DayRationAnalysisForm({ onAnalyze }: Props) {
  const [form] = Form.useForm<DayRationAnalysisFormValues>()

  const handleFinish = (values: DayRationAnalysisFormValues) => {
    const hasAnyFoodText = [values.breakfast, values.lunch, values.dinner, values.snacks, values.drinks]
      .some((value) => value.trim().length > 0)

    if (!hasAnyFoodText) {
      message.error('Добавьте хотя бы один прием пищи или напиток для разбора.')
      return
    }

    onAnalyze(values)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{
        breakfast: '',
        lunch: '',
        dinner: '',
        snacks: '',
        drinks: '',
        goal: 'loss',
        sweetCraving: 'no',
        sleepyAfterMeal: 'no',
      }}
      onFinish={handleFinish}
      className={styles.form}
    >
      <Form.Item name="breakfast" label="Завтрак">
        <TextArea
          className={styles.textarea}
          placeholder="Например: яйца, тост, кофе с молоком"
        />
      </Form.Item>

      <Form.Item name="lunch" label="Обед">
        <TextArea
          className={styles.textarea}
          placeholder="Например: курица, рис, салат"
        />
      </Form.Item>

      <Form.Item name="dinner" label="Ужин">
        <TextArea
          className={styles.textarea}
          placeholder="Например: рыба, картофель, овощи"
        />
      </Form.Item>

      <Form.Item name="snacks" label="Перекусы">
        <TextArea
          className={styles.textarea}
          placeholder="Например: йогурт, печенье, орехи, шоколад"
        />
      </Form.Item>

      <Form.Item name="drinks" label="Напитки">
        <TextArea
          className={styles.textarea}
          placeholder="Например: вода, чай, латте, сок"
        />
      </Form.Item>

      <Form.Item name="goal" label="Цель">
        <Radio.Group className={styles.goalGroup}>
          {GOAL_OPTIONS.map((option) => (
            <Radio.Button key={option.value} value={option.value}>
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item name="sweetCraving" label="Есть ли тяга к сладкому">
        <Radio.Group className={styles.binaryGroup}>
          <Radio.Button value="yes">Да</Radio.Button>
          <Radio.Button value="no">Нет</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item name="sleepyAfterMeal" label="Есть ли сонливость после еды">
        <Radio.Group className={styles.binaryGroup}>
          <Radio.Button value="yes">Да</Radio.Button>
          <Radio.Button value="no">Нет</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block className={styles.submit}>
          Разобрать рацион
        </Button>
      </Form.Item>
    </Form>
  )
}
