import React from 'react'
import Movie from "../Movie/Movie.jsx";
import './MovieList.css'


function MovieList(props) {
  // console.log(props)
  return (
    <>
      <div className='list-container'>
        <div className='list-row'>
          {props.movies.map((movie) => {
            return (
              <Movie
                key={movie.imdbID}
                movie={movie}
                openDetails={props.openDetails}
              />
            );
          })}
        </div>
      </div>
    </>
  )
}

export default MovieList
