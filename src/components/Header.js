import { signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLanguage, faSearch } from "@fortawesome/free-solid-svg-icons";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/languageConstants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const Navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearchPage = useSelector((store) => store.gpt.showGptSearchPage);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        Navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        Navigate("/browse");
      } else {
        dispatch(removeUser());
        Navigate("/");
      }
    });
    //Unsubscribe when component unmount
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute bg-gradient-to-b from-black w-screen z-10 ">
      <div className="ml-20 px-8 py-7 flex justify-between items-center">
        <img className="w-40" src={LOGO} alt="logo"></img>
        {user && (
          <div className="flex">
            {showGptSearchPage && (
              <select
                onChange={handleLanguageChange}
                className="mr-4 px-2  -mt-1 bg-black bg-opacity-50 text-white border border-slate-500 rounded-md"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.idntifier} value={lang.idntifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="bg-gradient-to-r from-[#e50914] to-pink-900 font-semibold -mt-1 py-2 px-4 text-white mr-6 rounded-full"
              onClick={handleGptSearchClick}
            >
              {showGptSearchPage ? (
                "Home"
              ) : (
                <>
                  <FontAwesomeIcon icon={faSearch} className="pr-2" />
                  <p className="inline">GPT Search</p>
                </>
              )}
            </button>
            <img
              className="w-10 h-10 -mt-1 rounded-sm"
              src={user?.photoURL}
              alt="usericon"
            ></img>
            <button
              onClick={handleSignOut}
              className="text-white -mt-1 font-bold"
            >
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
