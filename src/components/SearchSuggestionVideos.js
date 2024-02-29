import React from "react";

const SearchSuggestionVideos = ({ item }) => {
  const { title, channelTitle, description } = item?.snippet;
  console.log(item);
  return (
    <div className="ml-10">
      <div className="flex gap-8 mt-8 ">
        <img
          className="rounded-md"
          src={item?.snippet?.thumbnails?.medium?.url}
          alt=""
        />
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold">{title}</h1>
          <span>{channelTitle}</span>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestionVideos;
