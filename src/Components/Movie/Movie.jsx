import placeholderr from "../../Assets/placeholderr.gif";
import './Movie.css'

const Movie = ({ movie, openDetails }) => {
  console.log(movie)
  return (
    <div>

      <div className="card">
        <div className="card-image ">
          {movie.Poster == "N/A" ? (
            <img
              // src="http://www.jennybeaumont.com/wp-content/uploads/2015/03/placeholder.gif"
              src={placeholderr}
              alt="card image"
              style={{ width: 240, height: 360 }}
            />
          ) : (
            <img
              src={movie.Poster}
              alt="card image"
              style={{ width: "100%", height: 360 }}
            />
          )}
          {/* <span class="card-title">
            <b class="grey darken-3">5 {movie.imdbRating}</b>
          </span> */}
        </div>
        <div className="card-content">
          <p> {movie.Title} </p>
          <p> {movie.Year} </p>
          <p> {movie.Type} </p>
          <p>
            <button onClick={() => openDetails(movie.imdbID)}>
              View details
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Movie
