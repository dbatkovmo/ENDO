import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MiniAppsLayout } from '@/layouts/MiniAppsLayout'
import { LandingPage } from '@/pages/LandingPage'
import { AppsListPage } from '@/pages/AppsListPage'
import { KbjuCalculatorPage } from '@/pages/KbjuCalculatorPage'
import { EnergyQuizPage } from '@/pages/EnergyQuizPage'
import { WeightStallPage } from '@/pages/WeightStallPage'
import { HormoneCheckPage } from '@/pages/HormoneCheckPage'
import { SweetCravingPage } from '@/pages/SweetCravingPage'
import { DayRationAnalysisPage } from '@/pages/DayRationAnalysisPage'
import { FatBurnForecastPage } from '@/pages/FatBurnForecastPage'
import { NeedAnalysesPage } from '@/pages/NeedAnalysesPage'
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
          <Route path="energy" element={<EnergyQuizPage />} />
          <Route path="weight-stall" element={<WeightStallPage />} />
          <Route path="ration-day" element={<DayRationAnalysisPage />} />
          <Route path="fat-burn-forecast" element={<FatBurnForecastPage />} />
          <Route path="need-analyses" element={<NeedAnalysesPage />} />
          <Route path="hormone" element={<HormoneCheckPage />} />
          <Route path="sweet-craving" element={<SweetCravingPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}
