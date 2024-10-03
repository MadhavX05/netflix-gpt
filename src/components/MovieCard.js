import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;
  return (
    <div className="rounded-md w-72 mr-2 overflow-hidden hover:border-4 hover:cursor-pointer">
      <img
        className="transition-transform duration-300 transform hover:scale-125 rounded-md"
        src={IMG_CDN_URL + posterPath}
        alt="MovieImg"
      ></img>
    </div>
  );
};

export default MovieCard;
