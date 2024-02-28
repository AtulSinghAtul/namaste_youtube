import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/slices/appSlice";
import { useEffect, useState } from "react";
import {
  GOOGLE_API_KEY,
  YOUTUBE_SEARCH_VIDEO_API,
  YOUTUBE_SUGGESTION_API,
} from "../utils/constants";
import { cacheSearchSuggestions } from "../utils/slices/cacheSearchSlice";
import { addSearchText } from "../utils/slices/searchTextSlice";
import { Link } from "react-router-dom";

function Head() {
  const dispatch = useDispatch();
  const cacheSearch = useSelector((store) => store.cache);
  // console.log(cacheSearch);

  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchResults, setSearchResults] = useState();

  useEffect(() => {
    //API Call

    // Make an api call after ever key press
    // but if the difference between 2API calss is <200ms
    // Decline the API call

    //! Debouncing
    const timer = setTimeout(() => {
      //! Caching
      if (cacheSearch[searchQuery]) {
        console.log(cacheSearch[searchQuery]);
        setSearchResults(cacheSearch[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /* Debouncing
  * keypres - i
  - dependency array render the component
  - useEffect() call
  - start timer => make an API call after 200ms

  * keypress - ip
  - destroy or unmount the component(useEffect return method)
  - dependency array re-render the component
  - useEffect() call
  - start timer => make an API call after 200ms

  * after setTimeout(200ms) = make an api call
  */

  async function getSearchSuggestions() {
    // console.log("API Call- " + searchQuery);
    const data = await fetch(YOUTUBE_SUGGESTION_API + searchQuery);
    const json = await data.json();
    setSearchResults(json[1]);
    // console.log(json[1]);
    //! Handle Caching
    dispatch(cacheSearchSuggestions({ [searchQuery]: json[1] }));
    // console.log(json);
  }

  function toggleMenuBarHandler() {
    dispatch(toggleMenu());
  }

  async function handleSearchList(event) {
    event?.preventDefault();
    event?.stopPropagation();

    console.log("clicked...");

    const searchText = event?.target?.innerText;

    console.log(event?.target?.innerText);

    const data = await fetch(
      YOUTUBE_SEARCH_VIDEO_API + searchText + "&key=" + GOOGLE_API_KEY
    );

    const json = await data.json();

    console.log(json);

    dispatch(addSearchText(json));

    console.log("after clicked " + event?.target?.innerText);
  }
  useEffect(() => {
    handleSearchList();
  }, []);

  return (
    <>
      <header className="grid grid-cols-12 py-2 px-5 shadow-md   w-full sticky top-0 left-0 bg-white">
        <div className="col-span-3 flex justify-start items-center gap-3">
          <i
            onClick={toggleMenuBarHandler}
            className="fa-solid fa-bars fa-2x"
          ></i>
          <img
            className=" h-24 "
            alt="youtube-img-logo"
            src={require("../images/youtube-logo.jpg")}
          />
        </div>
        <div className="col-span-8  flex justify-center items-center ">
          <input
            type="text"
            className="w-6/12 border border-gray-400 px-6 py-2 rounded-l-full "
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSearchModal(true)}
            onBlur={() => setShowSearchModal(true)}
          />
          <button className="border border-gray-400 px-6 py-2 rounded-r-full">
            🔍
          </button>

          <p
            onClick={handleSearchList}
            className="w-32 h-20 bg-slate-600 text-white"
          >
            <Link to={"/searchResult"}>Kya hua</Link>
          </p>

          {/* {showSearchModal && (
            <ul
              className="fixed bg-red-600 p-4 mt-[32.2rem] md:-ml-[4rem] border border-gray-400 rounded-lg  md:w-[32%]"
              onClick={() => console.log("ul")}
            >
              {searchResults?.map((result, index) => (
                <li
                  className="text-xl mb-4 hover:bg-slate-300 cursor-pointer hover:rounded-lg px-2 bg-red-400 h-full w-full"
                  key={index}
                >
                  <Link to={"/searchResult"} onClick={handleSearchList}>
                    <p className="h-full w-full bg-white">{result}</p>
                  </Link>
                </li>
              ))}
            </ul>
          )} */}
        </div>

        <div className="col-span-1 text-center self-center">
          <i className="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Head;
