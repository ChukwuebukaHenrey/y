import React, { useEffect, useState } from 'react'
import { projectsData } from '../../public/assets'

const Projects = () => {

    const [currentCount, setCurrentCount] = useState(0)
    const [cardShow, setCardShow] = useState(1)

    useEffect(()=> {
        const updatecardShow = () => {
            if (window.innerWidth >= 1024){
                setCardShow(projectsData.length)
            } else {
                setCardShow(1)
            };
        };
            updatecardShow();

            window.addEventListener('resize', updatecardShow);
            return ()=> window.removeEventListener('resize', updatecardShow);

    },[])

    const nextProjects = () => {
        setCurrentCount((prevIndex) => (prevIndex + 1) % projectsData.length)
    }

    const prevProjects = () => {
        setCurrentCount((prevIndex) => prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1)
    }

    return (
        <div className=' container w-full mx-auto py-4 pt-20 my-20 px-6 md:px-20 lg:px-32 overflow-hidden' id='Projects'>
            <h1 className='mb-2 text-2xl sm:text-4xl font-bold text-center'>Projects <span className='underline  underline-offset-4 decoration-1  under font-light'>Completed</span></h1>
            <p className='text-gray-500 mb-8 mx-auto text-center max-w-80'>Crafting Spaces, Building Legacies-Explore Our Portfolio</p>

            {/* -----Slider Buttons----- */}
            <div className='mb-8 flex justify-end items-center'>
                <button className='bg-gray-200 mr-2 p-3 rounded cursor-pointer'>
                    <img onClick={prevProjects} src='/left_arrow.svg' alt="Previous" />
                </button>

                <button className='bg-gray-200 mr-2 p-3 rounded cursor-pointer'>
                    <img onClick={nextProjects} src='/right_arrow.svg' alt="Next" />
                </button>
            </div>

            <div className='overflow-hidden'>
                <div className='gap-8 flex transition-transform duration-500 ease-in-out'
                style={{transform: `translateX(-${(currentCount * 100)/ cardShow}%)`}}>
                    {projectsData.map((project, index) => (
                        <div key={index} className=' relative w-full sm:w-1/4 flex-shrink-0 '>
                            <img className='mb-14 w-full h-auto' src={project.image} alt={project.title} />
                            <div className='absolute flex justify-center left-0 right-0 bottom-5'>
                                <div className='inline-block w-3/4 px-4 py-2 shadow-md bg-white'>
                                    <h1 className='text-gray-800 text-xl font-semibold'>{project.title}</h1>
                                    <p className='text-gray-500 text-sm'>{project.price}<span className='px-1'>|</span>{project.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default Projects
