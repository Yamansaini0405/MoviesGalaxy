import React from "react";
import { NavLink } from "react-router-dom";

// bg-[#40407a]
function Navbar() {
  return (
    <div className="main bg-color lg:flex md:flex sm:flex-wrap justify-between items-center pt-2  px-12 py-1 sticky top-0 z-10">
      <div className="left flex items-center space-x-2 justify-center">
        <img
          className="w-10 h-10"
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="icon"
        />
        <h2 className="text-white font-bold text-2xl">MoviesGalaxy</h2>
      </div>
      <div className="right flex justify-center mr-0 sm:mr-16">
        <ul className="flex justify-evenly sm:space-x-10 space-x-5  text-lg md:text-xl font-bold text-white m-4 px-4  ">
          <NavLink to="/" className="nav-btn">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Trending" className="nav-btn">
            <li>Trending</li>
          </NavLink>{" "}
          <li class="relative group">
            <NavLink className="text-white nav-btn  rounded block">
              Category
            </NavLink>

            <ul class="absolute bg-color  py-2  w-48 flex flex-wrap rounded group-hover:block hidden">
              <li>
              <NavLink
                  to="/Upcoming"
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                >
                  Upcoming
                </NavLink>
                
              </li>
              <li>
              <NavLink
                  to="/Action"
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                >
                  Action
                </NavLink>
                
              </li>
              <li>
                <NavLink
                  to="/Horror"
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                >
                  Horror
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/Romance"
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                >
                  Romance
                </NavLink>
              </li>
              <li>
                <a
                  href="#"
                  class="block text-white hover:bg-gray-700 px-4 py-2"
                >
                  Sub-Option 1
                </a>
              </li>
            </ul>
          </li>
          <NavLink className="nav-btn">
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className=" hidden sm:block ">
        <button className="p-3 bg-btn text-black font-bold font-serif bg-[#1dd1a1] rounded-3xl ">
          Bollywood
        </button>
      </div>
    </div>
  );
}

export default Navbar;
