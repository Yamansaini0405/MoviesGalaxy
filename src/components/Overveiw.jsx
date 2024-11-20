import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaShare, FaComments } from "react-icons/fa";
import YouTube from "react-youtube";

function Overveiw() {
  const opts = {
    height: "600", // Custom height in pixels
    width: "100%", // Custom width in pixels
    playerVars: {
      autoplay: 1, // Enable autoplay
    },
  };

  let [video, setVideo] = useState("");
  const location = useLocation();
  const { id, title, date, rating, disc } = location.state || {};
  const getMovieVideo = async () => {
    let res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=79218d83e67c13cb59242f9f31418607`
    );
    let data = await res.json();
    let arr = data.results;
    let newarr = arr.filter((item) => item.type === "Trailer");
    console.log(newarr);
    let trailer = newarr[0].key;
    console.log(disc);
    setVideo(trailer);
  };
  useEffect(() => {
    getMovieVideo();
  }, []);

  return (
    <div className=" bg-color text-white w-[80%] m-auto pb-8">
      <div className="relative w-full max-w-5xl mx-auto py-4 px-4 md:px-0">
        <div className="relative w-full pt-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${video}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* <div className="  h-[86vh] w-[100%] mt-4 m-auto">
        {video == ""? <h1>Sorry</h1>:<YouTube videoId={video} opts={opts} />}
      </div> */}
      <div className="  h-[3rem] w-[100%] md:w-[90%] m-0 m-auto text-xl font-bold flex justify-center items-center justify-between px-8">
        <p className=" text-xl md:text-2xl font-bold">Rating : {rating}</p>
        <div className="icons flex justify-center items-center justify-around md:gap-4 gap-2">
          <AiFillLike className="text-xl md:text-3xl   hover:text-red-600" />
          <FaShare className="text-xl md:text-3xl hover:text-blue-600" />
          <FaComments className="text-xl md:text-3xl hover:text-green-600" />
        </div>
      </div>
      <div className=" h-[4rem] w-[100%] md:w-[90%] m-0 m-auto flex px-8 items-center">
        <p className=" text-lg md:text-2xl from-neutral200">
          Trailer: <span className="font-bold">{title}, </span>
          <span>released on: {date}</span>
        </p>
      </div>
      <div className=" px-8 md:px-16 mt-4 min-h-[100px] max-h-[400px] overflow-y-auto w-full max-w-6xl mx-auto ">
        <h3 className="text-lg md:text-2xl font-bold ">Overveiw</h3>
        <p class="text-lg text-white  mt-2 mb-8">
          <span>{disc}</span>
        </p>
      </div>
    </div>
  );
}

export default Overveiw;