import { Button, Form, InputNumber, Radio, Select } from 'antd'
import { ManOutlined, WomanOutlined } from '@ant-design/icons'
import type { ActivityLevel, DeficitGoal, FatBurnForecastFormValues } from './fat-burn-forecast.types'
import { ACTIVITY_LABELS, GOAL_LABELS } from './fat-burn-forecast.utils'
import styles from './FatBurnForecastForm.module.scss'

interface Props {
  onCalculate: (values: FatBurnForecastFormValues) => void
}

const activityOptions = (Object.keys(ACTIVITY_LABELS) as ActivityLevel[]).map((key) => ({
  value: key,
  label: ACTIVITY_LABELS[key],
}))

const goalOptions = (Object.keys(GOAL_LABELS) as DeficitGoal[]).map((key) => ({
  value: key,
  label: GOAL_LABELS[key],
}))

export function FatBurnForecastForm({ onCalculate }: Props) {
  const [form] = Form.useForm<FatBurnForecastFormValues>()

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ gender: 'female', activity: 'moderate', goal: 'moderate' }}
      onFinish={onCalculate}
      className={styles.form}
    >
      <Form.Item name="gender" label="Пол">
        <Radio.Group className={styles.genderGroup}>
          <Radio.Button value="male">
            <ManOutlined /> Мужской
          </Radio.Button>
          <Radio.Button value="female">
            <WomanOutlined /> Женский
          </Radio.Button>
        </Radio.Group>
      </Form.Item>

      <div className={styles.row}>
        <Form.Item
          name="age"
          label="Возраст"
          rules={[{ required: true, message: 'Введите возраст' }]}
        >
          <InputNumber min={10} max={100} placeholder="35" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="height"
          label="Рост (см)"
          rules={[{ required: true, message: 'Введите рост' }]}
        >
          <InputNumber min={100} max={250} placeholder="170" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="weight"
          label="Вес (кг)"
          rules={[{ required: true, message: 'Введите вес' }]}
        >
          <InputNumber min={30} max={300} placeholder="72" style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <Form.Item name="activity" label="Активность">
        <Select options={activityOptions} />
      </Form.Item>

      <Form.Item name="goal" label="Цель">
        <Radio.Group className={styles.goalGroup}>
          {goalOptions.map((option) => (
            <Radio.Button key={option.value} value={option.value}>
              {option.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      <Form.Item
        name="bodyFatPercent"
        label="Примерный процент жира, если знаете"
      >
        <InputNumber min={3} max={70} placeholder="Например, 30" style={{ width: '100%' }} addonAfter="%" />
      </Form.Item>
      <p className={styles.hint}>Если не знаете, поле можно пропустить.</p>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Рассчитать прогноз
        </Button>
      </Form.Item>
    </Form>
  )
}
