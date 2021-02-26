import React from 'react'
import requests from '../requests'
import "../styles/HomeScreen.css"
import Banner from '../componets/Banner'
import Nav from '../componets/Nav'
import Row from '../componets/Row'

function HomeScreen() {
    return (
        <div className="homeScreen">
           
            <Nav/>
            <Banner/>
            <Row  title="Trending" islarge fetchUrl={requests.fetchTrending} />
            <Row  title="Top Rated"  fetchUrl={requests.fetchTopRated} />
            <Row title="Netflix Orginals"  fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row  title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row  title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row  title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            
        </div>
    )
}

export default HomeScreen


