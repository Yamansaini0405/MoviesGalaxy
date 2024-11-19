import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Trending() {
  const [trending, setTrending] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMovie = async () => {
    setLoading(true);
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=79218d83e67c13cb59242f9f31418607&`
    );
    let data = await res.json();
    console.log(data.results);
    setTrending(data.results);
    setLoading(false);
  };

  useEffect(() => {
    fetchMovie();
  }, []);
  return (
    <>
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
        <MovieCard allMovieData={trending} loading={loading}/>
            )}
    </div>
    </>
  );
}

export default Trending;
