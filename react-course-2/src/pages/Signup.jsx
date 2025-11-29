import React from 'react'
import { Link } from "react-router-dom"
import Imagelink from '../components/Imagelink'


const Signup = () => {
    return (
        <div className='w-full min-h-screen md:h-screen overflow-hidden max-w-[1400px] mx-auto py-2 flex justify-center gap-2 items-center bg-white' id='Signup'>
            {/* Left signup page */}
            <section className=' bg-white w-full h-full py-2 px-5 flex flex-col mx-auto md:w-[50%] md:min-h-screen items-center  md:py-4 md:px-7'>

                {/* Text Header */}

                <article className='flex text-left flex-col md:gap-1 my-5 mx-7 w-full text-black justify-center  px-3.5'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl  font-bold text-left'>Create Your Account</h1>
                    <h6 className='text-sm md:text-[16px] lg:text-[18px] text-wrap'>Fill in the form below to create an account</h6>
                </article>
                <form className='flex flex-col gap-1 justify-center  w-full '>

                        {/* Name requests */}

                    <div className='flex gap-7 justify-between items-center w-[90%]  my-2 mx-4'>
                        <div className='w-[50%] flex flex-col gap-1.5 justify-center  text-black '>
                            <p>Firstname</p>
                            <input className='px-2 rounded placeholder-[#413e3ece]  py-1 bg-gray-400 w-full' type="text" name="Firstname" id="Firstname" placeholder='Firstname' required />
                        </div>
                        <div className='w-[50%] flex flex-col gap-1.5 justify-center text-black '>
                            <p>Lastname</p>
                            <input className='px-2 rounded py-1 placeholder-[#413e3ece] border-white bg-gray-400 w-full' type="text" name="Lastname" id="Lastname" placeholder='Lastname' required />
                        </div>
                    </div>

                    {/* Email */}
                    <div className=' w-[90%] flex flex-col gap-1.5 justify-center text-[17px] text-black my-2 mx-4'>
                        <p>Email</p>
                        <input className='px-2 rounded placeholder-[#413e3ece] py-1  bg-gray-400 w-full' type="Email" name="Email" id="Email" placeholder='Email' required />
                    </div>

                    {/* Password */}
                    <div className='flex gap-7 justify-between items-center w-[90%] my-2 mx-4'>
                        <div className='w-[50%] flex flex-col gap-1.5 justify-center  text-black '>
                            <p>Password</p>
                            <input className='px-2 rounded py-1  placeholder-[#413e3ece] bg-gray-400 w-full ' type="password" name="Password" id="password" placeholder='Password' required />
                        </div>
                        <div className='w-[50%] flex flex-col gap-1.5 justify-center  text-black '>
                            <p className='text-[15px] text-nowrap'>Confirm Password</p>
                            <input className='px-2 rounded py-1 text-[15px]  bg-gray-400 w-full placeholder-[#413e3ece]' type="password" name="Password" id="confirm" placeholder='Confirm Password' required />
                        </div>
                    </div>

                    {/* Terms and  Conditions */}

                    <article className='flex flex-col text-sm  my-3 mx-4 text-black'>
                        <article className='flex flex-col my-3'>
                            <h1>We want you to know exactly how our service works and why we need your details</h1>
                            <h1>Please confirm that you have read, understood and accept the terms and conditions.</h1>
                        </article>
                        <article className='my-2 flex justify-start items-center gap-3 text-left'>
                            <input type="checkbox" name="terms" id="Terms" required />
                            <h1>I have read, understood and accept the terms and conditions</h1>
                        </article>
                        <button className='shadow-black shadow-sm py-1 px-6 rounded my-2 cursor-pointer transform transition-all duration-200 ease-in-out bg-blue-600 hover:bg-blue-800 hover:border-blue-600  w-[150px] md:w-[100%] lg:w-[40%] text-white font-bold text-lg' type="submit">
                            Submit
                        </button>

                    </article>
                </form>
            </section>

            <section className='hidden md:w-[50%] md:h-full md:flex mr-5 '>
                <img className=' rounded-2xl object-center object-cover w-full relative h-full' src="/home1.copy.jpg" alt="" />
                <div className=' absolute w-[200px] top-14 z-10 ml-5 '>
                    <Link to={'/'}><Imagelink/></Link>
                </div>

            </section>

        </div>
    )
}

export default Signup
//     < div className = 'w-full h-screen overflow-hidden flex justify-center items-center bg-blue-950' id = 'Signup' >
//     <section className=' bg-white w-full h-full py-2 px-5 flex flex-col mx-auto md:w-[50%] md:h-full items-center md:relative md:mx-auto md:py-4 md:px-7'>
//         <img className='md:absolute top-0 left-0 mx-4 my-6' src="/logo_dark.svg" alt="" />
//         <article className='flex flex-col md:gap-3 my-7 mx-4 md:absolute md:left-0 md:top-20 text-black justify-center'>
//             <h1 className='text-2xl md:text-4xl font-semibold text-left'>Create Your Account</h1>
//             <h6 className='text-sm'>Fill in the form below to create an account</h6>
//         </article>
//         <form className='flex flex-col gap-1.5 justify-center md:absolute md:top-15 md:left-0 w-full '>
//             {/* first/lastnames */}
//             <div className='flex gap-7 justify-between items-center w-[90%] md:absolute md:top-30 md:left-0 my-7 mx-4'>
//                 <div className='w-[50%] flex flex-col gap-1.5 justify-center text-lg text-black '>
//                     <p>Firstname</p>
//                     <input className='px-2 rounded outline border  bg-gray-400 w-full' type="text" name="Firstname" id="Firstname" required placeholder='Firstname' />
//                 </div>
//                 <div className='w-[50%] flex flex-col gap-1.5 justify-center text-lg text-black '>
//                     <p>Lastname</p>
//                     <input className='px-2 rounded outline border border-red-600 bg-gray-400 w-full' type="text" name="Lastname" id="Lastname" required placeholder='Lastname'/>
//                 </div>
//             </div>
//                   {/* Email */}
//             <div className='md:absolute md:top-50 md:left-0 w-[90%] flex flex-col gap-1.5 justify-center text-lg text-black my-7 mx-4'>
//                 <p>Email</p>
//                 <input className='px-2 rounded outline border border-red-600 bg-gray-400 w-full' type="Email" name="Email" id="Email" required placeholder='Email'/>
//             </div>
//                 {/* Password */}
//             <div className='flex gap-7 justify-between items-center w-[90%] md:absolute md:top-70 md:left-0 my-7 mx-4'>
//                 <div className='w-[50%] flex flex-col gap-1.5 justify-center text-lg text-black '>
//                     <p>Password</p>
//                     <input className='px-2 rounded outline border border-red-600 bg-gray-400 w-full' type="password" name="Password" id="password" required placeholder='Password' />
//                 </div>
//                 <div className='w-[50%] flex flex-col gap-1.5 justify-center text-lg text-black '>
//                     <p>Confirm Password</p>
//                     <input className='px-2 rounded outline border border-red-600 bg-gray-400 w-full' type="password" name="Password" id="confirm" required placeholder='Confirm Password'/>
//                 </div>
//             </div>

//             <article className='flex flex-col text-sm md:absolute md:top-90 left-0 my-7 mx-4 text-black'>
//                 <article className='flex flex-col my-3'>
//                     <h1>We want you to know exactly how our service works and why we need your details</h1>
//                     <h1>Please confirm that you have read, understood and accept the terms and conditions.</h1>
//                 </article>
//                 <article className='my-2 flex justify-start items-center gap-3 text-left'>
//                     <input type="checkbox" name="terms" id="Terms" required />
//                     <h1>I have read, understood and accept the terms and conditions</h1>
//                 </article>
//                 <input className='py-1 px-2 rounded my-2 cursor-pointer bg-black w-[100px] md:w-[18%] text-black font-bold text-lg' type="button" value="Submit" required />
//             </article>

//         </form>
//     </section>
//     <section className='hidden md:w-[50%] md:h-full md:flex'>
//         <img  className='object-center object-cover w-full h-full' src="/header_img.png" alt="" />
//     </section>
// </div >