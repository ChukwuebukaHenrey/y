import React from 'react'
import Navbar from './Navbar'

const Header = () => {
  return (
    <div>
      <Navbar/>
      <img className='w-full h-screen relative -z-1 object-cover object-center' src="/lines.jpg" alt="" />
    </div>
  )
}

export default Header
