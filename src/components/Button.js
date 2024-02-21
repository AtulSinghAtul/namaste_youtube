import React from "react";

const Button = ({ name }) => {
  return (
    <div>
      <button className="bg-gray-600 text-white px-4 py-2 rounded-md">
        {name}
      </button>
    </div>
  );
};

export default Button;
