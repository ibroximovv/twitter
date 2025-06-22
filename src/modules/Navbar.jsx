import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LogoIcon, MoreIcon2 } from '../assets/icons'
import { NavList } from '../hooks/paths'
import Button from '../components/Button'
import BoburImg from '../assets/images/Bobur.svg'
import Profile from '../components/Profile'

const Navbar = () => {
  return (
    <div className='w-[25%] h-[100vh] overflow-y-auto pr-[25px] flex flex-col'>
      <div>
        <div className='pt-[32px] pb-[49px]'>
          <Link to={'/'}><LogoIcon /></Link>
        </div>
        <ul className='space-y-[30px] mb-[30px]'>
          {NavList.map(item => (
            <NavLink to={`${item.path}`} key={item.id} className={`flex gap-[20px]`}>
              <span>{item.icon}</span>
              <p className={`text-[#000000] text-[18px] font-semibold`}>{item.title}</p>
            </NavLink>
          ))}
        </ul>
        <Button type={'button'} title={'Tweet'} extraClass={'cursor-pointer'} />
      </div>
      <Profile name={'Bobur'} img={BoburImg} username={'@bobur_mavlonov'} asset={<MoreIcon2 />} />
    </div>
  )
}

export default Navbar