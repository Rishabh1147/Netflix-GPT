import React from 'react'
import Header from './Header'
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import GPTSearch from './GPTSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGPT = useSelector((store) => store.gpt.showGPT);

  

useNowPlayingMovies();
usePopularMovies();
useTopRatedMovies();
useUpcomingMovies();

  return (
    <div>
      <Header/>
      {showGPT ? (
        <GPTSearch/> 
      )  :( 
        <>
            <MainContainer/>
            <SecondaryContainer/>
        </> 
      )}

      
    </div>
  )
}

export default Browse