import { Collapse } from 'antd'
import type { CollapseProps } from 'antd'
import type { LucideIcon } from 'lucide-react'
import {
  Activity,
  ArrowRight,
  BadgeCheck,
  Baby,
  BatteryLow,
  Calendar,
  ChevronRight,
  ClipboardCheck,
  Flower2,
  Heart,
  HeartPulse,
  MessagesSquare,
  MessageCircle,
  Minus,
  Plus,
  ShieldCheck,
  Sparkles,
  Scale,
  Send,
  Stethoscope,
  Users,
} from 'lucide-react'
import doctorImage from '@/assets/doctor-cutout.png'
import plantImage from '@/assets/plant-vase.png'
import plantDecorImage from '@/assets/plant.png'
import signatureImage from '@/assets/signature.png'
import './TaplinkPage.scss'

type IconText = {
  icon: LucideIcon
  title: string
  text?: string
}

const helpItems: IconText[] = [
  { icon: Activity, title: 'Гормональных нарушениях' },
  { icon: Scale, title: 'Избыточном весе и инсулинорезистентности' },
  { icon: BatteryLow, title: 'Хронической усталости и дефицитах' },
  { icon: Sparkles, title: 'Проблемах с кожей, волосами, сном' },
  { icon: Baby, title: 'Подготовке к беременности и после родов' },
]

const gains: IconText[] = [
  { icon: ClipboardCheck, title: 'Индивидуальный подход', text: 'Именно для вас и здоровья' },
  { icon: ShieldCheck, title: 'Безопасные и эффективные', text: 'методы' },
  { icon: HeartPulse, title: 'Поддержка и мотивация', text: 'на пути к здоровью' },
  { icon: BadgeCheck, title: 'Реальные результаты', text: 'без жестких ограничений' },
]

const services: IconText[] = [
  { icon: Stethoscope, title: 'Онлайн-консультация', text: 'Разбор ситуации и план действий' },
  { icon: MessagesSquare, title: 'Сопровождение (1 месяц)', text: 'Контроль и поддержка' },
  { icon: Flower2, title: 'Женское здоровье и беременность', text: 'Подготовка и восстановление' },
]

const stats = [
  { value: '3000+', label: 'проведённых консультаций', icon: Users },
  { value: '10+ лет', label: 'работы с пациентами', icon: ShieldCheck },
  { value: '97%', label: 'довольных пациентов', icon: Heart },
]

const faqItems = [
  {
    question: 'Нужно ли сдавать анализы заранее?',
    answer: 'Нет, на консультации мы разберём вашу ситуацию и составим список анализов только при необходимости.',
  },
  {
    question: 'Это эффективно онлайн?',
    answer: 'Да, онлайн-формат подходит для подробного разбора жалоб, анамнеза, питания, сна и результатов анализов.',
  },
  {
    question: 'Вы работаете только с женщинами?',
    answer: 'Основной фокус — женское здоровье, но часть эндокринных и метаболических запросов можно разобрать индивидуально.',
  },
]

const faqCollapseItems: CollapseProps['items'] = faqItems.map((item, index) => ({
  key: String(index),
  label: <span className="taplink__faq-question">{item.question}</span>,
  children: <p className="taplink__faq-answer">{item.answer}</p>,
  className: 'taplink__faq-item',
}))

function bemClass(...classNames: Array<string | false>): string {
  return classNames.filter(Boolean).join(' ')
}

function ServiceIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="taplink__service-icon">
      <Icon size={18} strokeWidth={1.7} />
    </span>
  )
}

function StatIcon({ icon: Icon }: { icon: LucideIcon }) {
  return (
    <span className="taplink__stat-icon">
      <Icon size={20} strokeWidth={1.7} />
    </span>
  )
}

export function TaplinkPage() {
  return (
    <main className="taplink">
      <div className="taplink__canvas">
        <section className="taplink__hero">
          <div className="taplink__hero-copy">
            <h1 className="taplink__title">
              Здоровье —
              <br />
              это баланс
            </h1>
            <p className="taplink__subtitle">
              Гормоны, энергия, вес —
              <br />
              всё взаимосвязано
            </p>
          </div>

          <div className="taplink__portrait">
            <div className="taplink__portrait-circle taplink__portrait-circle--large" />
            <div className="taplink__portrait-circle taplink__portrait-circle--small" />
            <div className="taplink__experience-badge">
              <span className="taplink__experience-value">10+</span>
              <span className="taplink__experience-text">
                лет
                <br />
                практики
              </span>
            </div>
            <img src={doctorImage} alt="Врач эндокринолог" className="taplink__doctor-image" />
          </div>
        </section>

        <section className="taplink__help-card">
          <div className="taplink__section-header">
            <h2>Помогаю при</h2>
            <span />
          </div>
          <div className="taplink__help-list">
            {helpItems.map((item, index) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className={bemClass('taplink__help-item', index < helpItems.length - 1 && 'taplink__help-item--border')}
                >
                  <span className="taplink__help-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </span>
                  <span>{item.title}</span>
                </div>
              )
            })}
          </div>
        </section>

        <section className="taplink__cta-group">
          <a href="#contact" className="taplink__button">
            <span>
              <Calendar size={18} strokeWidth={1.8} />
              Разобрать мою ситуацию
            </span>
            <ArrowRight size={17} strokeWidth={1.8} />
          </a>
        </section>

        <section className="taplink__results-card">
          <div className="taplink__stats">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div key={stat.value} className="taplink__stat">
                  <StatIcon icon={Icon} />
                  <div className="taplink__stat-value">{stat.value}</div>
                  <div className="taplink__stat-label">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="taplink__gains-card">
          <div className="taplink__section-header taplink__section-header--light">
            <h2>Что вы получите</h2>
            <span />
          </div>
          <div className="taplink__gains-list">
            {gains.map((item) => {
              const Icon = item.icon
              return (
                <div key={item.title} className="taplink__gain">
                  <span className="taplink__gain-icon">
                    <Icon size={18} strokeWidth={1.8} />
                  </span>
                  <div>
                    <p>{item.title}</p>
                    {item.text && <span>{item.text}</span>}
                  </div>
                </div>
              )
            })}
          </div>
          <img src={plantImage} alt="" className="taplink__gains-plant" />
        </section>

        <section className="taplink__services">
          <div className="taplink__section-header">
            <h2>Мои услуги</h2>
            <span />
          </div>
          <div className="taplink__services-list">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <a href="#contact" key={service.title} className="taplink__service-card">
                  <ServiceIcon icon={Icon} />
                  <span className="taplink__service-text">
                    <span>{service.title}</span>
                    {service.text && <small>{service.text}</small>}
                  </span>
                  <ChevronRight size={18} className="taplink__service-arrow" strokeWidth={1.7} />
                </a>
              )
            })}
          </div>
        </section>

        <section className="taplink__doctor-note">
          <div className="taplink__doctor-note-content">
            <h2>Вам не нужно разбираться во всём самой</h2>
            <p>Я помогу вам спокойно восстановить здоровье и вернуть нормальное самочувствие</p>
            <img src={signatureImage} alt="В. Маскаева" className="taplink__doctor-note-signature" />
          </div>
          <img src={plantDecorImage} alt="" className="taplink__doctor-note-plant" />
        </section>

        <section className="taplink__faq">
          <div className="taplink__section-header">
            <h2>Частые вопросы</h2>
            <span />
          </div>

          <Collapse
            accordion
            ghost
            defaultActiveKey={['0']}
            className="taplink__faq-collapse"
            expandIconPosition="end"
            expandIcon={({ isActive }) =>
              (
                <span className="taplink__faq-icon">
                  {isActive ? (
                    <Minus size={18} color="#3F4F3A" strokeWidth={1.8} />
                  ) : (
                    <Plus size={18} color="#3F4F3A" strokeWidth={1.8} />
                  )}
                </span>
              )
            }
            items={faqCollapseItems}
          />
        </section>

        <section id="contact" className="taplink__final-cta">
          <h2 className="taplink__final-title">
            Готовы к изменениям?
            <br />
            Начните с первого шага
          </h2>

          <a href="#" className="taplink__final-button">
            Записаться на консультацию
            <ArrowRight size={18} color="#3F4F3A" strokeWidth={1.8} />
          </a>

          <div className="taplink__final-socials">
            <span>или напишите в</span>
            <div className="taplink__final-social-icons">
              <a href="https://t.me/" aria-label="Telegram">
                <Send size={18} strokeWidth={1.8} />
              </a>
              <a href="https://wa.me/" aria-label="WhatsApp">
                <MessageCircle size={18} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
