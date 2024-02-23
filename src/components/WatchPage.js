import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { hideSideMenu } from "../utils/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import useCommentsFetch from "../hooks/useCommentsFetch";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(hideSideMenu());
  }, []);
  const [searchParams] = useSearchParams();
  // console.log(videoId);
  const videoId = searchParams.get("v");

  useCommentsFetch(videoId);

  // const commentsData = useSelector((store) => store.app.commentsData);

  // console.log(commentsData?.items[0]);
  // const a = commentsData?.items[0].snippet.topLevelComment.snippet.textOriginal;
  // console.log(a);

  return (
    <div className="m-8 flex flex-col">
      <iframe
        width="1000"
        height="400"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <CommentsContainer />

      {/* <div>
        {commentsData?.items.map((item) => (
          <div key={item?.id}>
            {item.snippet.topLevelComment.snippet.textOriginal}
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default WatchPage;
