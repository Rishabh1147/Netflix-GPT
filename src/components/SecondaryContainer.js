import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);

  return movie.nowPlayingMovies && (
    <div className=" bg-black">
      <div className="-mt-60 pl-12 relative z-20">
        <MovieList title = {"Now Playing"} movie = {movie.nowPlayingMovies}/>
        <MovieList title = {"Top Rated"} movie = {movie.topRatedMovies}/>
        <MovieList title = {"Popular Movies"} movie = {movie.popularMovies}/>
        <MovieList title = {"Upcoming Movies"} movie = {movie.upcommingMovies}/>
      </div>

    </div>
  )
}

export default SecondaryContainer