import React from 'react'

const Movie = ({bread}) => {
    return (
        <div>
            <div key={bread.id} className='border p-4 rounded'>
                <img src={bread.imageUrl} alt={bread.title} className='w-full h-64 object-cover mb-2 rounded' />
                <h2 className='text-xl font-bold'>{bread.title}</h2>
                <p className='text-gray-600'>{bread.year} - {bread.genre}</p>
                <p className='text-gray-600'>Director: {bread.director}</p>
                <p className='text-gray-600'>Rating: {bread.rating}</p>
                <p className='text-gray-600'>Duration: {bread.duration}</p>
            </div>
        </div>
    )
}

export default Movie
