import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import { imageUrl, API_KEY } from "../../Constants/Constants"
import Youtube from 'react-youtube'
import "./RowPost.css";

const RowPost = (props) => {
  let [movies, setMovies] = useState([]);
  let [urlId, setUrlId] = useState("")

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        alert("Network Error");
      });
  }, []);

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id)=>{
    console.log(id,"iddddddddd")
    axios.get(`/movie/${id}/videos?language=en-US&api_key=${API_KEY}`).then((response)=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("array empty")
      }
    })
  }

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((item) => (
          <img
          onClick={()=>handleMovie(item.id)}
            className={props.isSmall ? "small-poster" : "big-poster"}
            src={`${imageUrl + item.backdrop_path}`}
            alt="poster"
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts}/>} 
    </div>
  );
};

export default RowPost;
