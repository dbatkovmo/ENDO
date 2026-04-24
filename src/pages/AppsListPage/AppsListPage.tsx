import { Card, Col, Row, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './AppsListPage.module.scss'

const { Title } = Typography

const apps = [
  {
    key: 'kbju',
    title: 'Калькулятор КБЖУ',
    description: 'Суточная норма калорий, белков, жиров и углеводов',
    path: '/apps/kbju',
    emoji: '🥗',
  },
]

export function AppsListPage() {
  const navigate = useNavigate()

  return (
    <div>
      <Title level={2}>Мини-приложения</Title>
      <Row gutter={[16, 16]}>
        {apps.map((app) => (
          <Col key={app.key} xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              className={styles.card}
              onClick={() => navigate(app.path)}
            >
              <Card.Meta
                avatar={<span className={styles.emoji}>{app.emoji}</span>}
                title={app.title}
                description={app.description}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}
