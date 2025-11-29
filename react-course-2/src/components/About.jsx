import React from 'react'

const About = () => {
    return (
        <div className='w-full min-h-screen flex flex-col items-center justify-center p-5 md:px-20 lg:px-32 ' id='About'>
            <h1 className='font-bold text-2xl sm:text-4xl mb-2'>About <span className='underline  underline-offset-4 decoration-1 font-light'>Our Brand</span></h1>
            <p className='text-neutral-500 text-center mb-8 max-w-80'>Passionate About Properties, Creating a Paradise For Home Lovers</p>
            <div className='flex flex-col  md:flex-row justify-center md:items-start md:gap-20 '>
                <img className='w-full  sm:w-1/2 lg: max-w-lg' src='/brand_img.png' alt="" />
                <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
                    <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                        <div>
                            <p className='text-gray-800 font-medium text-4xl'>10+</p>
                            <p className='text-2xl font-light'>Years of Excellence</p>
                        </div>
                        <div>
                            <p className='text-gray-800 font-medium text-4xl'>12+</p>
                            <p className='text-2xl font-light'>Projects Completed</p>
                        </div>
                        <div>
                            <p className='text-gray-800 font-medium text-4xl'>20+</p>
                            <p className='text-2xl font-light'>Mn Sq Ft Delivered</p>
                        </div>
                        <div>
                            <p className='text-gray-800 font-medium text-4xl'>25+</p>
                            <p className='text-2xl font-light'>Ongoing Projects</p>
                        </div>
                    </div>
                    <p className='mx-w-lg my-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, molestias vero minus quia ipsum recusandae ex quibusdam numquam ducimus eveniet doloribus. Minima dolorum soluta doloribus deserunt quidem pariatur veniam voluptates. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, quisquam.</p>
                    <button className='text-white px-8 py-2 rounded bg-blue-500 cursor-pointer transition-all duration-400 ease-in-out hover:bg-blue-700'>Learn More</button>
                </div>
                
            </div>
        </div>
    )
}

export default About
