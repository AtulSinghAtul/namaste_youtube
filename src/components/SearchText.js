import React from "react";
import { useSelector } from "react-redux";
import SearchSuggestionVideos from "./SearchSuggestionVideos";
import { Link } from "react-router-dom";
import ButtonList from "./ButtonList";

const VideoSuggesctionContainer = () => {
  const searchText = useSelector((store) => store?.searchText?.text);

  return (
    <div className="flex flex-wrap gap-4">
      <ButtonList />
      {searchText?.items?.map((item) => (
        <div>
          <Link to={"/watch?v=" + item.id.videoId}>
            <SearchSuggestionVideos key={item.id.videoId} item={item} />
          </Link>
        </div>
      ))}
    </div>
  );
};
export default VideoSuggesctionContainer;
