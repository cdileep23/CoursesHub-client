import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname.includes('/auth');

  return (
    <div>
      {!isAuthRoute && <Navbar />}
      <div>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout