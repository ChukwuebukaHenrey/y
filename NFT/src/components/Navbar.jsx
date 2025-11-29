
import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute z-10 top-0 left-0 w-full'>
      <div className='flex justify-between items-center py-7 px-6 md:px-20 lg:px-32 bg-transparent text-whi '>
          <h1 className='font-bold text-3xl text-white'>Logo</h1>
          <ul className='list-none text-xl flex justify-center items-center gap-14  '>
            <li><a href="#">Home</a></li>
            <li><a href="#">Explore</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Artists</a></li>
            <li><a href="#">News</a></li>
          </ul>
          <div className='flex gap-4 justify-center items-center'>
            <button className='py-2 px-8 bg-transparent border-black text-black text-xl border-1 outline-2 rounded-2xl justify-center items-center font-semibold cursor-pointer shadow'>Search</button>
            <button className='py-2 px-8 bg-black text-white text-xl border-0 outline-0 rounded-2xl justify-center items-center font-semibold cursor-pointer shadow'>Register</button>
          </div>
      </div>
    </div>
  )
}

export default Navbar
