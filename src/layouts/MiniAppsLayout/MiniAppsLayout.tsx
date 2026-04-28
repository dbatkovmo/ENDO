import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import { AppsHeader } from '@/components/AppsHeader'
import './MiniAppsLayout.scss'

const { Content } = Layout

export function MiniAppsLayout() {
  return (
    <Layout className="mini-apps__layout">
      <AppsHeader />
      <Content className="mini-apps__content">
        <Outlet />
      </Content>
    </Layout>
  )
}
