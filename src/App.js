
import React, { useState } from "react"
import './App.css';
import MovieCard from './Components/MovieCard/MovieCard'
import { data } from './Components/data'
import MovieList from './Components/MovieList'
import AddMovie from './Components/addMovie/AddMovie'
import Search from './Components/Search/Search'
import Trailer from './Components/Trailer/Trailer'
import { BrowserRouter as Router, Route } from 'react-router-dom'



function App() {
  const [movies, setMovies] = useState(data)
  const [searchInput, setSearchInput] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const addMovie = (x) => setMovies([...movies, x]);

  return (
    <>
      <Router>
        <Route exact path='/'>

          <Search
            setSearchInput={setSearchInput}
            setSearchRate={setSearchRate}
            searchRate={searchRate} />
          <MovieList
            movies={movies.filter(
              (el) =>
                el.rating >= searchRate && el.name.toUpperCase().includes(searchInput.toUpperCase().trim())
            )} />
        </Route>
        <div>
          <trailer>
            <Route path="/Trailer/:title" render={(props) => <Trailer movies={movies}  {...props} />} />
          </trailer>
        </div>
      </Router>

      <AddMovie />

    </>
  )
}

export default App;
