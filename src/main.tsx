import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShowsPage from './pages/ShowsPage'
import CalendarPage from './pages/CalendarPage'
import NewsPage from './pages/NewsPage'
import PartnersPage from './pages/PartnersPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'shows', element: <ShowsPage /> },
      { path: 'calendar', element: <CalendarPage /> },
      { path: 'news', element: <NewsPage /> },
      { path: 'partners', element: <PartnersPage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'contact', element: <ContactPage /> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
