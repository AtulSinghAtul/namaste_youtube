import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

function Body() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default Body;
