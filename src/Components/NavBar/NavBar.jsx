import React from "react";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-2 fixed  w-full h-14 bg-black text-white">
      <div className="flex items-center">
        <a href="">
          <img
            className="w-20 mr-3.5"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            alt="Netflix image"
          />
        </a>
        <ul className="flex gap-x-4">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Tv Shows</a>
          </li>
          <li>
            <a href="">Movies</a>
          </li>
          <li>
            <a href="">Recently Added</a>
          </li>
          <li>
            <a href="">My List</a>
          </li>
        </ul>
      </div>
      <div>
        <img
          className="w-10 "
          src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
          alt="Avatar image"
        />
      </div>
    </div>
  );
};

export default NavBar;
