import { useEffect } from "react";
import { COMMENTS_ID, GOOGLE_API_KEY } from "../utils/constants";
import { useDispatch } from "react-redux";
import { getCommentsData } from "../utils/slices/appSlice";

const useCommentsFetch = async (videoId) => {
  const dispatch = useDispatch();

  async function commentsFetch() {
    const data = await fetch(COMMENTS_ID + videoId + "&key=" + GOOGLE_API_KEY);
    const json = await data.json();

    dispatch(getCommentsData(json));
  }

  useEffect(() => {
    try {
      commentsFetch();
    } catch (error) {
      console.error("Error fetching comments", error);
    }
  }, []);
};

export default useCommentsFetch;
