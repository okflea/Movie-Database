import placeholderr from "../../Assets/placeholderr.gif";
import React from "react";
import "./MovieDetails.css"

const MovieDetails = ({ selected, closeDetails }) => {
  // console.log(selected)
  return (
    <div className="container">
      <div className="row">
        <div className="image-container">
          {selected.Poster == "N/A" ? (
            <img
              src={placeholderr}
              alt="card image"
              style={{ width: 240, height: 360 }}
            />
          ) : (
            <img
              src={selected.Poster}
              alt="card image"
              style={{ width: 240, height: 360 }}
            />
          )}
        </div>

        <div >
          <div className="info-container">
            <h2> {selected.Title} </h2>
            <p> {selected.Plot} </p>

            <p>
              <b>Release year:</b> {selected.Year}
            </p>

            <p>
              <b>Language:</b> {selected.Language}
            </p>

            <p>
              <b>Genre:</b> {selected.Genre}
            </p>

            <p>
              <b>Director:</b> {selected.Director}
            </p>

            <p>
              <b>Actors:</b> {selected.Actors}
            </p>

            <p>
              <b>Awards:</b> {selected.Awards}
            </p>

            <p>
              <b>Runtime:</b> {selected.Runtime}
            </p>

            <h4>imdb Rating : {selected.imdbRating} out of {selected.imdbVotes} votes</h4>
          </div>
        </div>
      </div>

      <div>
        <button onClick={closeDetails}> Go back </button>
      </div>
    </div>
  );
};

export default MovieDetails;
