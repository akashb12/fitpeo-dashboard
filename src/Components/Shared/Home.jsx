import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import Header from './Header'

const Home = () => {
  return (
    <div className='flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden'>
      <SideBar />
      <div className='flex-1'>
        <Header />
        <div className='p-2 md:p-4 h-full bg-[#141416]'>{<Outlet />}</div>
      </div>
    </div>
  )
}

export default Home
