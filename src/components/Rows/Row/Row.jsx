import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const base_url = "https://image.tmdb.org/t/p/original";

function Row({
  title,
  fetchUrl,
  isLargeRow,
  trailerUrl,
  activeRow,
  rowId,
  onSetTrailer,
}) {
  const [movies, setMovies] = useState([]);
  const [movieTrailerUrl, setMovieTrailerUrl] = useState(""); // Local state for this row's movie trailer

  useEffect(() => {
    async function fetchData() {
      try {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        console.log(request.data.results);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    }
    fetchData();
  }, [fetchUrl]);
  const handleClick = (movie) => {
    // If a trailer is already playing and clicked again, close it
    if (
      movieTrailerUrl &&
      trailerUrl === movieTrailerUrl &&
      activeRow === rowId
    ) {
      onSetTrailer("", rowId); // Close trailer
    } else {
      // Fetch new trailer URL for the clicked movie
      movieTrailer(movie?.title || movie?.name || movie?.original_name || "")
        .then((url) => {
          if (url) {
            const urlParams = new URLSearchParams(new URL(url).search);
            const trailer = urlParams.get("v");
            setMovieTrailerUrl(trailer);
            onSetTrailer(trailer, rowId); // Pass this trailer's URL and rowId to parent
          } else {
            console.error("No trailer found for this movie");
          }
        })
        .catch((error) => console.log("Trailer fetching error:", error));
    }
  };

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  //
  return (
    <div className="row">
      <h3>{title}</h3>
      <div className="row__posters">
        {movies.map((movie) => {
          const imageSrc = isLargeRow ? movie.poster_path : movie.backdrop_path;
          return imageSrc ? (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              src={`${base_url}${imageSrc}`}
              alt={movie?.title || movie?.name || movie?.original_name}
            />
          ) : null;
        })}
      </div>
      <div style={{ padding: "20px" }}>
        {/* Only show trailer if this row is active */}
        {activeRow === rowId && trailerUrl && (
          <YouTube videoId={trailerUrl} opts={opts} />
        )}
      </div>
    </div>
  );
}

export default Row;
