import React, { useEffect, useState } from "react";
import {API_KEY} from '../../Constants/Constants'
import {imageUrl} from '../../Constants/Constants'
import axios from '../../Axios'
import "./Banner.css";

const Banner = () => {
  let [movie, setMovie] = useState();

  useEffect(()=>{
   // random movies when refresh ui with api 
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`);

        setMovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };

    fetchMovies();

  }, [])
  return (
    <div style={{backgroundImage:`url(${movie ? imageUrl + movie.backdrop_path : ""})`}} className="banner">
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>
        <div className="banner-buttons">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
};

export default Banner;
