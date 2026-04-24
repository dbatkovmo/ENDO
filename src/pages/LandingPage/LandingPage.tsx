import { Button } from 'antd'
import { Link } from 'react-router-dom'
import styles from './LandingPage.module.scss'

export function LandingPage() {
  return (
    <div className={styles.page}>
      <h1 className={styles.title}>ENDO</h1>
      <p className={styles.subtitle}>
        Заглушка лендинга. Замени содержимое этой страницы на маркетинговый контент.
      </p>
      <div className={styles.actions}>
        <Link to="/apps">
          <Button type="primary" size="large">Мини-приложения</Button>
        </Link>
        <Link to="/taplink">
          <Button size="large">Taplink</Button>
        </Link>
      </div>
    </div>
  )
}
