import About from "./About"
import Navbar from "./navbar"
import {motion} from "framer-motion"


const Header = () => {
  return ( 
    <div className="w-full min-h-screen flex bg-center bg-cover mb-4 items-center">
      <Navbar />
      <img className="-z-1 absolute w-full h-full object-cover object-center min-h-screen" src="/header_img.png " alt="" id="Header"/>
      <motion.div
      initial = {{opacity: 0, y:100}}
      transition = {{durartion: 1.5}}
      whileInView = {{opacity: 1, y:0}}
      viewport = {{once:true}}
      className="container text-center mx-auto py-4 px-6 md:px-20 lg:32px">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold mt-20 text-white">
          Explore Homes that Fits your Dreams
        </h2>
        <div className="flex space-x-3 items-center justify-center text-black text-[15px] mt-10">
          <a  className="py-2 px-7 border text-white border-white rounded transform transition-all duration-400 ease-in-out hover:bg-blue-700 hover:border-blue-600 hover:text-white hover:scale-110" href="#Projects">Projects</a>
          <a  className="py-2 px-7 border text-white bg-blue-500 border-white rounded transform transition-all duration-400 ease-in-out hover:bg-blue-700 hover:border-blue-600 hover:text-white hover:scale-110" href="#Contact">Contact Us</a>
        </div>
      </motion.div>
    </div>
  )
}

export default Header
