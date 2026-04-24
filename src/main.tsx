import './bootstrap'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import ruRU from 'antd/locale/ru_RU'
import { theme } from '@/theme'
import App from './App'
import './styles/global.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider theme={theme} locale={ruRU}>
      <App />
    </ConfigProvider>
  </StrictMode>,
)
