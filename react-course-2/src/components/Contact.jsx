import React from 'react'

const Contact = () => {
    return (
        <div className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact <span className='underline underline-offset-4 font-light under decoration-1 '>Us</span></h1>
            <p className='max-w-80 text-center mb-12 text-gray-500 mx-auto'>Ready to take a Move? Let's Build Your Future Together</p>


            <form className='max-w-2xl mx-auto text-gray-800 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="text" name="Name"  placeholder='Your Name' required />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input className='w-full border border-gray-300 rounded py-3 px-4 mt-2' type="email" name="Email"  placeholder='Your Email' required />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-green-300 rounded py-3 px-4 mt-2 h-48 resize-none' name="Message" placeholder='Leave Us A Message' required></textarea>
                </div>

                <button className='bg-blue-600 text-white py-2 px-12 mb-10 rounded cursor-pointer' >
                    Send Message 
                </button>
                
            </form >



        </div >
    )
}

export default Contact
