import { Layout } from 'antd'
import { useNavigate } from 'react-router-dom'
import './AppsHeader.scss'

const { Header } = Layout

export function AppsHeader() {
  const navigate = useNavigate()
  return (
    <Header className="apps-header__header">
      <span className="apps-header__logo" onClick={() => navigate('/apps')}>ENDO Apps</span>
    </Header>
  )
}
