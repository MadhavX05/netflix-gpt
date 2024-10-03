import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { gptMovies, movieNames } = useSelector((store) => store.gpt);
  if (!movieNames) return null;

  return (
    <div className="m-9 mt-16 px-5 py-4 pb-8 bg-black text-white bg-opacity-70 rounded-md">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieNames}
            title={movieNames}
            movies={gptMovies[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
