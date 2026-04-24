import { Alert, Button, Divider, Tag } from 'antd'
import { InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { CAUSE_CONFIGS } from './weight-stall-quiz.data'
import type { WeightStallResult as WeightStallResultType } from './weight-stall-quiz.types'
import styles from './WeightStallResult.module.scss'

interface Props {
  result: WeightStallResultType
  onRetake: () => void
}

export function WeightStallResult({ result, onRetake }: Props) {
  const primaryCause = CAUSE_CONFIGS[result.primary]
  const secondaryCause = result.secondary ? CAUSE_CONFIGS[result.secondary] : null

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Результат</p>
        <h2 className={styles.title}>Почему вес может стоять именно у вас</h2>
        <p className={styles.sub}>Мы выделили главную причину, вторичную причину и что можно сделать дальше.</p>
      </div>

      <section
        className={styles.primaryCard}
        style={{ borderColor: primaryCause.color, background: `${primaryCause.color}10` }}
      >
        <div className={styles.cardTop}>
          <span className={styles.cardEmoji}>{primaryCause.emoji}</span>
          <div className={styles.cardMeta}>
            <Tag color={primaryCause.tagColor} className={styles.badge}>Главная причина</Tag>
            <h3 className={styles.cardTitle} style={{ color: primaryCause.color }}>{primaryCause.title}</h3>
          </div>
        </div>

        <p className={styles.description}>{primaryCause.description}</p>

        <div className={styles.recommendations}>
          <p className={styles.recommendationsTitle}>3 рекомендации</p>
          <ul className={styles.recommendationsList}>
            {primaryCause.recommendations.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      {secondaryCause && (
        <section className={styles.secondaryCard} style={{ borderColor: secondaryCause.color }}>
          <div className={styles.cardTop}>
            <span className={styles.secondaryEmoji}>{secondaryCause.emoji}</span>
            <div className={styles.cardMeta}>
              <Tag color={secondaryCause.tagColor} className={styles.badge}>Вторичная причина</Tag>
              <h3 className={styles.secondaryTitle}>{secondaryCause.title}</h3>
            </div>
          </div>
          <p className={styles.secondaryDescription}>{secondaryCause.description}</p>
        </section>
      )}

      <Alert
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
        message="Важно"
        description="Этот тест не заменяет консультацию врача и не ставит диагноз."
        className={styles.disclaimer}
      />

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEmoji}>📍</span>
          <div>
            <p className={styles.ctaTitle}>Хотите понять, почему вес стоит именно у вас?</p>
            <p className={styles.ctaText}>Запишитесь на консультацию эндокринолога-диетолога.</p>
          </div>
        </div>
      </section>

      <Divider />
      <Button icon={<ReloadOutlined />} onClick={onRetake} block size="large" className={styles.retakeBtn}>
        Пройти тест заново
      </Button>
    </div>
  )
}
