import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import './App.css'
import { AltarCorpPage } from './pages/AltarCorpPage'
import { HomePage } from './pages/HomePage'
import { MobileProjectPage } from './pages/MobileProjectPage'
import { MobileAppsPage } from './pages/MobileAppsPage'

function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (pathname === '/' && sessionStorage.getItem('portfolio-project-scroll')) {
      return
    }

    if (hash) {
      window.requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView())
      return
    }

    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projets/altar-corp" element={<AltarCorpPage />} />
        <Route path="/projets/applications-mobiles" element={<MobileAppsPage />} />
        <Route path="/projets/zen-sleep" element={<Navigate to="/projets/applications-mobiles" replace />} />
        <Route path="/projets/good" element={<Navigate to="/projets/applications-mobiles" replace />} />
        <Route path="/projets/:slug" element={<MobileProjectPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </>
  )
}

export default App
