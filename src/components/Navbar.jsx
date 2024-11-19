import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  return (
    <div className="main lg:flex md:flex sm:flex-wrap justify-between items-center pt-2 bg-[#40407a] px-4 py-1 sticky top-0 z-10">
      <div className="left flex items-center space-x-2 justify-center">
        <img
          className="w-10 h-10"
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="icon"
        />
        <h2 className="text-white font-bold text-2xl">MoviesGalaxy</h2>
      </div>
      <div className="right flex justify-center ">
        <ul className="flex justify-evenly sm:space-x-10 space-x-5  text-lg text-white m-4 px-4 ">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Trending">
            <li>Trending</li>
          </NavLink>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
      <div className=" hidden sm:block ">
        <button className="p-3 text-black font-bold font-serif bg-[#00FFFF] rounded-3xl ">
          Bollywood
        </button>
      </div>
    </div>
  );
}

export default Navbar;
