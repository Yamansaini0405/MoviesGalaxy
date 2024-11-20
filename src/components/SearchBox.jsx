import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

function SearchBox() {
  const name = useContext(AppContext);
  return (
    <>
      <div className="main flex justify-center px-5 lg:px-0 py-5">
        <input
          type="text"
          placeholder="search"
          className="bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black rounded-l-lg w-80"
          value={name.searchMovie}
          onChange={(e) => {
            name.setSearchMovie(e.target.value);
          }}
        />
        <button
          onClick={name.fetchMovieData}
          className="bg-[#40407a] bg-color text-white px-4 rounded-r-lg border-gray-500 border-t-2 borderr-2 border-b-2"
        >
          Search
        </button>
      </div>
      <MovieCard allMovieData={name.allMovieData} loading={name.loading} />
    </>
  );
}

export default SearchBox;
