import React from 'react'
import { Assets } from '../../public/assets'

const Footer = () => {
    return (
        <div className='pt-10 px-4 md:px-20 lg:px-32 w-full overflow-hidden bg-gray-900' id='Footer'>
            <div className='container flex mx-auto flex-col md:flex-row justify-between items-center '>
                <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                    <a href="#Header">
                        <img src={Assets.logo_dark} alt='' />
                    </a>

                    <p className='text-gray-400 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quos eligendi maiores, quaerat suscipit illo corrupti iure hic nisi optio ab accusamus reiciendis at autem aut veniam, earum laborum dicta?</p>
                </div>

                <div className='w-fullmd
                1/5 mb-8 md:mb-0'>
                    <h3 className='text-white text-lg font-bold mb-4'>
                        Company
                    </h3>
                    <ul className='text-gray-400 flex flex-col gap-2'>
                        <a href="#Header" className='hover:text-white'>Home</a>
                        <a href="#About" className='hover:text-white'>About us</a>
                        <a href="#Contact" className='hover:text-white'>Contact Us</a>
                        <a href="#" className='hover:text-white'>Privacy Policy</a>
                    </ul>
                </div>

                <div className='w-full md:w-1/3'
                >
                    <h3 className='text-white text-lg font-bold  mb-4'>
                        Subscribe To Our Newsletter
                    </h3>
                    <p className='text-gray-400 mb-4 max-w-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, non?</p>
                    <div className='flex gap-2'>
                        <input className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto' type="email" name="Email" id="" placeholder='Enter You Email' />
                        <button className=' py-2 px-4 rounded bg-blue-500 text-white cursor-pointer'>Subscribe</button>
                    </div>
                </div>

            </div>

            <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
                Copyright 2025 @Ebuka. All Right Reserved
            </div>
        </div>
    )
}

export default Footer
