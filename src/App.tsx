import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MiniAppsLayout } from '@/layouts/MiniAppsLayout'
import { LandingPage } from '@/pages/LandingPage'
import { AppsListPage } from '@/pages/AppsListPage'
import { KbjuCalculatorPage } from '@/pages/KbjuCalculatorPage'
import { TaplinkPage } from '@/pages/TaplinkPage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/taplink" element={<TaplinkPage />} />
        <Route path="/apps" element={<MiniAppsLayout />}>
          <Route index element={<AppsListPage />} />
          <Route path="kbju" element={<KbjuCalculatorPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
