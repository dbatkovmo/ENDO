import { useNavigate } from 'react-router-dom'
import './AppsListPage.scss'

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
    <div className="apps-list">
      <div className="apps-list__hero">
        <div className="apps-list__hero-glow" />
        <h1 className="apps-list__title">Мини-приложения</h1>
        <p className="apps-list__subtitle">
          Полезные инструменты для контроля здоровья и достижения целей
        </p>
      </div>

      <div className="apps-list__grid">
        {apps.map((app) => (
          <button
            key={app.key}
            type="button"
            className={`apps-list__card apps-list__card--${app.tone}`}
            onClick={() => navigate(app.path)}
          >
            <div className="apps-list__visual">
              <div className="apps-list__medallion">
                <span className="apps-list__emoji">{app.emoji}</span>
              </div>
            </div>

            <div className="apps-list__card-body">
              <h2 className="apps-list__card-title">{app.title}</h2>
              <span className="apps-list__divider" />
              <p className="apps-list__card-description">{app.description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
