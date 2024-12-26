import React from 'react'
import GPTMoviesuggestion from './GPTMoviesuggestion'
import GPTSearchBar from './GPTSearchBar'
import { BACKDROP } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src= {BACKDROP} alt="Backdrop" />
      </div>
      <GPTSearchBar />
      <GPTMoviesuggestion />
    </div>
  )
}

export default GPTSearch