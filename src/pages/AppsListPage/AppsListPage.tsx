import { useNavigate } from 'react-router-dom'
import styles from './AppsListPage.module.scss'

const apps = [
  {
    key: 'kbju',
    title: 'Калькулятор КБЖУ',
    description: 'Суточная норма калорий, белков, жиров и углеводов',
    path: '/apps/kbju',
    emoji: '🥗',
    tone: 'sage',
  },
  {
    key: 'energy',
    title: 'Квиз «Энергия»',
    description: 'Оценка уровня энергии и подсказки по образу жизни',
    path: '/apps/energy',
    emoji: '⚡',
    tone: 'amber',
  },
  {
    key: 'weight-stall',
    title: 'Почему я не худею?',
    description: 'Короткий тест: главная и вторичная причины, почему вес стоит',
    path: '/apps/weight-stall',
    emoji: '⚖️',
    tone: 'stone',
  },
  {
    key: 'ration-day',
    title: 'Разбор рациона за 1 день',
    description: 'Базовый анализ рациона по признакам: белок, овощи, сладкое и напитки',
    path: '/apps/ration-day',
    emoji: '🍽️',
    tone: 'sage',
  },
  {
    key: 'fat-burn-forecast',
    title: 'Сколько жира вы реально можете сжечь?',
    description: 'Реалистичный прогноз снижения жира за 30 и 90 дней',
    path: '/apps/fat-burn-forecast',
    emoji: '🔥',
    tone: 'amber',
  },
  {
    key: 'need-analyses',
    title: 'Нужны ли вам анализы?',
    description: 'Ориентир: какие анализы можно обсудить с врачом по вашим жалобам',
    path: '/apps/need-analyses',
    emoji: '🧪',
    tone: 'ocean',
  },
  {
    key: 'hormone',
    title: 'Гормональный чек',
    description: 'Ориентировочная оценка симптомов для разговора со специалистом',
    path: '/apps/hormone',
    emoji: '🧬',
    tone: 'rose',
  },
  {
    key: 'sweet-craving',
    title: 'Почему хочется сладкого?',
    description: 'Короткий тест: возможные причины тяги к сладкому (не диагноз)',
    path: '/apps/sweet-craving',
    emoji: '🍬',
    tone: 'rose',
  },
]

export function AppsListPage() {
  const navigate = useNavigate()

  return (
    <div className={styles.page}>
      <div className={styles.hero}>
        <div className={styles.heroGlow} />
        <h1 className={styles.title}>Мини-приложения</h1>
        <p className={styles.subtitle}>
          Полезные инструменты для контроля здоровья и достижения целей
        </p>
      </div>

      <div className={styles.grid}>
        {apps.map((app) => (
          <button
            key={app.key}
            type="button"
            className={`${styles.card} ${styles[app.tone]}`}
            onClick={() => navigate(app.path)}
          >
            <div className={styles.visual}>
              <div className={styles.medallion}>
                <span className={styles.emoji}>{app.emoji}</span>
              </div>
              <div className={styles.branch} aria-hidden="true">
                <span className={styles.stem} />
                <span className={`${styles.leaf} ${styles.leafTop}`} />
                <span className={`${styles.leaf} ${styles.leafMiddle}`} />
                <span className={`${styles.leaf} ${styles.leafBottom}`} />
              </div>
            </div>

            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{app.title}</h2>
              <span className={styles.divider} />
              <p className={styles.cardDescription}>{app.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
