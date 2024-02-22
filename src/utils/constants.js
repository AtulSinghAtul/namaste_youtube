export const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const COMMENTS_ID =
  "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=";

export const YOUTUBE_SUGGESTION_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const YOUTUBE_SEARCH_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=";
