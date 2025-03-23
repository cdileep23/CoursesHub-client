import Navbar from '@/components/Navbar'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'

const MainLayout = () => {
  const location = useLocation();
  const isAuthRoute = location.pathname.includes('/auth');

  return (
    <div>
      {!isAuthRoute && <Navbar />}
      <div className={isAuthRoute ? '' : 'pt-16'}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout;
