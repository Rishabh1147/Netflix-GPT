import React from 'react';
import { useSelector } from 'react-redux';
import useMovietrailer from '../hooks/useMovieTrailer';

const VideoBackground = ({movieId}) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useMovietrailer(movieId);

  return (
    <div className="w-screen overflow-hidden">
      <iframe
        className="w-screen aspect-video "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&loop=1&controls=0&playlist=${trailerVideo?.key}&modestbranding=1&showinfo=0&fs=0&disablekb=1`}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" >
      </iframe>
    </div>
  )
}

export default VideoBackground