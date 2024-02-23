import React from "react";

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex gap-4 mt-2 bg-gray-100 p-4 rounded-md">
      <span className="border border-gray-600 rounded-full w-8 h-8 flex justify-center items-center">
        👤
      </span>
      <div className="flex flex-col">
        <p>{name}</p>
        <p className="text-sm font-medium">{text}</p>
      </div>
    </div>
  );
};

export default Comment;
