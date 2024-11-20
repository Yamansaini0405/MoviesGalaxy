import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/MovieContext';
import { MdOutlineDoubleArrow } from "react-icons/md";
import MovieCard from './MovieCard';


function Action() {
    const [bollywood, setBollywood] = useState([]);

  const info = useContext(AppContext);
  const fetchMovie = async () => {
    info.setAllMovieData([]);
    info.setLoading(true);
    let res = await fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=79218d83e67c13cb59242f9f31418607&language=hi-IN&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`
    );
    let data = await res.json();
    console.log(data.results);
    setBollywood(data.results);
    info.setLoading(false);
    info.setSearchMovie("")
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
          
          <div className="flex flex-wrap  lg:px-4 ">
           <MdOutlineDoubleArrow className="md:text-4xl text-2xl text-white md:ml-[100px] ml-[60px] mt-8 font-bold text-[#00FFFF]"/>
           <h3 className="text-white text-2xl md:text-4xl mt-7 ml-2 font-bold text-[#00FFFF]">Action Movies</h3>
            <MovieCard allMovieData={bollywood} loading={info.loading} />
          </div>
        )}
      </div>
    </>

  )
}

export default Action