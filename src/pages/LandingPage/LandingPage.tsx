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
import styles from './LandingPage.module.scss'

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
  { value: '10+ лет', label: 'практики', icon: <StarOutlined /> },
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
  { title: '10+ лет практики', icon: <ClockCircleOutlined /> },
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
    <span className={`${styles.leafDecoration} ${className ?? ''}`} aria-hidden="true">
      <span className={styles.leafStem} />
      <span className={`${styles.leaf} ${styles.leafOne}`} />
      <span className={`${styles.leaf} ${styles.leafTwo}`} />
      <span className={`${styles.leaf} ${styles.leafThree}`} />
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
    <div className={`${styles.sectionHeading} ${centered ? styles.sectionHeadingCentered : ''}`}>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <h2 className={styles.sectionTitle}>{title}</h2>
      {description && <p className={styles.sectionDescription}>{description}</p>}
    </div>
  )
}

export function LandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.backdropGlow} />

      <header className={styles.topbar}>
        <Link to="/" className={styles.brand}>
          <LeafDecoration className={styles.brandLeaf} />
          <span className={styles.brandCopy}>
            <span className={styles.brandTitle}>ENDO BALANCE</span>
            <span className={styles.brandSubtitle}>системный подход к здоровью</span>
          </span>
        </Link>

        <nav className={styles.nav}>
          <a href="#about">Обо мне</a>
          <a href="#formats">Услуги</a>
          <a href="#process">Как проходит работа</a>
          <a href="#results">Отзывы</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Контакты</a>
        </nav>

        <div className={styles.onlineBadge}>
          <span className={styles.onlineDot} />
          Онлайн
        </div>
      </header>

      <main className={styles.main}>
        <section className={`${styles.section} ${styles.heroSection}`}>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>
              Системное восстановление
              <br />
              гормонального баланса
              <br />
              и метаболизма
            </h1>
            <p className={styles.heroText}>
              Персональная работа с врачом-эндокринологом.
              <br />
              Без перегрузки препаратами.
              <br />
              С фокусом на причину
            </p>

            <div className={styles.heroActions}>
              <a href="#contact" className={styles.primaryLink}>
                <Button type="primary" size="large" className={styles.primaryButton}>
                  Записаться на консультацию <ArrowRightOutlined />
                </Button>
              </a>
              <a href="#contact" className={styles.secondaryLink}>
                <Button size="large" className={styles.secondaryButton}>
                  <MessageOutlined /> Написать в WhatsApp
                </Button>
              </a>
            </div>

            <div className={styles.heroStats}>
              {heroMetrics.map((item) => (
                <div key={item.label} className={styles.heroStat}>
                  <span className={styles.heroStatIcon}>{item.icon}</span>
                  <span className={styles.heroStatValue}>{item.value}</span>
                  <span className={styles.heroStatLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroHalo} />
            <div className={styles.heroHaloRing} />
            <div className={styles.portraitCard}>
              <div className={styles.portraitGlow} />
              <div className={styles.portraitHead} />
              <div className={styles.portraitHair} />
              <div className={styles.portraitNeck} />
              <div className={styles.portraitInnerTop} />
              <div className={styles.portraitBlazerLeft} />
              <div className={styles.portraitBlazerRight} />
              <div className={styles.portraitArms} />
              <div className={styles.portraitHands} />
            </div>

            <div className={styles.quoteCard}>
              <span className={styles.quoteMark}>❝</span>
              <p>
                Моя цель — не просто убрать симптомы,
                <br />
                а восстановить баланс
                <br />
                и качество жизни
              </p>
              <span>Маскаева В.О.</span>
            </div>

            <LeafDecoration className={styles.heroLeaf} />
            <div className={styles.heroPlantPot} aria-hidden="true" />
          </div>
        </section>

        <section className={`${styles.section} ${styles.cardSection}`}>
          <SectionHeading
            eyebrow="Вы здесь, потому что"
            title="Сигналы, которые обычно уже нельзя игнорировать"
            description="Это не норма. И это можно исправить."
            centered
          />

          <div className={styles.painsGrid}>
            {painPoints.map((item) => (
              <article key={item.title} className={styles.softCard}>
                <span className={styles.cardIcon}>{item.icon}</span>
                <p>{item.title}</p>
              </article>
            ))}
          </div>

          <div className={styles.inlineStatement}>
            <LeafDecoration className={styles.inlineLeaf} />
            <p>Это не норма. И это можно исправить</p>
          </div>
        </section>

        <section className={`${styles.section} ${styles.twoColumnSection}`}>
          <article className={styles.panel}>
            <SectionHeading
              eyebrow="Почему не получается"
              title="Большинство подходов работают с симптомами, а не с причиной"
            />
            <ul className={styles.checkList}>
              <li>Организм — это система: гормоны, обмен веществ, питание, стресс и дефициты.</li>
              <li>Если не учитывать всё сразу — результат временный или отсутствует.</li>
              <li>Попытки “лечить по одному анализу” редко дают системный эффект.</li>
            </ul>
            <div className={styles.callout}>
              Я работаю иначе: нахожу причину и выстраиваю систему восстановления.
            </div>
          </article>

          <article className={`${styles.panel} ${styles.approachPanel}`}>
            <SectionHeading eyebrow="Мой подход" title="Системная работа вместо случайных решений" />
            <div className={styles.featureList}>
              {approachItems.map((item) => (
                <div key={item.title} className={styles.featureItem}>
                  <span className={styles.featureBullet}>{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <LeafDecoration className={styles.panelLeaf} />
          </article>
        </section>

        <section id="results" className={styles.section}>
          <SectionHeading eyebrow="Результаты" title="Измеримый эффект системной работы" centered />
          <div className={styles.metricsGrid}>
            {resultMetrics.map((item) => (
              <article key={item.label} className={styles.metricCard}>
                <span className={styles.metricIcon}>{item.icon}</span>
                <div className={styles.metricValue}>{item.value}</div>
                <p>{item.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.section}>
          <SectionHeading eyebrow="Примеры результатов" title="Как меняется самочувствие и качество жизни" centered />
          <div className={styles.casesGrid}>
            {resultCases.map((item) => (
              <article key={item.before} className={`${styles.caseCard} ${styles[item.tone]}`}>
                <div className={styles.caseCopy}>
                  <p className={styles.caseLabel}>Было:</p>
                  <p className={styles.caseText}>{item.before}</p>
                  <p className={styles.caseLabel}>Стало:</p>
                  <p className={styles.caseText}>{item.after}</p>
                </div>
                <div className={`${styles.caseArt} ${styles[`caseArt${item.art[0].toUpperCase()}${item.art.slice(1)}`]}`} aria-hidden="true" />
              </article>
            ))}
          </div>
        </section>

        <section id="about" className={`${styles.section} ${styles.twoColumnSection}`}>
          <article className={styles.panel}>
            <SectionHeading eyebrow="Обо мне" title="Маскаева Валентина Олеговна" />
            <p className={styles.aboutLead}>Врач-эндокринолог, диетолог, нутрициолог</p>
            <ul className={styles.infoList}>
              {educationItems.map((item) => (
                <li key={item.title}>
                  <span className={styles.infoIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className={styles.doctorMiniCard}>
              <div className={styles.doctorMiniPortrait} />
              <div>
                <p className={styles.doctorMiniTitle}>Подход без крайностей</p>
                <p className={styles.doctorMiniText}>
                  Понятные объяснения, аккуратная диагностика и план, который можно внедрить в реальную жизнь.
                </p>
              </div>
            </div>
          </article>

          <article className={`${styles.panel} ${styles.requestsPanel}`}>
            <SectionHeading eyebrow="С какими запросами я работаю" title="Сложные эндокринные задачи, которые требуют системы" />
            <ul className={styles.requestList}>
              {requestItems.map((item) => (
                <li key={item.title}>
                  <span className={styles.requestIcon}>{item.icon}</span>
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
            <div className={styles.watermark}>Системный подход к здоровью</div>
          </article>
        </section>

        <section id="formats" className={styles.section}>
          <SectionHeading eyebrow="Форматы работы" title="Выбираем глубину работы под вашу задачу" centered />
          <div className={styles.formatGrid}>
            {workFormats.map((item) => (
              <article key={item.title} className={styles.formatCard}>
                <span className={styles.formatIcon}>{item.icon}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="process" className={styles.section}>
          <SectionHeading eyebrow="Как проходит работа" title="Понятный маршрут без хаоса и догадок" centered />
          <div className={styles.processGrid}>
            {processSteps.map((item, index) => (
              <article key={item} className={styles.processCard}>
                <span className={styles.processStep}>{index + 1}</span>
                <p>{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={`${styles.section} ${styles.twoColumnSection}`}>
          <article className={styles.panel}>
            <SectionHeading eyebrow="Онлайн — это эффективно" title="Большинство задач реально решить без поездок" />
            <ul className={styles.checkList}>
              {onlineBenefits.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.laptopMock}>
              <div className={styles.laptopScreen} />
              <div className={styles.laptopBase} />
            </div>
          </article>

          <article className={styles.panel}>
            <SectionHeading eyebrow="Для кого это" title="Формат, который подходит не всем — и это нормально" />
            <div className={styles.fitColumns}>
              <div className={styles.fitCard}>
                <h3>Подойдёт вам, если:</h3>
                <ul className={styles.checkListCompact}>
                  {fitItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.fitCard}>
                <h3>Может не подойти, если:</h3>
                <ul className={styles.checkListCompact}>
                  {notFitItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className={`${styles.section} ${styles.ctaSection}`}>
          <div className={styles.ctaCard}>
            <p className={styles.ctaEyebrow}>Индивидуальная консультация с врачом</p>
            <h2 className={styles.ctaSimpleTitle}>Системный разбор жалоб, анализов и тактики лечения</h2>
            <div className={styles.ctaActions}>
              <Button type="primary" size="large" className={styles.primaryButton}>
                Записаться на консультацию <ArrowRightOutlined />
              </Button>
              <p className={styles.ctaHint}>Ответ в течение 24 часов</p>
            </div>
          </div>
        </section>

        <section id="faq" className={`${styles.section} ${styles.faqSection}`}>
          <div className={styles.faqCard}>
            <SectionHeading eyebrow="FAQ" title="Частые вопросы" />
            <div className={styles.faqList}>
              {faqItems.map((item) => (
                <details key={item.question} className={styles.faqItem}>
                  <summary>{item.question}</summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className={styles.finalCard}>
            <LeafDecoration className={styles.finalLeaf} />
            <h2>Если вы хотите системно разобраться со здоровьем и получить понятный план действий</h2>
            <div className={styles.finalActions}>
              <Button type="primary" size="large" className={styles.primaryButton}>
                Записаться на консультацию <ArrowRightOutlined />
              </Button>
              <div className={styles.contactChips}>
                <span className={styles.contactChip}><MessageOutlined /> WhatsApp</span>
                <span className={styles.contactChip}><MessageOutlined /> Telegram</span>
                <span className={styles.contactChip}><PhoneOutlined /> Позвонить</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
