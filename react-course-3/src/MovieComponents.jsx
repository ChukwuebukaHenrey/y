import React from 'react'
import { movies } from './assets/movies'
import Movie from './components/movie';

const fetchMovieData = () => {
    return movies;
}

const movieData = fetchMovieData();

const MovieComponents = () => {
  return (
    <div className='bg-gray-400 dark:bg-gray-900'>
      <h1 className='text-2xl text-red-800 underline underline-offset-1'>Movies</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {movieData.map((movie) => (
            <Movie key={movie.id} bread={movie}/>
        ))} 
      </div>
    </div>
  )
}

export default MovieComponents
