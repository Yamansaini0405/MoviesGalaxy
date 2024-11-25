import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/MovieContext";
import Overveiw from "./Overveiw";

function MovieCard({ allMovieData = [], loading }) {
  const data = useContext(AppContext);
  return (
    <div>
      {loading ? (
        <div className="flex justify-center ">
          <img
            className=" w-16 py-20"
            src="https://i.gifer.com/ZZ5H.gif"
            alt=""
          />
        </div>
      ) : (
        <div className="flex flex-wrap px-4 lg:px-10 ml-12 mt-4">
          {allMovieData.map((movie, idx) => {
            
            return (
              <div
                className="p-2 md:w-1/4 w-full mb-4 max-h-[30rem]  "
                key={idx}
              >
                <div className="bg-[#40407a] bg-color w-4/5 h-full p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600">
                  <img
                    className="rounded-lg w-full mb-2 h-4/5 "
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt=""
                  />

                  <h3 className="text-lg text-white font-bold">
                    {movie.title}
                  </h3>
                  

                  <div className="flex justify-between">
                  <h2 className="text-lg text-white mb-2">
                    Year : {movie.release_date}
                    
                  </h2>
                  <NavLink
                    to="/Overveiw"
                    state={{
                      id: `${movie.id}`,
                      title: `${movie.title}`,
                      date: `${movie.release_date}`,
                      rating: `${movie.vote_average}`,

                      "disc": `${movie.overview}`,
                    }}
                    
                  >
                    
                    <button className=" bg-btn text-white border-2 border-white p-1 rounded-2xl font-semibold "> More</button>
                  </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MovieCard;