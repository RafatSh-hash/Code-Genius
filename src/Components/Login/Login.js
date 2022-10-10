import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-gradient-to-r from-red-400 via-purple-200 to-indigo-400 w-full h-full p-3.5">
      <div className="border-2 border-black bg-gradient-to-r from-indigo-400 via-purple-500 to-red-400 rounded-3xl w-72 h-88 p-6 mx-auto mb-32 mt-32">
        <h3 className="font-semibold text-2xl font-link text-center">
          Enter User Name
        </h3>
        <input
          className="rounded-lg mt-4 p-2"
          type="text"
          placeholder="example@gmail.com"
        />
        <h3 className="font-semibold font-link mt-4 text-2xl text-center">
          Enter Password
        </h3>
        <input
          className="rounded-lg mt-4 p-2"
          type="password"
          placeholder="password"
        />
        <div className="mt-4">
          <button className="px-3 py-2 border-2 border-black font-link text-white font-semibold bg-blue-400 hover:bg-blue-600 rounded-lg">
            <Link to="/home">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
