import { Alert, Card, Statistic, Tag } from 'antd'
import { FireOutlined, InfoCircleOutlined, ThunderboltOutlined } from '@ant-design/icons'
import type { FatBurnForecastResult as FatBurnForecastResultType } from './fat-burn-forecast.types'
import { GOAL_LABELS } from './fat-burn-forecast.utils'
import styles from './FatBurnForecastResult.module.scss'

interface Props {
  result: FatBurnForecastResultType
  goal: keyof typeof GOAL_LABELS
}

export function FatBurnForecastResult({ result, goal }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.badges}>
        <Tag color={goal === 'gentle' ? 'green' : goal === 'moderate' ? 'blue' : 'orange'} className={styles.badge}>
          {GOAL_LABELS[goal]}
        </Tag>
        <Tag color="default" className={styles.badge}>
          Дефицит {result.deficitPercent}%
        </Tag>
      </div>

      <div className={styles.stats}>
        <Card className={styles.statCard} variant="borderless">
          <Statistic
            title="Поддерживающая калорийность"
            value={result.tdee}
            suffix="ккал"
            prefix={<FireOutlined style={{ color: '#fa8c16' }} />}
          />
          <p className={styles.statHint}>Примерный TDEE с учетом активности.</p>
        </Card>

        <Card className={styles.statCard} variant="borderless">
          <Statistic
            title="Калорийность для снижения"
            value={result.targetCalories}
            suffix="ккал"
            prefix={<ThunderboltOutlined style={{ color: '#1677ff' }} />}
          />
          <p className={styles.statHint}>Ориентир для выбранного темпа снижения.</p>
        </Card>

        <Card className={styles.statCard} variant="borderless">
          <Statistic
            title="Примерный дефицит в день"
            value={result.dailyDeficit}
            suffix="ккал"
          />
          <p className={styles.statHint}>Расчетный дефицит по формуле, а не гарантия темпа.</p>
        </Card>
      </div>

      <div className={styles.forecast}>
        <section className={styles.forecastCard}>
          <div className={styles.forecastTop}>
            <p className={styles.forecastLabel}>Реалистичный прогноз жира за 30 дней</p>
            <Tag color="blue">30 дней</Tag>
          </div>
          <p className={styles.forecastValue} style={{ color: '#1677ff' }}>{result.fatLoss30} кг</p>
          <p className={styles.forecastHint}>Это ориентир по жировой массе при сохранении выбранного дефицита.</p>
        </section>

        <section className={styles.forecastCard}>
          <div className={styles.forecastTop}>
            <p className={styles.forecastLabel}>Реалистичный прогноз жира за 90 дней</p>
            <Tag color="purple">90 дней</Tag>
          </div>
          <p className={styles.forecastValue} style={{ color: '#722ed1' }}>{result.fatLoss90} кг</p>
          <p className={styles.forecastHint}>Долгий горизонт полезнее смотреть именно по жиру, а не только по весам.</p>
        </section>
      </div>

      {result.projectedFatMass && (
        <section className={styles.infoCard}>
          <h3 className={styles.sectionTitle}>Если ваш процент жира близок к реальности</h3>
          <p className={styles.infoText}>
            Сейчас это примерно {result.projectedFatMass.currentKg} кг жира. При таком темпе может остаться около{' '}
            {result.projectedFatMass.after30Kg} кг через 30 дней и около {result.projectedFatMass.after90Kg} кг через 90 дней.
          </p>
        </section>
      )}

      {result.warnings.length > 0 && (
        <div className={styles.warnings}>
          {result.warnings.map((warning) => (
            <Alert
              key={warning}
              type="warning"
              showIcon
              icon={<InfoCircleOutlined />}
              message={warning}
              className={styles.warning}
            />
          ))}
        </div>
      )}

      <section className={styles.notesCard}>
        <h3 className={styles.sectionTitle}>Важно понимать</h3>
        <p className={styles.infoText}>
          Вес на весах может уходить быстрее или медленнее из-за воды, отеков, цикла, соли, сна и стресса.
        </p>
      </section>

      <section className={styles.cta}>
        <p className={styles.ctaTitle}>Хотите рассчитать безопасный темп снижения веса под ваши анализы и гормональный фон?</p>
        <p className={styles.ctaText}>Запишитесь на консультацию.</p>
      </section>
    </div>
  )
}
