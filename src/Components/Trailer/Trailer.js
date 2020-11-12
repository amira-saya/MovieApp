import React from 'react'
import {Link} from 'react-router-dom'


function Trailer(props) {
    
    let movie= props.movies.find(el=>el.name==props.match.params.title)
    console.log(movie)
    return (
        <div >
            <div>
                <Link to='/' >
                    <div>🢀</div>
                    
                </Link>
                        <img  src={movie.image} alt="movie-image"></img>
                        <div >
                            <h3 > {movie.name} </h3>
                            <hr/>
                            <p>{movie.description}</p>
                            
                           
                        </div>
                        
                        <h2>Watch Trailer</h2>
                        <iframe 
                                src={movie.trailer} >
                        </iframe>
            </div>
        </div>
    )
}

export default Trailer;