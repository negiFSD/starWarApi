import React, {useState} from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {

   const [movie, setMovie]= useState([])

 const fetchMoviesHandler = ()=>{
  fetch('https://swapi.dev/api/films/').then
  ((response)=>{
    return response.json()
  }).then((data)=>{
    const tranformedMovies = data.results.map((movieData)=>{
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date
      }
    })
    setMovie(tranformedMovies)
  })
}
console.log(movie);

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movie}  />
      </section>
    </>
  );
  
}

export default App;
