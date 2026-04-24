import { Button, Form, InputNumber, Radio, Select, Switch, Tooltip } from 'antd'
import { InfoCircleOutlined, ManOutlined, WomanOutlined } from '@ant-design/icons'
import type { CyclePhase, KbjuFormValues } from './kbju.types'
import { ACTIVITY_LABELS, GOAL_LABELS, getPhaseByDay } from './kbju.utils'
import { PHASE_CONFIGS } from './cycle.data'
import styles from './KbjuForm.module.scss'

interface Props {
  onCalculate: (values: KbjuFormValues) => void
}

const activityOptions = (Object.keys(ACTIVITY_LABELS) as KbjuFormValues['activity'][]).map(
  (key) => ({ value: key, label: ACTIVITY_LABELS[key] }),
)

const goalOptions = (Object.keys(GOAL_LABELS) as KbjuFormValues['goal'][]).map((key) => ({
  value: key,
  label: GOAL_LABELS[key],
}))

const PHASES = Object.entries(PHASE_CONFIGS) as [CyclePhase, (typeof PHASE_CONFIGS)[CyclePhase]][]

export function KbjuForm({ onCalculate }: Props) {
  const [form] = Form.useForm<KbjuFormValues>()

  const handleCycleDayChange = (day: number | null) => {
    if (day == null) return
    form.setFieldValue('cyclePhase', getPhaseByDay(day))
  }

  const handlePhaseClick = (phase: CyclePhase) => {
    form.setFieldValue('cyclePhase', phase)
    form.setFieldValue('cycleDay', undefined)
  }

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={{ gender: 'male', activity: 'moderate', goal: 'maintain', useCycle: false }}
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
          label="Возраст (лет)"
          rules={[{ required: true, message: 'Введите возраст' }]}
        >
          <InputNumber min={10} max={100} placeholder="25" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="weight"
          label="Вес (кг)"
          rules={[{ required: true, message: 'Введите вес' }]}
        >
          <InputNumber min={30} max={300} placeholder="70" style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item
          name="height"
          label="Рост (см)"
          rules={[{ required: true, message: 'Введите рост' }]}
        >
          <InputNumber min={100} max={250} placeholder="175" style={{ width: '100%' }} />
        </Form.Item>
      </div>

      <Form.Item name="activity" label="Уровень активности">
        <Select options={activityOptions} />
      </Form.Item>

      <Form.Item name="goal" label="Цель">
        <Radio.Group className={styles.goalGroup}>
          {goalOptions.map((opt) => (
            <Radio.Button key={opt.value} value={opt.value}>
              {opt.label}
            </Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>

      {/* Секция цикла — только для женщин */}
      <Form.Item noStyle shouldUpdate={(prev, cur) => prev.gender !== cur.gender}>
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'female' ? (
            <div className={styles.cycleSection}>
              <div className={styles.cycleSectionHeader}>
                <span className={styles.cycleSectionTitle}>
                  Учитывать фазу цикла
                  <Tooltip title="Корректирует калорийность и пропорции КБЖУ в зависимости от фазы менструального цикла">
                    <InfoCircleOutlined className={styles.infoIcon} />
                  </Tooltip>
                </span>
                <Form.Item name="useCycle" valuePropName="checked" noStyle>
                  <Switch />
                </Form.Item>
              </div>

              <Form.Item noStyle shouldUpdate={(prev, cur) => prev.useCycle !== cur.useCycle}>
                {({ getFieldValue: get }) =>
                  get('useCycle') ? (
                    <div className={styles.cycleBody}>
                      <div className={styles.cycleInputRow}>
                        <Form.Item
                          name="cycleDay"
                          label={
                            <span>
                              День цикла{' '}
                              <span className={styles.cycleDayHint}>(автоопределяет фазу)</span>
                            </span>
                          }
                          className={styles.cycleDayItem}
                        >
                          <InputNumber
                            min={1}
                            max={35}
                            placeholder="1–35"
                            style={{ width: '100%' }}
                            onChange={handleCycleDayChange}
                          />
                        </Form.Item>
                      </div>

                      <p className={styles.orLabel}>или выберите фазу вручную</p>

                      <Form.Item name="cyclePhase" noStyle>
                        <div className={styles.phases}>
                          {PHASES.map(([key, cfg]) => (
                            <Form.Item
                              key={key}
                              noStyle
                              shouldUpdate={(prev, cur) => prev.cyclePhase !== cur.cyclePhase}
                            >
                              {({ getFieldValue: gfv }) => {
                                const active = gfv('cyclePhase') === key
                                return (
                                  <button
                                    type="button"
                                    className={`${styles.phaseCard} ${active ? styles.phaseCardActive : ''}`}
                                    style={active ? { borderColor: cfg.color, background: `${cfg.color}10` } : {}}
                                    onClick={() => handlePhaseClick(key)}
                                  >
                                    <span className={styles.phaseEmoji}>{cfg.emoji}</span>
                                    <span className={styles.phaseLabel}>{cfg.label}</span>
                                    <span className={styles.phaseDays}>{cfg.days}</span>
                                    <span
                                      className={styles.phaseDelta}
                                      style={{ color: cfg.calorieDelta >= 0 ? '#52c41a' : '#ff4d4f' }}
                                    >
                                      {cfg.calorieDelta > 0 ? `+${cfg.calorieDelta}` : cfg.calorieDelta} ккал
                                    </span>
                                  </button>
                                )
                              }}
                            </Form.Item>
                          ))}
                        </div>
                      </Form.Item>
                    </div>
                  ) : null
                }
              </Form.Item>
            </div>
          ) : null
        }
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" size="large" block>
          Рассчитать
        </Button>
      </Form.Item>
    </Form>
  )
}
