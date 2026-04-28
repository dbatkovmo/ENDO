import {
  ApiOutlined,
  AppleOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  ClockCircleOutlined,
  FireOutlined,
  HeartOutlined,
  LikeOutlined,
  MedicineBoxOutlined,
  MessageOutlined,
  PhoneOutlined,
  ReadOutlined,
  SafetyCertificateOutlined,
  SearchOutlined,
  StarOutlined,
  TeamOutlined,
  ThunderboltOutlined,
  TrophyOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Button } from 'antd'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'
import './LandingPage.scss'

interface Metric {
  value: string
  label: string
  icon?: ReactNode
}

interface FeatureItem {
  title: string
  description?: string
  icon?: ReactNode
}

interface CaseItem {
  before: string
  after: string
  tone: 'sage' | 'sand' | 'blush'
  art: 'leaf' | 'flower' | 'shoes'
}

const painPoints: FeatureItem[] = [
  {
    title: 'Вес не снижается, несмотря на питание и спорт',
    icon: <UserOutlined />,
  },
  {
    title: 'Постоянная усталость стала нормой',
    icon: <ThunderboltOutlined />,
  },
  {
    title: 'Анализы “в норме”, но самочувствие — нет',
    icon: <SearchOutlined />,
  },
  {
    title: 'Уже были у врачей, но нет результата',
    icon: <TeamOutlined />,
  },
  {
    title: 'Есть гормональные нарушения, но нет системного решения',
    icon: <ApiOutlined />,
  },
]

const approachItems: FeatureItem[] = [
  {
    title: 'Комплексная диагностика',
    description: 'Анализы, УЗИ, образ жизни, психоэмоциональное состояние',
    icon: <SearchOutlined />,
  },
  {
    title: 'Персональная стратегия',
    description: 'Индивидуальный план лечения, питания и образа жизни',
    icon: <AuditOutlined />,
  },
  {
    title: 'Рациональные назначения',
    description: 'Без лишних препаратов и перегрузки',
    icon: <MedicineBoxOutlined />,
  },
  {
    title: 'Сопровождение',
    description: 'Контроль и корректировка до результата',
    icon: <SafetyCertificateOutlined />,
  },
]

const resultMetrics: Metric[] = [
  { value: '3000+', label: 'проведённых консультаций', icon: <TeamOutlined /> },
  { value: '97%', label: 'пациентов отмечают улучшение самочувствия', icon: <HeartOutlined /> },
  { value: '80%', label: 'снижают вес без жёстких диет', icon: <TrophyOutlined /> },
  { value: '200+', label: 'женщин подготовлены к беременности', icon: <UserOutlined /> },
  { value: '70%', label: 'пациентов приходят по рекомендации', icon: <LikeOutlined /> },
]

const heroMetrics: Metric[] = [
  { value: '10+ лет', label: 'работы с пациентами', icon: <StarOutlined /> },
  { value: '3000+', label: 'пациентов', icon: <TeamOutlined /> },
  { value: '97%', label: 'улучшений', icon: <HeartOutlined /> },
]

const resultCases: CaseItem[] = [
  {
    before: 'усталость, лишний вес, инсулинорезистентность',
    after: 'энергия, стабильный вес, нормализация показателей',
    tone: 'sage',
    art: 'leaf',
  },
  {
    before: 'гипотиреоз, выпадение волос',
    after: 'улучшение самочувствия, восстановление состояния',
    tone: 'sand',
    art: 'flower',
  },
  {
    before: 'проблемы с зачатием',
    after: 'успешная подготовка к беременности',
    tone: 'blush',
    art: 'shoes',
  },
]

const educationItems: FeatureItem[] = [
  { title: '10+ лет работы с пациентами', icon: <ClockCircleOutlined /> },
  { title: 'Эндокринология (ординатура), диетология', icon: <ReadOutlined /> },
  { title: 'Трихология, УЗИ, нутрициология, anti-age', icon: <MedicineBoxOutlined /> },
  { title: 'Stanford University, РУДН, ЭНЦ', icon: <TrophyOutlined /> },
  { title: 'Член профессиональных медицинских ассоциаций', icon: <SafetyCertificateOutlined /> },
]

const requestItems: FeatureItem[] = [
  { title: 'Инсулинорезистентность и метаболический синдром', icon: <FireOutlined /> },
  { title: 'Сахарный диабет 1 и 2 типа', icon: <MedicineBoxOutlined /> },
  { title: 'АИТ, гипотиреоз, заболевания щитовидной железы', icon: <ApiOutlined /> },
  { title: 'Гормональные нарушения (включая беременность и пременопаузу)', icon: <HeartOutlined /> },
  { title: 'Снижение веса и коррекция питания', icon: <AppleOutlined /> },
  { title: 'Выпадение волос, акне, снижение либидо', icon: <ThunderboltOutlined /> },
  { title: 'Эндокринное бесплодие', icon: <SafetyCertificateOutlined /> },
]

const workFormats: FeatureItem[] = [
  {
    title: 'Индивидуальная консультация',
    description: 'Глубокий разбор и персональный план',
    icon: <UserOutlined />,
  },
  {
    title: 'Персональное сопровождение',
    description: 'Работа до результата с обратной связью',
    icon: <MessageOutlined />,
  },
  {
    title: 'Подготовка к беременности',
    description: 'Комплексная работа с гормональным фоном',
    icon: <HeartOutlined />,
  },
  {
    title: 'Индивидуальный план питания',
    description: 'Без диет и крайностей',
    icon: <AppleOutlined />,
  },
]

const processSteps = [
  'Вы оставляете заявку',
  'Я анализирую данные и при необходимости назначаю обследования',
  'Проводим онлайн-консультацию',
  'Вы получаете персональный план',
  'При необходимости — сопровождение',
]

const onlineBenefits = [
  'До 90% эндокринологических задач решаются онлайн',
  'Вы получаете полноценную консультацию, план и сопровождение',
  'Без очередей и поездок',
  'При необходимости возможен очный приём',
]

const fitItems = [
  'Вы хотите понять, что происходит с организмом',
  'Вам важен долгосрочный результат',
  'Вы готовы к системной работе',
  'Вы цените профессиональный подход',
]

const notFitItems = [
  'Если вы ищете быстрые решения — этот формат может не подойти',
]

const faqItems = [
  {
    question: 'Я в другом городе — это проблема?',
    answer: 'Нет, большинство эндокринологических вопросов эффективно решаются онлайн. При необходимости я подскажу, какие обследования можно пройти локально.',
  },
  {
    question: 'Нужны ли анализы заранее?',
    answer: 'Желательно, но не обязательно. Если чего-то не хватает, я помогу понять, что действительно нужно, а что можно не сдавать заранее.',
  },
  {
    question: 'Вы работаете с гормональной терапией?',
    answer: 'Да, в том числе с уже назначенным лечением. Важно не только наличие препаратов, но и вся система сопровождения вокруг них.',
  },
  {
    question: 'Сколько длится консультация?',
    answer: 'В среднем 60–90 минут, в зависимости от сложности ситуации и объёма исходных данных.',
  },
]

function LeafDecoration({ className }: { className?: string }) {
  return (
    <span className={`landing__leaf-decoration ${className ?? ''}`} aria-hidden="true">
      <span className="landing__leaf-stem" />
      <span className="landing__leaf landing__leaf--one" />
      <span className="landing__leaf landing__leaf--two" />
      <span className="landing__leaf landing__leaf--three" />
    </span>
  )
}

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  centered?: boolean
}) {
  return (
    <div className={`landing__section-heading ${centered ? 'landing__section-heading--centered' : ''}`}>
      {eyebrow && <p className="landing__eyebrow">{eyebrow}</p>}
      <h2 className="landing__section-title">{title}</h2>
      {description && <p className="landing__section-description">{description}</p>}
    </div>
  )
}

export function LandingPage() {
  return (
    <div className="landing__page">
      <div className="landing__backdrop-glow" />

      <header className="landing__topbar">
        <Link to="/" className="landing__brand">
          <LeafDecoration className="landing__brand-leaf" />
          <span className="landing__brand-copy">
            <span className="landing__brand-title">ENDO BALANCE</span>
            <span className="landing__brand-subtitle">системный подход к здоровью</span>
          </span>
        </Link>

        <nav className="landing__nav">
          <a href="#about">Обо мне</a>
          <a href="#formats">Услуги</a>
          <a href="#process">Как проходит работа</a>
          <a href="#results">Отзывы</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Контакты</a>
        </nav>

        <div className="landing__online-badge">
          <span className="landing__online-dot" />
          Онлайн
        </div>
      </header>

      <main className="landing__main">
        <section className="landing__section landing__hero-section">
          <div className="landing__hero-content">
            <h1 className="landing__hero-title">
              Системное восстановление
              <br />
              гормонального баланса
              <br />
              и метаболизма
            </h1>
            <p className="landing__hero-text">
              Персональная работа с врачом-эндокринологом.
              <br />
              Без перегрузки препаратами.
              <br />
              С фокусом на причину
            </p>

            <div className="landing__hero-actions">
              <a href="#contact" className="landing__primary-link">
                <Button type="primary" size="large" className="landing__primary-button">
                  Записаться на консультацию <ArrowRightOutlined />
                </Button>
              </a>
            </div>

            <div className="landing__hero-stats">
              {heroMetrics.map((item) => (
                <div key={item.label} className="landing__hero-stat">
                  <span className="landing__hero-stat-icon">{item.icon}</span>
                  <span className="landing__hero-stat-value">{item.value}</span>
                  <span className="landing__hero-stat-label">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="landing__hero-visual">
            <div className="landing__hero-halo" />
            <div className="landing__hero-halo-ring" />
            <div className="landing__portrait-card">
              <div className="landing__portrait-glow" />
              <div className="landing__portrait-head" />
              <div className="landing__portrait-hair" />
              <div className="landing__portrait-neck" />
              <div className="landing__portrait-inner-top" />
              <div className="landing__portrait-blazer-left" />
              <div className="landing__portrait-blazer-right" />
              <div className="landing__portrait-arms" />
              <div className="landing__portrait-hands" />
            </div>

            <div className="landing__quote-card">
              <span className="landing__quote-mark">❝</span>
              <p>
                Моя цель — не просто убрать симптомы,
                <br />
                а восстановить баланс
                <br />
                и качество жизни
              </p>
              <span>Маскаева В.О.</span>
            </div>

            <LeafDecoration className="landing__hero-leaf" />
            <div className="landing__hero-plant-pot" aria-hidden="true" />
          </div>
        </section>

        <section className="landing__section landing__card-section">
          <SectionHeading
            eyebrow="Вы здесь, потому что"
            title="Сигналы, которые обычно уже нельзя игнорировать"
            description="Это не норма. И это можно исправить."
            centered
          />

          <div className="landing__pains-grid">
            {painPoints.map((item) => (
              <article key={item.title} className="landing__soft-card">
                <span className="landing__card-icon">{item.icon}</span>
                <p>{item.title}</p>
              </article>
            ))}
          </div>

          <div className="landing__inline-statement">
            <LeafDecoration className="landing__inline-leaf" />
            <p>Это не норма. И это можно исправить</p>
          </div>
        </section>

        <section className="landing__section landing__two-column-section">
          <article className="landing__panel">
            <SectionHeading
              eyebrow="Почему не получается"
              title="Большинство подходов работают с симптомами, а не с причиной"
            />
            <ul className="landing__check-list">
              <li>Организм — это система: гормоны, обмен веществ, питание, стресс и дефициты.</li>
              <li>Если не учитывать всё сразу — результат временный или отсутствует.</li>
              <li>Попытки “лечить по одному анализу” редко дают системный эффект.</li>
            </ul>
            <div className="landing__callout">
              Я работаю иначе: нахожу причину и выстраиваю систему восстановления.
            </div>
          </article>

          <article className="landing__panel landing__panel--approach">
            <SectionHeading eyebrow="Мой подход" title="Системная работа вместо случайных решений" />
            <div className="landing__feature-list">
              {approachItems.map((item) => (
                <div key={item.title} className="landing__feature-item">
                  <span className="landing__feature-bullet">{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <LeafDecoration className="landing__panel-leaf" />
          </article>
        </section>

        <section id="results" className="landing__section">
          <SectionHeading eyebrow="Результаты" title="Измеримый эффект системной работы" centered />
          <div className="landing__metrics-grid">
            {resultMetrics.map((item) => (
              <article key={item.label} className="landing__metric-card">
                <span className="landing__metric-icon">{item.icon}</span>
                <div className="landing__metric-value">{item.value}</div>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing__section">
          <SectionHeading eyebrow="Примеры результатов" title="Как меняется самочувствие и качество жизни" centered />
          <div className="landing__cases-grid">
            {resultCases.map((item) => (
              <article key={item.before} className={`landing__case-card landing__case-card--${item.tone}`}>
                <div className="landing__case-copy">
                  <p className="landing__case-label">Было:</p>
                  <p className="landing__case-text">{item.before}</p>
                  <p className="landing__case-label">Стало:</p>
                  <p className="landing__case-text">{item.after}</p>
                </div>
                <div className={`landing__case-art landing__case-art-${item.art}`} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="landing__section landing__two-column-section">
          <article className="landing__panel">
            <SectionHeading eyebrow="Обо мне" title="Маскаева Валентина Олеговна" />
            <p className="landing__about-lead">Врач-эндокринолог, диетолог, нутрициолог</p>
            <ul className="landing__info-list">
              {educationItems.map((item) => (
                <li key={item.title}>
                  <span className="landing__info-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="landing__doctor-mini-card">
              <div className="landing__doctor-mini-portrait" />
              <div>
                <p className="landing__doctor-mini-title">Подход без крайностей</p>
                <p className="landing__doctor-mini-text">
                  Понятные объяснения, аккуратная диагностика и план, который можно внедрить в реальную жизнь.
                </p>
              </div>
            </div>
          </article>

          <article className="landing__panel landing__panel--requests">
            <SectionHeading eyebrow="С какими запросами я работаю" title="Сложные эндокринные задачи, которые требуют системы" />
            <ul className="landing__request-list">
              {requestItems.map((item) => (
                <li key={item.title}>
                  <span className="landing__request-icon">{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className="landing__watermark">Системный подход к здоровью</div>
          </article>
        </section>

        <section id="formats" className="landing__section">
          <SectionHeading eyebrow="Форматы работы" title="Выбираем глубину работы под вашу задачу" centered />
          <div className="landing__format-grid">
            {workFormats.map((item) => (
              <article key={item.title} className="landing__format-card">
                <span className="landing__format-icon">{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className="landing__section">
          <SectionHeading eyebrow="Как проходит работа" title="Понятный маршрут без хаоса и догадок" centered />
          <div className="landing__process-grid">
            {processSteps.map((item, index) => (
              <article key={item} className="landing__process-card">
                <span className="landing__process-step">{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="landing__section landing__two-column-section">
          <article className="landing__panel">
            <SectionHeading eyebrow="Онлайн — это эффективно" title="Большинство задач реально решить без поездок" />
            <ul className="landing__check-list">
              {onlineBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="landing__laptop-mock">
              <div className="landing__laptop-screen" />
              <div className="landing__laptop-base" />
            </div>
          </article>

          <article className="landing__panel">
            <SectionHeading eyebrow="Для кого это" title="Формат, который подходит не всем — и это нормально" />
            <div className="landing__fit-columns">
              <div className="landing__fit-card">
                <h3>Подойдёт вам, если:</h3>
                <ul className="landing__check-list-compact">
                  {fitItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="landing__fit-card">
                <h3>Может не подойти, если:</h3>
                <ul className="landing__check-list-compact">
                  {notFitItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="landing__section landing__cta-section">
          <div className="landing__cta-card">
            <p className="landing__cta-eyebrow">Индивидуальная консультация с врачом</p>
            <h2 className="landing__cta-simple-title">Системный разбор жалоб, анализов и тактики лечения</h2>
            <div className="landing__cta-actions">
              <Button type="primary" size="large" className="landing__primary-button">
                Записаться на консультацию <ArrowRightOutlined />
              </Button>
              <p className="landing__cta-hint">Ответ в течение 24 часов</p>
            </div>
          </div>
        </section>

        <section id="faq" className="landing__section landing__faq-section">
          <div className="landing__faq-card">
            <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
            <div className="landing__faq-list">
              {faqItems.map((item) => (
                <details key={item.question} className="landing__faq-item">
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="landing__final-card">
            <LeafDecoration className="landing__final-leaf" />
            <h2>Если вы хотите системно разобраться со здоровьем и получить понятный план действий</h2>
            <div className="landing__final-actions">
              <Button type="primary" size="large" className="landing__primary-button">
                Записаться на консультацию <ArrowRightOutlined />
              </Button>
              <div className="landing__contact-chips">
                <span className="landing__contact-chip"><MessageOutlined /> WhatsApp</span>
                <span className="landing__contact-chip"><MessageOutlined /> Telegram</span>
                <span className="landing__contact-chip"><PhoneOutlined /> Позвонить</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
