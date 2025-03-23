import React from 'react'
import { Toaster } from 'sonner'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Login from './Pages/Login'
import Hero from './Pages/student/Hero'
import MainLayout from './layout/mainLayout'
import Courses from './Pages/student/Courses'
import MyLearning from './Pages/student/MyLearning'

// Create router with proper nested routes
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element:<><Hero /> <Courses/></> 
      },
      {
        path: 'auth',
        element: <Login />
      },{
        path:'my-learning',
        element:<MyLearning/>
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