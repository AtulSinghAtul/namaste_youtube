import React, { useEffect } from "react";
import LiveChatMessage from "./LiveChatMessage";
import generate, { messages } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import { addChaterName } from "../utils/slices/chatSlice";
import { LIVE_CHAT_COUNT } from "../utils/constants";

const LiveChat = () => {
  const dispatch = useDispatch();
  const liveMessage = useSelector((store) => store.liveChat.name);

  // console.log(liveMessage);

  useEffect(() => {
    //! API Polling

    const timer = setTimeout(() => {
      const nameList = generate();
      const message = messages(LIVE_CHAT_COUNT);
      dispatch(addChaterName({ name: nameList, message: message }));
    }, 2000);

    return () => {
      // 👇️ clear timeout when the component unmounts
      clearTimeout(timer);
    };
  }, [liveMessage]);

  return (
    <div className="border border-gray-700 w-[50%] h-[400px] ml-2 overflow-y-scroll flex flex-col-reverse  -z-10 bg-slate-100">
      {liveMessage?.map((c) => (
        <LiveChatMessage name={c.name} message={c.message} />
      ))}
    </div>
  );
};

export default LiveChat;
