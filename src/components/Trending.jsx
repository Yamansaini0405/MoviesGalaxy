import React, { useEffect, useState } from "react";

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
      <div className="flex flex-wrap px-4 lg:px-10 ml-12">
        {trending.map((moviedata) => {
          return (
            <div className="p-2 md:w-1/4 w-full mb-4 max-h-[28rem]">
              <div className="bg-[#40407a] w-4/5 h-full p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600 ">
                <img
                  className="rounded-lg w-full mb-2 h-4/5 "
                  src={`https://image.tmdb.org/t/p/w200${moviedata.poster_path}`}
                  alt=""
                />
                <h3 className="text-xl text-white font-bold">
                  {moviedata.title}
                </h3>
                <h2 className="text-lg text-white mb-2">
                  Release Date: {moviedata.release_date}
                </h2>
              </div>
            </div>
          );

          //     <li key={moviedata.id}>
          //       <div className="p-2 md:w-1/4 w-full mb-4 max-h-[28rem]">
          //       <div className="bg-[#40407a] w-4/5 h-full p-3 rounded-2xl shadow-lg hover:-translate-y-1 border-2 border-gray-600 ">
          //       <img
          //       src={`https://image.tmdb.org/t/p/w200${moviedata.poster_path}`}
          //       alt=""
          //     />
          //        console.log(trending);
          //     <h2>{moviedata.title}</h2>
          //     <p>{moviedata.overview}</p>
          //     <p>Release Date: {moviedata.release_date}</p>
          //     <p>Rating: {moviedata.vote_average}</p>
          //       </div>
          //     </div>

          //   </li>
        })}
      </div>
      )}
    </div>
    </>
  );
}

export default Trending;
