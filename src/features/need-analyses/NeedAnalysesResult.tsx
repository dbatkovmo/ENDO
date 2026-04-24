import { Alert, Button, Divider, Tag } from 'antd'
import { InfoCircleOutlined, ReloadOutlined } from '@ant-design/icons'
import { LAB_GROUPS } from './need-analyses.data'
import type { NeedAnalysesResult as NeedAnalysesResultType } from './need-analyses.types'
import styles from './NeedAnalysesResult.module.scss'

interface Props {
  result: NeedAnalysesResultType
  onRetake: () => void
}

export function NeedAnalysesResult({ result, onRetake }: Props) {
  return (
    <div className={styles.root}>
      <div className={styles.topNote} style={{ borderColor: '#91caff' }}>
        <p className={styles.topTitle}>Какие группы анализов могут быть полезны</p>
        <p className={styles.topText}>
          Это не список обязательных назначений. Ниже — ориентир, что можно обсудить с врачом с учетом ваших жалоб.
        </p>
      </div>

      <div className={styles.groups}>
        {result.groups.map((groupKey) => {
          const group = LAB_GROUPS[groupKey]

          return (
            <section
              key={groupKey}
              className={styles.groupCard}
              style={{ borderColor: group.color, background: `${group.color}10` }}
            >
              <div className={styles.groupTop}>
                <span className={styles.groupEmoji}>{group.emoji}</span>
                <div className={styles.groupMeta}>
                  <Tag color={group.tagColor} className={styles.groupBadge}>Можно обсудить с врачом</Tag>
                  <h3 className={styles.groupTitle} style={{ color: group.color }}>{group.title}</h3>
                </div>
              </div>
              <p className={styles.groupWhy}>{group.why}</p>
              <div className={styles.labsList}>
                {group.labs.map((lab) => (
                  <div key={`${groupKey}-${lab.name}`} className={styles.labItem}>
                    <span className={styles.labName}>{lab.name}</span>
                    {lab.note && <Tag className={styles.labNote}>{lab.note}</Tag>}
                  </div>
                ))}
              </div>
            </section>
          )
        })}
      </div>

      <section className={styles.reasonsCard}>
        <h3 className={styles.sectionTitle}>Почему именно они</h3>
        <ul className={styles.list}>
          {result.reasons.map((reason) => <li key={reason}>{reason}</li>)}
        </ul>
      </section>

      <section className={styles.avoidCard}>
        <h3 className={styles.sectionTitle}>Что не стоит сдавать без назначения</h3>
        <ul className={styles.list}>
          {result.avoidWithoutDoctor.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <Alert
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
        message="Важно"
        description="Интерпретация анализов важнее самих цифр. Одни и те же показатели могут значить разное в зависимости от жалоб, анамнеза, препаратов и дня цикла."
        className={styles.warning}
      />

      <section className={styles.cta}>
        <p className={styles.ctaTitle}>Чтобы не сдавать лишнее и не тратить деньги зря, лучше подобрать анализы под ваши жалобы и анамнез.</p>
        <p className={styles.ctaText}>Так список получится короче, полезнее и понятнее для дальнейшей интерпретации.</p>
      </section>

      <Divider />
      <Button icon={<ReloadOutlined />} onClick={onRetake} block size="large" className={styles.retakeBtn}>
        Пройти тест заново
      </Button>
    </div>
  )
}
