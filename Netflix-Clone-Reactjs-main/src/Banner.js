import React , {useState , useEffect} from 'react'
import axios from './axios'
import request from './request'
import "./Banner.css"

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect( () => {
       async function fetchData(){
           const reandommovie= await axios.get(request.fetchNetflixOriginals);
       //console.log(reandommovie.data.results);
            setMovie(
          reandommovie.data.results[
              Math.floor(Math.random() * reandommovie.data.results.length -1)
    
            ]
        ); 
      return reandommovie;
        }
        fetchData();
    } , []);

    console.log(movie);

    function truncate(str, n){
        return str?.length > n ? str.substr(0,n-1) + "..." : str; 
    } 

    return (
        <header className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")` ,
            backgroundPosition: "center center"
        }}
       >
            {/* background image*/}
            {/* title*/}
            {/* div > 2 buttons */}
            {/* description */}

            <div className="banner__contents">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
              <div className="banner_buttons">
                  <button className="banner__button">Play</button>
                  <button className="banner__button">My List</button>
                  
              </div>
              <h1 className="banner__description">
             { truncate(movie?.overview ,148)}    
              </h1>
           </div>
           <div className="banner__fadeBottom" />
            </header>
    )
}

export default Banner
