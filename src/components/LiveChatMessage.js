import React from "react";

const LiveChatMessage = ({ name, message }) => {
  return (
    <div className="p-4  flex flex-col gap-3">
      <div className="flex justify-start items-center">
        <span className="border border-gray-700  rounded-full  flex self-center">
          👤
        </span>
        <div className="ml-2">
          <span className="font-bold mr-2">{name}</span>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveChatMessage;
