import React from "react";

function Navbar() {
  return (
    <div className="main lg:flex md:flex sm:flex-wrap justify-between items-center py-1 bg-[#40407a] px-4 sticky top-0 z-10">
      <div className="left flex items-center space-x-2 justify-center">
        <img
          className="w-10 h-10"
          src="https://movie-app-88kamal.vercel.app/clipart3105859.png"
          alt="icon"
        />
        <h2 className="text-white font-bold text-2xl">MoviesGalaxy</h2>
      </div>
      <div className="right flex justify-center">
        <ul className="flex justify-evenly space-x-5 text-white m-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Services</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
