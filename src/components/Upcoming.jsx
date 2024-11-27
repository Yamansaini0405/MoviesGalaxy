import React from 'react'
import { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/MovieContext';
import { MdOutlineDoubleArrow } from "react-icons/md";
import MovieCard from './MovieCard';


function Upcoming() {
    const [upcoming, setUpcoming] = useState([]);

  const info = useContext(AppContext);
  useEffect(() => {
    // Function to fetch and sort data
    const fetchData = async () => {
      info.setLoading(true);
      try {
        let allmovies = []
        let currPage = 1;
        const startDate = new Date("2024-11-30");
    const endDate = new Date("2024-12-30");
        while(currPage <= 8){
            const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${currPage}&api_key=79218d83e67c13cb59242f9f31418607`); // Replace with your API URL
        const result = await response.json();
        allmovies = [...allmovies, ...result.results];
        currPage++;

        }
        const uniqueMovies = allmovies.filter(
          (movie, index, self) =>
            index === self.findIndex((m) => m.id === movie.id) // Check for the first occurrence of each movie ID
        );
        
      const filteredMovies = uniqueMovies.filter(movie=>{
        const movieDate = new Date(movie.release_date);
        return movieDate >= startDate && movieDate <= endDate;
      })
        
        const sortedData = filteredMovies.sort((a, b) => {
          return  new Date(b.release_date) - new Date(a.release_date);
        });

        setUpcoming(sortedData);
        info.setLoading(false); // Update the state with sorted data
      } catch (error) {
        console.error("Error fetching data:", error);
      } 
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once when the component mounts

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
           <h3 className="text-white text-2xl md:text-4xl mt-7 ml-2 font-bold text-[#00FFFF]">Upcoming Movies</h3>
            <MovieCard allMovieData={upcoming} loading={info.loading} />
          </div>
        )}
      </div>
    </>

  )
}

export default Upcoming;
