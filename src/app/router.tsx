import { createBrowserRouter } from 'react-router-dom'
import { SiteLayout } from '@/components/SiteLayout'
import { AgreementPage } from '@/pages/AgreementPage'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'agreement', element: <AgreementPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
