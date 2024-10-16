import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    // Make an API call to GPT API and get Movie Results

    // console.log(searchText.current.value);
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example results given ahead. Example Results: Simba, Don, Avengers, Iron man, Mai Hui Na";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults) {
      // TODO: Error handling
    }

    const gptMovie = gptResults.choices?.[0]?.message?.content.split[","];

    //for each movie I will search TMDB API
    const promiseArray = gptMovie.map((movie) => searchMovieTMDB(movie));
    const TMDBResults = await Promise.all(promiseArray);

    //Normal Search By TMDB API
    // const promiseArray = searchMovieTMDB(searchText.current.value);
    // const TMDBResults = await Promise.resolve(promiseArray);

    // console.log(TMDBResults);
    dispatch(
      addGptMovieResult({
        movieNames: gptMovie,
        movieResults: TMDBResults,
      })
    );
  };

  const handleNormalSearchClick = async () => {
    const gptMovie = searchText.current.value;

    const promiseArray = searchMovieTMDB(searchText.current.value);
    const TMDBResults = await Promise.resolve(promiseArray);

    dispatch(
      addGptMovieResult({
        movieNames: gptMovie,
        movieResults: TMDBResults,
      })
    );
  };

  return (
    <>
      <div className="pt-[15%] flex justify-center">
        <form
          className="grid grid-cols-12 w-[55%] bg-transparent"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            name="gptSearch"
            placeholder={lang[langKey].gptSearchPlaceholder}
            className="px-8 my-2 col-span-10 rounded-l-full bg-[#111212] bg-opacity-80 placeholder-slate-300 border-y border-l border-slate-300 text-white"
          />
          <button
            className="rounded-r-full border border-[#e50914] col-span-2 my-2 py-4  px-4 bg-[#e50914] font-semibold text-white text-xl"
            onClick={handleNormalSearchClick}
          >
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            {lang[langKey].search}
          </button>
        </form>
      </div>
      <div className="flex justify-center w-[55%] mx-auto">
        <p className="p-2 text-red-600 font-semibold items-center">
          Access to the ChatGPT features requires admin approval due to paid
          usage. While awaiting permission, feel free to explore the free search
          feature.
        </p>
      </div>
    </>
  );
};

export default GptSearchBar;
