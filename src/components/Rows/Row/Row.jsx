import React, { useEffect, useState } from 'react'
import './Row.css'
import axios from '../../../utils/axios'
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const base_url = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerUrl, setTrailerUrl] = useState("")
  
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl)

      setMovies(request.data.results)
      console.log(request)
      return request;
    }
    fetchData()
  }, [fetchUrl])
  
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          console.log(urlParams.get('v'));
          setTrailerUrl(urlParams.get('v'));
        })
    }
  }

  const opts = {
    height: '390',
    width: "100%",
    playerVars: {
      autoplay: 1,
    }
  }

  return (
    <div className='row'>
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            onClick={() => handleClick(movie)}
            // using ternary Operator the the row__poster style dose not apply
            // className={`${isLargeRow ? "row__posterLarge" : 'row__poster'}`}
            // using AND operator
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            key={movie.id}
            src={isLargeRow ? `${base_url}${movie?.poster_path}` : `${base_url}${movie?.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      <div style={{
        padding: '40px'
      }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row
