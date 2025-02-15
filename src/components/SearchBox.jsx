import React from "react";
import { useContext } from "react";
import { AppContext } from "../context/MovieContext";
import MovieCard from "./MovieCard";

function SearchBox() {
  const name = useContext(AppContext);
  const handleKeyPress = (event) => {
    console.log(name.searchMovie);
    if (event.key === "Enter") {
      if (event.target.value !== "") {
        name.setSearchMovie(event.target.value);
        name.fetchMovieData();
      }
    }
  };
  return (
    <>
      <div>
        {name.loading ? (
          <div className="flex justify-center ">
            <img
              className=" w-16 py-20"
              src="https://i.gifer.com/ZZ5H.gif"
              alt=""
            />
            {setTimeout(() => {
              name.setLoading(false);
            }, 1000)}
          </div>
        ) : (
          <>
            <div className="main flex justify-center px-5 lg:px-0 py-5">
              <input
                required
                type="text"
                placeholder="search"
                className="bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black rounded-l-lg w-80"
                value={name.searchMovie}
                onKeyDown={handleKeyPress}
                onChange={(e) => {
                  if (e.target.value !== "") {
                    name.setSearchMovie(e.target.value);
                  }
                }}
              />
              <button
                onClick={name.fetchMovieData}
                className="bg-[#40407a] bg-color text-white px-4 rounded-r-lg border-gray-500 border-t-2 borderr-2 border-b-2"
              >
                Search
              </button>
            </div>
            <MovieCard
              allMovieData={name.allMovieData}
              loading={name.loading}
            />
          </>
        )}
      </div>
    </>
  );
}

export default SearchBox;
