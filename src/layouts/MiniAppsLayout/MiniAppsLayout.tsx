import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { AppsHeader } from '@/components/AppsHeader'
import styles from './MiniAppsLayout.module.scss'

const { Content } = Layout

export function MiniAppsLayout() {
  return (
    <Layout className={styles.layout}>
      <AppsHeader />
      <Content className={styles.content}>
        <Outlet />
      </Content>
    </Layout>
  )
}
