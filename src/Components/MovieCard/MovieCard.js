import React from 'react'
import Rate from "../Rate"
import data from "../data"
import "./MovieCard.css"
import { Link } from 'react-router-dom';


const movie = ({movie})=>{
    return(
      <Link to={`/Trailer/${movie.name}`}>
    <div className="container">
    <div className="movie">
      <div className="movie-rating">
        <Rate rating={movie.rating} />
      </div>
      <div className="movie-img">
        <img src={movie.image} alt="movie poster" />
      </div>
      <div className="text-movie-cont">
        <div className="mr-grid">
          <div className="col1">
            <h2>{movie.name}</h2>
            <ul className="movie-gen">
              <p>{movie.date}</p>
                            
            </ul>
            
          </div>
        </div>
        <div className="mr-grid summary-row">
          <h5>SUMMARY</h5>
          <p>{movie.description}</p>
        </div>
        <div className="mr-grid action-row">
          <div className="col2">
          </div>
            <div className="col3">
              <h3>WATCH TRAILER</h3>
             
            </div>
          
        </div>
      </div>
    </div>
  </div>
  </Link>
);
};

export default movie;