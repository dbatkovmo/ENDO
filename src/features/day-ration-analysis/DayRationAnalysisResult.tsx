import { Alert, Button, Divider, Tag } from 'antd'
import { InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { ISSUE_CONFIGS } from './day-ration-analysis.data'
import type { DayRationAnalysisResultData } from './day-ration-analysis.types'
import styles from './DayRationAnalysisResult.module.scss'

interface Props {
  result: DayRationAnalysisResultData
  onReset: () => void
}

export function DayRationAnalysisResult({ result, onReset }: Props) {
  const mainIssue = ISSUE_CONFIGS[result.mainIssue]

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Разбор дня</p>
        <h2 className={styles.title}>Что видно по вашему рациону</h2>
        <p className={styles.sub}>Это качественный разбор по признакам, а не точный подсчет калорий.</p>
      </div>

      <div className={styles.grid}>
        <section className={styles.panel}>
          <h3 className={styles.panelTitle}>Что хорошо в рационе</h3>
          <ul className={styles.list}>
            {result.positives.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className={styles.panel}>
          <h3 className={styles.panelTitle}>Что мешает цели</h3>
          <ul className={styles.list}>
            {result.blockers.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>
      </div>

      <section
        className={styles.mainIssue}
        style={{ borderColor: mainIssue.color, background: `${mainIssue.color}10` }}
      >
        <div className={styles.issueTop}>
          <span className={styles.issueEmoji}>{mainIssue.emoji}</span>
          <div className={styles.issueMeta}>
            <Tag color={mainIssue.tagColor} className={styles.badge}>Главная ошибка дня</Tag>
            <h3 className={styles.issueTitle} style={{ color: mainIssue.color }}>{mainIssue.title}</h3>
          </div>
        </div>
        <p className={styles.issueDescription}>{mainIssue.description}</p>
      </section>

      <section className={styles.recommendations}>
        <h3 className={styles.sectionTitle}>3 рекомендации</h3>
        <ul className={styles.list}>
          {result.recommendations.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      {result.notes.length > 0 && (
        <div className={styles.notes}>
          {result.notes.map((note) => (
            <Alert
              key={note}
              type="warning"
              showIcon
              icon={<InfoCircleOutlined />}
              message={note}
              className={styles.note}
            />
          ))}
        </div>
      )}

      <section className={styles.cta}>
        <p className={styles.ctaTitle}>Хотите получить персональный рацион под ваши анализы, вес, гормоны и цель?</p>
        <p className={styles.ctaText}>Запишитесь на консультацию.</p>
      </section>

      <Divider />
      <Button icon={<ReloadOutlined />} onClick={onReset} block size="large" className={styles.retakeBtn}>
        Разобрать другой день
      </Button>
    </div>
  )
}
