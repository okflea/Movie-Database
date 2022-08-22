import { useState } from 'react'
import axios from "axios";
// import reactLogo from './assets/react.svg'
// import logo from './Assets/logo.png'
import logo from '../Assets/logo.png'
import MovieList from "./MovieList/MovieList.jsx";
import MovieDetails from "./MovieDetails/MovieDetails.jsx";
import './App.css'

function App() {

  //test fetch
  const [state, setState] = useState({
    searchQuery: "",
    movies: [],
    selected: null,
    // apiKey: process.env.REACT_APP_API_KEY,
  });
  // console.log(state.selected);
  //291b6eeb
  // const apiurl = `https://www.omdbapi.com/?apikey=${state.apiKey}`;
  const apiurl = `https://www.omdbapi.com/?apikey=291b6eeb`;

  const handleSubmit = (e) => {
    e.preventDefault();

    closeDetails();
    axios(apiurl + "&s=" + state.searchQuery).then(({ data }) => {
      let results = data.Search;
      //console.log(data);
      setState((prevState) => {
        return { ...prevState, movies: results };
      });
    });
    // document.querySelector("#search").value="";
  };

  const handleInput = (e) => {
    let newSearchQuery = e.target.value;

    setState((prevState) => {
      return { ...prevState, searchQuery: newSearchQuery };
    });

    //console.log(state.searchQuery);
  };


  const openDetails = (id) => {
    axios(apiurl + "&i=" + id).then(({ data }) => {
      let result = data;

      setState((prevState) => {
        return { ...prevState, selected: result };
      });
    });
  };
  // console.log(state.movies);

  const closeDetails = () => {
    setState((prevState) => {
      return { ...prevState, selected: null };
    });
  };

  // const [data, setData] = useState();


  return (
    <>
      <div className="App">
        <div>
          <a href="http://www.omdbapi.com/" target="_blank">
            <img src={logo} className="logo react" alt="tv logo" />
          </a>
        </div>
        <h1 className='text-flicker-in-glow'>Movie Database</h1>
        <div className="search-card">

          <form action="" onSubmit={handleSubmit}>
            <div className="input-field ">
              <input
                autoFocus
                className="search"
                placeholder="Enter Title and hit Return*"
                type="text"
                onChange={handleInput}
              />
            </div>
          </form>
        </div>
      </div>
      {/* insert here  */}
      {/* <MovieList movies={state.movies} openDetails={openDetails}/> */}

      {state.selected == null ? (
        <div>
          <MovieList movies={state.movies} openDetails={openDetails} />
        </div>
      ) : (
        <MovieDetails selected={state.selected} closeDetails={closeDetails} />
      )}
      <p className='footer'>
        This page was made with React , OMDB api and Vite!
      </p>
    </>
  )
}




export default App
