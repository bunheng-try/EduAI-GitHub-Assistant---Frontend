import React from 'react'
import { Outlet } from 'react-router-dom'

const MainPanel = () => {
  return (
    <div className='pt-4'>
      <Outlet />
    </div>
  )
}

export default MainPanel