import { useEffect } from "react";
import { COMMENTS_ID, GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getCommentsData } from "../utils/appSlice";

const useCommentsFetch = async (videoId) => {
  const dispatch = useDispatch();

  const data = await fetch(COMMENTS_ID + videoId + "&key=" + GOOGLE_API_KEY);
  const json = await data.json();
  console.log(json);

  // dispatch(getCommentsData(json));

  useEffect(() => {
    dispatch(getCommentsData(json));
  }, []);
};

export default useCommentsFetch;
