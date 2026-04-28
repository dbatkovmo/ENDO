import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Send } from 'lucide-react'
import leavesImageDecor from '@/shared/assets/images/leaves-decor.png'
import './NotFoundPage.scss'

export function NotFoundPage() {
  return (
    <main className="not-found">
      <img
        src={leavesImageDecor}
        alt=""
        className="not-found__decor not-found__decor--top"
      />
      <img
        src={leavesImageDecor}
        alt=""
        className="not-found__decor not-found__decor--bottom"
      />

      <section className="not-found__container">
        <header className="not-found__brand" aria-label="Вера Маскаева, нутрициолог">
          <div className="not-found__brand-mark">ВМ</div>
          <div className="not-found__brand-name">Вера Маскаева</div>
          <div className="not-found__brand-caption">нутрициолог</div>
        </header>

        <div className="not-found__content">
          <div className="not-found__code">404</div>
          <h1 className="not-found__title">Страница не найдена</h1>
          <p className="not-found__text">
            Похоже, вы перешли по неверной ссылке или страница была перемещена.
          </p>
          <p className="not-found__note">
            Давайте вернёмся туда, где всё начинается — к вашему здоровью
          </p>
        </div>

        <div className="not-found__actions">
          <Link className="not-found__primary-button" to="/">
            Вернуться на главную
            <ArrowRight size={18} strokeWidth={1.8} />
          </Link>

          <div className="not-found__socials">
            <span>или написать мне</span>
            <div className="not-found__social-list">
              <a href="https://t.me/" aria-label="Telegram">
                <Send size={20} strokeWidth={1.8} />
              </a>
              <a href="https://wa.me/" aria-label="WhatsApp">
                <MessageCircle size={20} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
