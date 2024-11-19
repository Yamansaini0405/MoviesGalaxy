import React from "react";

function MovieCard({ allMovieData = [], loading }) {
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
        <>
        
        <div className="flex flex-wrap px-4 lg:px-10 ml-12">
          
          {allMovieData.map((movie, idx) => {
            // const { Poster, Title, Year } = movie;
            return (
              <div key={idx} className="p-2 md:w-1/4 w-full mb-4 max-h-[28rem]">
                <div className="bg-[#40407a] w-4/5 h-full p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600 ">
                  <img
                    className="rounded-lg w-full mb-2 h-4/5 "
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt=""
                  />
                  <h3 className="text-xl text-white font-bold">{movie.title}</h3>
                  <h2 className="text-lg text-white mb-2">Year : {movie.release_date}</h2>
                </div>
              </div>
            );
          })}
        </div>
        </>
      )}
    </div>
  );
}

export default MovieCard;
