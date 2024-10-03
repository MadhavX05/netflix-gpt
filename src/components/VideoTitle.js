import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo, faPlay } from "@fortawesome/free-solid-svg-icons";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen overflow-hidden aspect-video pt-[18%] px-12 absolute text-white bg-gradient-to-r from-slate-950 ">
      <h1 className="text-7xl mb-3 font-extrabold">{title}</h1>
      <p className="py-6 text-base font-medium opacity-85 w-2/5">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-8 text-xl rounded-sm hover:bg-opacity-80">
          <FontAwesomeIcon icon={faPlay} /> &nbsp;
          <p className="inline">Play</p>
        </button>
        <button className="bg-gray-500 text-white mx-2 py-2 px-7 text-xl bg-opacity-50 rounded-sm">
          <FontAwesomeIcon icon={faCircleInfo} /> &nbsp; More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
