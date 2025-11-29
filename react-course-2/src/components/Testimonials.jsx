import React from 'react'
import { Assets, testimonialsData } from '../../public/assets'

const Testimonials = () => {
    return (
        <div className='container lg:px-32 w-full py-6 mx-auto overflow-hidden' id='Testimonials'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customers <span className='underline underline-offset-4 font-light under decoration-1 '>Testimonials</span></h1>
            <p className='max-w-80 text-center mb-12 text-gray-500 mx-auto'>Real Stories of Those That Found a Home With Us</p>

            <div className='flex flex-wrap gap-8 justify-center'>
                {testimonialsData.map((testimonial,index)=> (
                    <div key={index} className='max-w-[340px] border shadow-lg rounded py-12 px-8 text-center'>
                        <img className='w-20 h-20 rounded-full mb-4 mx-auto' src={testimonial.image} alt={testimonial.alt} />
                        <h2 className='text-gray-700 font-medium text-xl'>{testimonial.name}</h2>
                        <p className='text-sm text-gray-500 mb-4'>{testimonial.title}</p>
                        <div className='flex justify-center mb-4 gap-1 text-red-500'>
                            {Array.from({length: testimonial.rating}, (item,index)=> (
                                <img key={index} src={Assets.star_icon} alt=''/>
                            ))}
                        </div>
                        <p className='text-gray-600'>{testimonial.text}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Testimonials
