import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="text-black">
      <div>
        <img
          className="banner w-full bg-cover "
          src="https://wallpaperaccess.com/full/2703652.png"
        />
        <div>
          <h1>Movie Name</h1>
          <div>
            <button>Play</button>
            <button>My list</button>
          </div>
          <h1></h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
