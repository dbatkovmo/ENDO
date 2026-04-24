import { Alert, Button, Divider, Tag } from 'antd'
import { Link } from 'react-router-dom'
import { InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { CAUSE_CONFIGS } from './sweet-craving.data'
import type { SweetCategory, SweetQuizResult } from './sweet-craving.types'
import styles from './SweetCravingResult.module.scss'

interface Props {
  result: SweetQuizResult
  onRetake: () => void
}

const TAG_COLORS: Record<SweetCategory, string> = {
  bloodSugar: 'blue',
  stress: 'purple',
  sleep: 'cyan',
  insulinResistance: 'volcano',
}

export function SweetCravingResult({ result, onRetake }: Props) {
  const { primary, secondary } = result
  const primaryCfg = CAUSE_CONFIGS[primary]
  const secondaryCfg = secondary ? CAUSE_CONFIGS[secondary] : null

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Возможные причины</p>
        <h2 className={styles.title}>Тяга к сладкому: ориентировочный разбор</h2>
        <p className={styles.sub}>
          Это не диагноз. Результат носит ознакомительный характер; при симптомах рекомендуется консультация
          врача.
        </p>
      </div>

      <Alert
        type="warning"
        showIcon
        icon={<InfoCircleOutlined />}
        message="Важно"
        description="Ниже указаны возможные причины, а не заключение специалиста. Для уточнения состояния здоровья обратитесь к врачу-эндокринологу или нутрициологу."
        className={styles.topAlert}
      />

      <div
        className={styles.primaryCard}
        style={{
          borderColor: primaryCfg.color,
          background: `${primaryCfg.color}0d`,
        }}
      >
        <div className={styles.primaryTop}>
          <span className={styles.primaryEmoji}>{primaryCfg.emoji}</span>
          <div className={styles.primaryMeta}>
            <Tag color={TAG_COLORS[primary]} className={styles.badge}>
              Главная возможная причина
            </Tag>
            <h3 className={styles.primaryTitle} style={{ color: primaryCfg.color }}>
              {primaryCfg.title}
            </h3>
          </div>
        </div>
        <p className={styles.summary}>{primaryCfg.summary}</p>
      </div>

      {secondaryCfg && secondary && (
        <div className={styles.secondaryCard} style={{ borderColor: secondaryCfg.color }}>
          <div className={styles.secondaryTop}>
            <span className={styles.secondaryEmoji}>{secondaryCfg.emoji}</span>
            <div>
              <Tag color={TAG_COLORS[secondary]} className={styles.badgeSm}>
                Вторичная возможная причина
              </Tag>
              <h4 className={styles.secondaryTitle}>{secondaryCfg.title}</h4>
            </div>
          </div>
          <p className={styles.secondaryDesc}>{secondaryCfg.summary}</p>
        </div>
      )}

      <div className={styles.cta}>
        <p className={styles.ctaTitle}>Хотите понять, почему именно вас тянет на сладкое?</p>
        <p className={styles.ctaText}>
          Запишитесь на консультацию врача-эндокринолога и нутрициолога — специалист подберёт обследование и
          план питания под вашу ситуацию.
        </p>
        <Link to="/taplink" className={styles.ctaLinkWrap}>
          <Button type="primary" size="large" block className={styles.ctaBtn}>
            Перейти к записи
          </Button>
        </Link>
      </div>

      <Divider />
      <Button icon={<ReloadOutlined />} onClick={onRetake} block size="large" className={styles.retakeBtn}>
        Пройти тест заново
      </Button>
    </div>
  )
}
