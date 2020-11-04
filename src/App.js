
import React, { useState } from "react"
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard'
import { data } from './Components/data'
import MovieList from './Components/MovieList'
import AddMovie from './Components/addMovie/AddMovie'
import Search from './Components/Search/Search'

function App() {
  const [movies, setMovies] = useState(data)
  const [searchInput, setSearchInput] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const addMovie = (x) => setMovies([...movies, x]);

  return (
    <>
    <Search
    setSearchInput={setSearchInput}
    setSearchRate={setSearchRate}
    searchRate={searchRate}/>
      <MovieList
        movies={movies.filter(
          (el)=>
          el.rating >=searchRate && el.name.toUpperCase().includes(searchInput.toUpperCase().trim())
        )} />
     
      <AddMovie />
    </>
  )
}

export default App;
