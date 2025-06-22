import React from 'react'
import Input from '../components/Input'
import Search from '../components/Search'

const SideBar = () => {
  return (
    <div className='w-[25%] h-[100vh] overflow-y-auto pt-[20px] pl-[28px]'>
      <Search />
    </div>
  )
}

export default SideBar