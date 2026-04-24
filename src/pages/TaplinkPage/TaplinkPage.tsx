import { Button } from 'antd'
import styles from './TaplinkPage.module.scss'

const links = [
  { label: 'Мини-приложения', href: '/apps' },
  { label: 'Instagram', href: '#' },
  { label: 'Telegram', href: '#' },
  { label: 'YouTube', href: '#' },
]

export function TaplinkPage() {
  return (
    <div className={styles.page}>
      <div className={styles.avatar} />
      <div className={styles.name}>ENDO</div>
      <p className={styles.bio}>Краткое описание. Заглушка — замени.</p>
      <div className={styles.links}>
        {links.map((l) => (
          <Button key={l.label} href={l.href} size="large" className={styles.link}>
            {l.label}
          </Button>
        ))}
      </div>
    </div>
  )
}
