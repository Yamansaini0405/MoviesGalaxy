import React,{useState} from "react";
import MovieCard from "./MovieCard";

function SearchBox({ searchMovie, setSearchMovie }) {
  const [allMovieData, setAllMovieData] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    console.log(searchMovie);
    try {
      setLoading(true);
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=79218d83e67c13cb59242f9f31418607&`
      );
      let data = await response.json();
      setAllMovieData(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <div className="main flex justify-center px-5 lg:px-0 py-5">
      <input
        type="text"
        placeholder="search"
        className="bg-gray-200 placeholder-gray-400 px-2 py-2 outline-none border-2 border-gray-500 text-black rounded-l-lg w-80"
        value={searchMovie}
        onChange={(e) => {
          setSearchMovie(e.target.value);
        }}
      />
      <button
        onClick={fetchMovieData}
        className="bg-[#40407a] text-white px-4 rounded-r-lg border-gray-500 border-t-2 borderr-2 border-b-2"
      >
        Search
      </button>
    </div>

    <MovieCard allMovieData={allMovieData} loading={loading} />
    </>
  );
}

export default SearchBox;
