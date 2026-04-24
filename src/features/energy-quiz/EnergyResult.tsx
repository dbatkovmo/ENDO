import { Alert, Button, Divider, Tag, Tooltip } from 'antd'
import { CheckCircleOutlined, ExperimentOutlined, InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { ALL_LABS, CAUSE_CONFIGS } from './energy-quiz.data'
import type { EnergyCategory, EnergyQuizResult } from './energy-quiz.types'
import styles from './EnergyResult.module.scss'

interface Props { result: EnergyQuizResult; onRetake: () => void }

const CATEGORY_TAG_COLORS: Record<EnergyCategory, string> = {
  thyroid: 'cyan', bloodSugar: 'blue', stress: 'purple', sleep: 'geekblue', deficiency: 'orange',
}

export function EnergyResult({ result, onRetake }: Props) {
  const { primary, secondary, others, scores } = result
  const primaryCfg = CAUSE_CONFIGS[primary]
  const secondaryCfg = secondary ? CAUSE_CONFIGS[secondary] : null
  const activeCategories = new Set<EnergyCategory>([
    primary, ...(secondary ? [secondary] : []), ...others,
  ])

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Возможная причина</p>
        <h2 className={styles.title}>Вот что может забирать вашу энергию</h2>
        <p className={styles.sub}>Это скрининг, а не диагноз.</p>
      </div>

      <div className={styles.primaryCard} style={{ borderColor: primaryCfg.color, background: `${primaryCfg.color}10` }}>
        <div className={styles.primaryTop}>
          <span className={styles.primaryEmoji}>{primaryCfg.emoji}</span>
          <div className={styles.primaryMeta}>
            <Tag color={primaryCfg.tagColor} className={styles.badge}>Главная причина</Tag>
            <h3 className={styles.primaryTitle} style={{ color: primaryCfg.color }}>{primaryCfg.title}</h3>
          </div>
        </div>
        <p className={styles.description}>{primaryCfg.description}</p>
        <p className={styles.explanation}>{primaryCfg.explanation}</p>
        <div className={styles.tips}>
          <p className={styles.tipsTitle}>💡 Что можно сделать</p>
          <ul className={styles.tipsList}>
            {primaryCfg.tips.map((tip, i) => <li key={i}>{tip}</li>)}
          </ul>
        </div>
      </div>

      {secondaryCfg && secondary && (
        <div className={styles.secondaryCard} style={{ borderColor: secondaryCfg.color }}>
          <div className={styles.secondaryTop}>
            <span className={styles.secondaryEmoji}>{secondaryCfg.emoji}</span>
            <div>
              <Tag color={secondaryCfg.tagColor} className={styles.badgeSm}>Дополнительный фактор</Tag>
              <h4 className={styles.secondaryTitle}>{secondaryCfg.title}</h4>
            </div>
          </div>
          <p className={styles.secondaryDesc}>{secondaryCfg.description}</p>
        </div>
      )}

      {others.length > 0 && (
        <div className={styles.othersBlock}>
          <p className={styles.othersTitle}>Также отмечены</p>
          <div className={styles.othersTags}>
            {others.map((cat) => (
              <Tooltip key={cat} title={`Очков: ${scores[cat]}`}>
                <Tag color={CATEGORY_TAG_COLORS[cat]}>{CAUSE_CONFIGS[cat].emoji} {CAUSE_CONFIGS[cat].title}</Tag>
              </Tooltip>
            ))}
          </div>
        </div>
      )}

      <div className={styles.labsCard}>
        <div className={styles.labsHeader}>
          <ExperimentOutlined className={styles.labsIcon} />
          <div>
            <p className={styles.labsTitle}>Какие анализы могут быть полезны</p>
            <p className={styles.labsSub}>Список для обсуждения с врачом</p>
          </div>
        </div>
        <div className={styles.labsList}>
          {ALL_LABS.map((lab) => {
            const isRelevant = lab.categories.some((c) => activeCategories.has(c))
            const firstActive = lab.categories.find((c) => activeCategories.has(c))
            return (
              <div key={lab.name} className={`${styles.labItem} ${isRelevant ? styles.labItemRelevant : ''}`}>
                <CheckCircleOutlined className={styles.labCheck} style={{ color: isRelevant ? '#52c41a' : '#d9d9d9' }} />
                <span className={styles.labName}>{lab.name}</span>
                {isRelevant && firstActive && (
                  <Tag color={CATEGORY_TAG_COLORS[firstActive]} className={styles.labTag}>Приоритет</Tag>
                )}
              </div>
            )
          })}
        </div>
      </div>

      <Alert type="info" showIcon icon={<InfoCircleOutlined />}
        message="Важно"
        description="Результаты теста ориентировочные. Хроническая усталость может иметь несколько причин одновременно."
        className={styles.disclaimer} />

      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEmoji}>🩺</span>
          <div>
            <p className={styles.ctaTitle}>Если усталость длится больше 2–3 недель</p>
            <p className={styles.ctaText}>Запишитесь на консультацию эндокринолога или нутрициолога — специалист поможет найти причину.</p>
          </div>
        </div>
      </div>

      <Divider />
      <Button icon={<ReloadOutlined />} onClick={onRetake} block size="large" className={styles.retakeBtn}>
        Пройти тест заново
      </Button>
    </div>
  )
}
