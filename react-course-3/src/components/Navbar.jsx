import React from 'react'

const Navbar = () => {
    return (
        <section  className='h-screen w-full py-5 px-5' >
            <nav className='flex justify-between items-center h-[10vh]'>
                <img src="/react.svg"  className='' alt="" width={'40px'} />
                <ul className='flex justify-center items-center gap-10 text-2xl'>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                    <li>Home</li>
                </ul>
                <div className='flex gap-2 justify-center items-center text-xl'>
                    <button className='bg-black text-white rounded-md py-1 px-2 cursor-pointer'> Register</button>
                    <button className='bg-black text-white rounded-md py-1 px-2 cursor-pointer'>Login</button>
                </div>
            </nav>
        </section>
    )
}

export default Navbar
