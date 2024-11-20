import React from "react";
import { useState } from "react";

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [allMovieData, setAllMovieData] = useState([]);   
  let [searchMovie, setSearchMovie] = useState();
  const [loading, setLoading] = useState(false);

  const fetchMovieData = async () => {
    console.log(searchMovie);
    try {
      setLoading(true);
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${searchMovie}&api_key=79218d83e67c13cb59242f9f31418607`
      );
      let data = await response.json();
      setAllMovieData(data.results);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  //

  return (
    <AppContext.Provider
      value={{
        allMovieData,
        setAllMovieData,
        searchMovie,
        setSearchMovie,
        fetchMovieData,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
