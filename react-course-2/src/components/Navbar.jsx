import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    const [showMobilemenu, setShowMobilemenu] = useState(false)
    useState (
        ()=> {
            if (showMobilemenu) {
                document.body.style.overflow ='hidden'
            } else{
                document.body.style.overflow = 'auto'
            } return ()=> {
                document.body.style.overflow = 'auto'
            };
        }, [showMobilemenu]
    )
    return (
        <div className='w-full top-0 left-0 absolute z-10'>
            <div className='py-4 px-6 mx-auto flex justify-between items-center md:px-20 lg:px-32 bg-transparent'>
                <img src='/logo.svg' alt="" />
                <ul className='hidden text-white md:flex gap-7 '>
                    <a href="#header" className='cursor-pointer hover:text-gray-400'>Home</a>
                    <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
                    <a href="#Projects" className='cursor-pointer hover:text-gray-400'>Projects</a>
                    <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
                </ul>
                <button className='hidden md:block bg-white px-8 py-2 rounded-full cursor-pointer transform transition-all duration-200 ease-in-out hover:bg-black hover:text-white hover:scale-110 list-none '>

                    <Link to={'/Signup'}><li>Signup</li></Link>

                </button>
                <img onClick={() => setShowMobilemenu(true)} src='/menu_icon.svg' alt="" className="md:hidden w-7 cursor-pointer transition-all duration-200" />
            </div>

            {/* -----menu-mobile-toggle----- */}

            <div className={` container md:hidden lg:hidden overflow-hidden top-0 right-0 bottom-0 ${showMobilemenu ? 'w-full fixed' : 'h-0 w-0 transition-all duration-200 ease-in-out'} transition-all duration-200 ease-in-out bg-white`}>
                <div className=" flex justify-end px-6 py-6">
                    <img onClick={() => setShowMobilemenu(false)} src='/cross_icon.svg' alt="" className=" w-6 cursor-pointer" />
                </div>
                <ul className="flex flex-col text-lg font-medium items-center mx-5 mt-5 ">
                    <a onClick={() => setShowMobilemenu(false)} href="#Home" className="py-2 px-4 inline-block  rounded-full">Home</a>
                    <a onClick={() => setShowMobilemenu(false)} href="#About" className="py-2 px-4 inline-block  rounded-full">About</a>
                    <a onClick={() => setShowMobilemenu(false)} href="#Projects" className="py-2 px-4 inline-block  rounded-full">Projects</a>
                    <a onClick={() => setShowMobilemenu(false)} href="#Testimonials" className="py-2 px-4 inline-block  rounded-full">Testimonials</a>
                </ul>

            </div>
        </div>
    )
}

export default Navbar
