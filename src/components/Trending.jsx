import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/MovieContext";
import MovieCard from "./Moviecard";

function Trending() {
  const [trending, setTrending] = useState([]);

  const info = useContext(AppContext);
  const fetchMovie = async () => {
    info.setAllMovieData([]);
    info.setLoading(true);
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=79218d83e67c13cb59242f9f31418607&`
    );
    let data = await res.json();
    console.log(data.results);
    setTrending(data.results);
    info.setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
      <div>
        {info.loading ? (
          <div className="flex justify-center ">
            <img
              className=" w-16 py-20"
              src="https://i.gifer.com/ZZ5H.gif"
              alt=""
            />
          </div>
        ) : (
          <div className="flex flex-wrap px-4 lg:px-10 ml-12">
            <MovieCard allMovieData={trending} loading={info.loading} />
          </div>
        )}
      </div>
    </>
  );
}

export default Trending;
