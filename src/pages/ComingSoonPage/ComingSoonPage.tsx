import { Link as RouterLink } from 'react-router-dom'
import { Link } from 'lucide-react'
import leavesDecorImage from '@/assets/leaves-decor.png'
import './ComingSoonPage.scss'

export function ComingSoonPage() {
  return (
    <main className="coming-soon">
      <img
        src={leavesDecorImage}
        alt=""
        className="coming-soon__decor coming-soon__decor--top"
      />
      <img
        src={leavesDecorImage}
        alt=""
        className="coming-soon__decor coming-soon__decor--bottom"
      />

      <section className="coming-soon__container">
        <header className="coming-soon__logo" aria-label="Вера Маскаева, нутрициолог">
          <div className="coming-soon__logo-mark">ВМ</div>
          <div className="coming-soon__logo-name">Вера Маскаева</div>
          <div className="coming-soon__logo-caption">нутрициолог</div>
        </header>

        <div className="coming-soon__content">
          <h1 className="coming-soon__title">Мы работаем над сайтом</h1>
          <p className="coming-soon__text">
            Скоро здесь появится что-то полезное и вдохновляющее для вашего здоровья.
            А пока приглашаю вас в мой Taplink
          </p>

          <RouterLink className="coming-soon__button" to="/taplink">
            <span>Перейти в Taplink</span>
            <Link size={18} strokeWidth={1.8} />
          </RouterLink>
        </div>

        <p className="coming-soon__note">Забота о здоровье начинается с маленьких шагов</p>
      </section>
    </main>
  )
}
