import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './AppsHeader.module.scss'

const { Header } = Layout

export function AppsHeader() {
  const navigate = useNavigate()
  return (
    <Header className={styles.header}>
      <span className={styles.logo} onClick={() => navigate('/apps')}>ENDO Apps</span>
    </Header>
  )
}
