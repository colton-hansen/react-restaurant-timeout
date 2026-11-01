import { createBrowserRouter } from 'react-router-dom'
import { SiteLayout } from '@/components/layout/SiteLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SiteLayout />,
  },
])
