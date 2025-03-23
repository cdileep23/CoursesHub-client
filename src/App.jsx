import React from 'react'
import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './Pages/Login'
import Hero from './Pages/student/Hero'
import MainLayout from './layout/mainLayout'

// Create router with proper nested routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Hero />
      },
      {
        path: 'auth',
        element: <Login />
      }
    ]
  }
])

const App = () => {
  return (
    <main>
      <Toaster position="bottom-right" richColors />
      <RouterProvider router={appRouter} />
    </main>
  )
}

export default App