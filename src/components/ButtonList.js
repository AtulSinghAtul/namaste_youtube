import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const lists = [
    "All",
    "Music",
    "T-Series",
    "Bollywood Music",
    "Trailers",
    "Samsung",
    "News",
    "Indian pop Music",
    "Unboxing",
    "Bollywood Music",
    "Trailers",
    "Samsung",
    "News",
    "Indian pop Music",
    "Unboxing",
    "Bollywood Music",
    "Trailers",
    "Samsung",
    "News",
    "Indian pop Music",
    "Unboxing",
  ];

  return (
    <div className="flex gap-3 overflow-x-scroll w-[100%] hide_scrollbar scroll-smooth">
      {lists.map((list, index) => (
        <Button key={index} name={list} />
      ))}
    </div>
  );
};

export default ButtonList;
