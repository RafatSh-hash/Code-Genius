import React, { createContext } from "react";
import { Link } from "react-router-dom";

export const totalContext = createContext();
const Topic = ({ topic }) => {
  const { id, name, logo, total } = topic;
  console.log(total);
  return (
    <div className="lg:mx-1 sm: mb-10 md:mx-3 ">
      <totalContext.Provider value={total}></totalContext.Provider>
      <div className="lg:w-72 lg:h-88 mx-5 sm:h-88 sm:w-full sm:my-5 shadow-xl shadow-gray-700 border-2 border-black bg-gradient-to-r from-cyan-300 via-slate-300 flex flex-col justify-center rounded-3xl p-10">
        <div>
          <img className="h-[80%]" src={logo} alt="" />
        </div>
        <div className="p-2 text-center flex justify-evenly">
          <p className="font-semibold">{name}</p>
          <p className="">Total : {total}</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-800 px-3 py-2 text-center mx-auto rounded-lg">
          <Link to={`../game/topic/${id}`} className="font-semibold text-white">
            Play The Game
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Topic;
