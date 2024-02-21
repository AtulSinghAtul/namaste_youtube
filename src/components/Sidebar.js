import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  //! Called Early Return Pattern
  if (!isMenuOpen) return null;

  return (
    <div className="p-5 shadow-lg w-[15%]">
      <ul>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>Shorts</li>
        <li>Subscriptions</li>
      </ul>
      <hr />
      <ul>
        <li>You</li>
        <li>History</li>
      </ul>
      <hr />
      <h2>Explore</h2>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
      </ul>
    </div>
  );
};

export default Sidebar;
