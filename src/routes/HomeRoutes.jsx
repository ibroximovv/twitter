import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NavList, paths } from '../hooks/paths'
import { Home } from '../pages'
import Navbar from '../modules/Navbar'
import SideBar from '../modules/SideBar'

const HomeRoutes = () => {
  return (
    <div className='flex justify-between w-[1200px] mx-auto'>
      <Navbar />
      <div className='w-[50%] border-l-[2px] border-r-[2px] border-slate-400 h-[100vh] overflow-hidden'>
        <Routes>
          {NavList.map(item => <Route path={item.path} element={item.element }/>)}
        </Routes>
      </div>
      <SideBar />
    </div>
  )
}

export default HomeRoutes