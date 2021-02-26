import axios from '../axios';
import React, { useEffect, useState } from 'react'
import "../styles/Banner.css"
import requests from '../requests';

function Banner() {

    const [movie, setMovie] = useState([]);

    function truncate(s, n){
        return s?.length > n ? s.substr(0, n - 1) + "..." : s;
    }

    useEffect(() => {
        async function fetchData(){
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ])
            return fetchData
        }
        fetchData();
    },[])

    return (
        <header className="banner" style={{
            backgroundSize:"cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.title || movie?.original_name}</h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
               </div>
               <h1 className="banner__description"> 
               {truncate(movie?.overview,130)}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>
    )
}

export default Banner
