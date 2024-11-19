import Navbar from "./components/Navbar";
import MovieCard from "./components/MovieCard";
import SearchBox from "./components/SearchBox";
import "./App.css";
import { useState } from "react";


function App() {
  // const [allMovieData, setAllMovieData] = useState();
  let [searchMovie, setSearchMovie] = useState("");
  // const [loading, setLoading] = useState(false);

  // const fetchMovieData = async () => {
  //   console.log(searchMovie);
  //   try {
  //     setLoading(true);
  //     let response = await fetch(
  //       `https://omdbapi.com/?s=${searchMovie}&apikey=188b84a9`
  //     );
  //     let data = await response.json();
  //     setAllMovieData(data.Search);
  //     setLoading(false);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <div>
      <Navbar />
      <div className="bg">
        <SearchBox
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
        {/* <MovieCard allMovieData={allMovieData} loading={loading} /> */}
      </div>
    
    </div>
  );
}

export default App;
