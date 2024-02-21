import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className=" w-72 rounded-t-md">
      <img alt="" src={thumbnails.medium.url} className="rounded-md" />
      <ul className="px-4">
        <li className="font-bold my-2 ">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};

export default VideoCard;
