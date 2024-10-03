import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { BACKGROUND_IMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img
          className="h-screen w-screen"
          src={BACKGROUND_IMG}
          alt="background_image"
        ></img>
      </div>
      <div className="fixed bg-black w-full h-full p-8 bg-opacity-65 -z-10"></div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
