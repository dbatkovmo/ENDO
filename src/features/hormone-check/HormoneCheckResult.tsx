import { Alert, Button, Divider, Tag, Tooltip } from 'antd'
import { CheckCircleOutlined, ExperimentOutlined, InfoCircleOutlined, ReloadOutlined, WarningOutlined } from '@ant-design/icons'
import { ALL_LABS, CAUSE_CONFIGS, RISK_CONFIGS } from './hormone-check.data'
import type { HormoneCategory, HormoneCheckResult } from './hormone-check.types'
import styles from './HormoneCheckResult.module.scss'

interface Props { result: HormoneCheckResult; onRetake: () => void }

const CATEGORY_TAG_COLORS: Record<HormoneCategory, string> = {
  thyroid: 'cyan', insulin: 'orange', androgen: 'volcano',
  stress: 'purple', deficiency: 'green', hormone: 'magenta',
}

export function HormoneCheckResult({ result, onRetake }: Props) {
  const { primary, secondary, others, scores, riskLevel } = result
  const primaryCfg = CAUSE_CONFIGS[primary]
  const secondaryCfg = secondary ? CAUSE_CONFIGS[secondary] : null
  const riskCfg = RISK_CONFIGS[riskLevel]

  const activeCategories = new Set<HormoneCategory>([
    primary,
    ...(secondary ? [secondary] : []),
    ...others,
  ])

  return (
    <div className={styles.root}>
      <div className={styles.riskBanner} style={{ background: riskCfg.background, borderColor: riskCfg.border }}>
        <div className={styles.riskTop}>
          <WarningOutlined className={styles.riskIcon} style={{ color: riskCfg.color }} />
          <div className={styles.riskContent}>
            <div className={styles.riskLabelRow}>
              <span className={styles.riskEyebrow}>Уровень признаков</span>
              <Tag color={riskCfg.tagColor} className={styles.riskTag}>{riskCfg.label}</Tag>
            </div>
            <p className={styles.riskDesc} style={{ color: riskCfg.color }}>{riskCfg.description}</p>
          </div>
        </div>
        <p className={styles.riskDisclaimer}>Это не диагноз — а признаки, которые стоит обсудить с врачом</p>
      </div>

      <div className={styles.header}>
        <p className={styles.eyebrow} style={{ color: primaryCfg.color }}>Основное направление</p>
        <h2 className={styles.title}>Вот на что указывают ваши симптомы</h2>
      </div>

      <div className={styles.primaryCard} style={{ borderColor: primaryCfg.color, background: `${primaryCfg.color}10` }}>
        <div className={styles.primaryTop}>
          <span className={styles.primaryEmoji}>{primaryCfg.emoji}</span>
          <div className={styles.primaryMeta}>
            <Tag color={primaryCfg.tagColor} className={styles.badge}>Основное направление</Tag>
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
          <p className={styles.othersTitle}>Также отмечены симптомы</p>
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
            <p className={styles.labsTitle}>Анализы для обсуждения с врачом</p>
            <p className={styles.labsSub}>Базовые актуальны всем. Приоритетные — по вашей симптоматике. «По показаниям» назначает врач.</p>
          </div>
        </div>
        <div className={styles.labsList}>
          {ALL_LABS.map((lab) => {
            const isRelevant = lab.isBase || lab.categories.some((c) => activeCategories.has(c))
            const firstActive = lab.categories.find((c) => activeCategories.has(c))
            return (
              <div key={lab.name} className={`${styles.labItem} ${isRelevant ? styles.labItemRelevant : ''}`}>
                <CheckCircleOutlined className={styles.labCheck} style={{ color: isRelevant ? '#52c41a' : '#d9d9d9' }} />
                <span className={styles.labName}>{lab.name}</span>
                <div className={styles.labTags}>
                  {lab.isBase && <Tag color="default" className={styles.labTag}>Базовый</Tag>}
                  {lab.conditional && <Tag color="default" className={styles.labTag}>По показаниям</Tag>}
                  {isRelevant && !lab.isBase && firstActive && (
                    <Tag color={CATEGORY_TAG_COLORS[firstActive]} className={styles.labTag}>Приоритет</Tag>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        <p className={styles.labsNote}>
          <InfoCircleOutlined /> Итоговый список анализов определяет врач с учётом вашей истории и жалоб
        </p>
      </div>

      <Alert type="info" showIcon icon={<InfoCircleOutlined />}
        message="Важно"
        description="Этот тест не ставит диагноз и не заменяет консультацию специалиста. Наличие симптомов — повод обратиться к врачу, а не для самолечения."
        className={styles.disclaimer} />

      <div className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEmoji}>🩺</span>
          <div>
            <p className={styles.ctaTitle}>Чтобы не гадать по симптомам — разберём всё индивидуально</p>
            <p className={styles.ctaText}>Запишитесь на консультацию эндокринолога-диетолога: специалист разберёт ваши анализы и жалобы, и составит понятный план действий.</p>
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
