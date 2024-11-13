import React from 'react'
import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'
import SearchBox from './components/SearchBox'
import MovieCard from './components/MovieCard'



function Layout() {
    const [allMovieData, setAllMovieData] = useState();
let [searchMovie, setSearchMovie] = useState();
const [loading, setLoading] = useState(false);

const fetchMovieData = async () => {
  console.log(searchMovie);
  try {
    setLoading(true);
    let response = await fetch(
      `https://omdbapi.com/?s=${searchMovie}&apikey=188b84a9`
    );
    let data = await response.json();
    setAllMovieData(data.Search);
    setLoading(false);
  } catch (error) {
    console.log(error);
  }
};
  return (
    <>
    <div className="bg">
    <Navbar/>
    <SearchBox
          searchMovie={searchMovie}
          setSearchMovie={setSearchMovie}
          fetchMovieData={fetchMovieData}
        />
    <Outlet/>
    <MovieCard allMovieData={allMovieData} loading={loading} />
    </div>
    </>
  )
}

export default Layout