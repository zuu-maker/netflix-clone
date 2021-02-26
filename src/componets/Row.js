import React, { useEffect, useState } from 'react'
import axios  from "../axios";
import "../styles/Row.css"

function Row({ title, fetchUrl, islarge }) {

    const [movies, setMovies] = useState();

    useEffect(() => {
        async function fetchData(){
              const results = await axios.get(fetchUrl)
              setMovies(results.data.results)
              
              return fetchData
        }

        fetchData();
    })
  
    const baseUrl = "https://image.tmdb.org/t/p/original/"

    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__movies">
            {movies?.map(movie => (
            <div className="row__movie">
                    <img
                    className={islarge ? "row__movieIslarge" : "row__movieImage"  }
                    src={islarge ? baseUrl + movie?.poster_path : baseUrl + movie?.backdrop_path}
                    alt={movie.name}
                    />
                   <p>{movie?.title || movie?.name || movie.orginal_name}</p>
            </div>
            ))}
            </div>

        </div>
    )
}

export default Row
