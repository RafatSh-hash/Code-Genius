import React from "react";
import { Link } from "react-router-dom";

const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  return (
    <div>
      <div className="lg:w-72 lg:h-88 mx-5 sm:h-88 sm:w-full sm:my-5 shadow-lg shadow-gray-700 border-2 border-black bg-gray-500 flex flex-col justify-center rounded-2xl p-10">
        <div>
          <img className="h-[80%]" src={logo} alt="" />
        </div>
        <div className="p-2 text-center flex justify-evenly">
          <p className="font-semibold">{name}</p>
          <p className="">Total : {total}</p>
        </div>
        <button className="bg-blue-400 hover:bg-blue-600 px-3 py-2 text-center mx-auto rounded-lg">
          <Link to={`../game/topic/${id}`} className="font-semibold text-white">
            Play The Game
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Topic;
