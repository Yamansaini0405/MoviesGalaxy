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
          <NavLink to="/" className="nav-btn transition-transform transform hover:scale-125">
            <li>Home</li>
          </NavLink>
          <NavLink to="/Trending" className="nav-btn transition-transform transform hover:scale-125">
            <li>Trending</li>
          </NavLink>{" "}
          <li class="relative group">
            <NavLink className="text-white nav-btn  rounded block ">
              Category
            </NavLink>

            <ul class="absolute bg-color  py-2  w-48 flex flex-wrap rounded group-hover:block hidden">
              <li></li>
              <li>
                <NavLink
                  to="/Action"
                  className="block text-white  px-4 py-2 transition-transform transform hover:scale-110"
                >
                  Action
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Horror"
                  className="block text-white  px-4 py-2 transition-transform transform hover:scale-110"
                >
                  Horror
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Romance"
                  className="block text-white  px-4 py-2 transition-transform transform hover:scale-110"
                >
                  Romance
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/Comedy"
                  className="block text-white  px-4 py-2 transition-transform transform hover:scale-110"
                >
                  Comedy
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/Thriller"
                  className="block text-white  px-4 py-2 transition-transform transform hover:scale-110"
                >
                  Thriller Movies
                </NavLink>
              </li>
            </ul>
          </li>
          
          <NavLink to="/Upcoming" className="nav-btn transition-transform transform hover:scale-125">
            <li>Upcomings</li>
          </NavLink>
          
        </ul>
      </div>
      <div className=" hidden sm:block ">
        <button className="py-4 px-8 text-xl bg-btn text-black font-bold  bg-[#1dd1a1] rounded-3xl ">
          <NavLink to="/login">Log in</NavLink>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
