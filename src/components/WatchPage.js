import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hideSideMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import useCommentsFetch from "../hooks/useCommentsFetch";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideSideMenu());
  }, []);
  const [searchParams] = useSearchParams();

  const videoId = searchParams.get("v");

  useCommentsFetch(videoId);

  return (
    <div className="m-8 flex flex-col w-full">
      <div className="flex ">
        <iframe
          width="1000"
          height="400"
          src={"https://www.youtube.com/embed/" + videoId}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
