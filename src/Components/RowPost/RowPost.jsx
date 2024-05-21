import React, { useEffect, useState } from "react";
import axios from "../../Axios";
import { imageUrl } from "../../Constants/Constants"
import Youtube from 'react-youtube'
import "./RowPost.css";

const RowPost = (props) => {
  let [movies, setMovies] = useState([]);
//   let [urlId, setUrlId] = useState("")

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response);
        setMovies(response.data.results);
      })
      .catch((err) => {
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

  const handleMovie = (id)=>{}

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
      <Youtube videoId="2g811Eo7K8U" opts={opts}/>
    </div>
  );
};

export default RowPost;
