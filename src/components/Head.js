import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

function Head() {
  const dispatch = useDispatch();

  function toggleMenuBarHandler() {
    dispatch(toggleMenu());
  }

  return (
    <>
      <header className="grid grid-cols-12 py-2 px-5 shadow-md   w-full">
        <div className="col-span-3 flex justify-start items-center gap-3">
          <i
            onClick={toggleMenuBarHandler}
            className="fa-solid fa-bars fa-2x"
          ></i>
          <img
            className=" h-24 "
            alt="youtube-img-logo"
            src={require("../images/youtube-logo.jpg")}
          />
        </div>
        <div className="col-span-8  flex justify-center items-center ">
          <input
            type="text"
            className="w-6/12 border border-gray-400 px-6 py-2 rounded-l-full "
          />
          <button className="border border-gray-400 px-6 py-2 rounded-r-full">
            🔍
          </button>
        </div>
        <div className="col-span-1 text-center self-center">
          <i className="fa-solid fa-user"></i>
        </div>
      </header>
    </>
  );
}

export default Head;
