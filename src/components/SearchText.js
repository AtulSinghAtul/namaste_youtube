import React from "react";
import { useSelector } from "react-redux";

const SearchText = () => {
  const searchText = useSelector((store) => store?.searchText?.text);
  console.log(searchText);

  return (
    <div className="flex flex-wrap gap-4">
      {searchText?.items?.map((item) => (
        <img className="" src={item?.snippet?.thumbnails?.medium?.url} alt="" />
      ))}
    </div>
  );
};

export default SearchText;
