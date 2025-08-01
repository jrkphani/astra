import { Routes, Route } from 'react-router-dom'
import Layout from '@/layouts/Layout'
import HomePage from '@/pages/HomePage'
import SalesTransformationPage from '@/pages/SalesTransformationPage'
import SparkFrameworkPage from '@/pages/SparkFrameworkPage'
import SalesInterlocksPage from '@/pages/SalesInterlocksPage'
import ExecutionGovernancePage from '@/pages/ExecutionGovernancePage'
import KpiMetricsPage from '@/pages/KpiMetricsPage'
import SalesKPIsPage from '@/pages/SalesKPIsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="sales-transformation" element={<SalesTransformationPage />} />
        <Route path="spark-framework" element={<SparkFrameworkPage />} />
        <Route path="sales-interlocks" element={<SalesInterlocksPage />} />
        <Route path="execution-governance" element={<ExecutionGovernancePage />} />
        <Route path="kpi-metrics" element={<KpiMetricsPage />} />
        <Route path="sales-kpis" element={<SalesKPIsPage />} />
      </Route>
    </Routes>
  )
}

export default App
