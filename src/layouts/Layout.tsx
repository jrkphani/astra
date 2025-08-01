import { Outlet } from 'react-router-dom'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <Navigation />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
