import React from 'react';
import './App.css';
import Row from './Row'
import request from './request'
import Banner from './Banner'
import Navbar from './Navbar'
function App() {
  return (
    <div className="App">
    <Navbar />
    <Banner />
    
     <Row
     isLargeRow
     title="Netfilx Original" fetchUrl={request.fetchNetflixOriginals} />
     <Row title="Trending Now" fetchUrl={request.fetchTrending} />
     <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
     <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
     <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
     <Row title="Horrors Movies" fetchUrl={request.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
     <Row title="Docimantry Movies" fetchUrl={request.fetchDocumentariesMovies} />

     
    </div>
  );
}

export default App;
