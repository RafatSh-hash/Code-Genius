import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div>
      <div className="border-2 border-black bg-white shadow-lg shadow-gray-700 rounded-3xl w-72 h-88 p-6 mx-auto mb-32 mt-32 justify-center items-center">
        <h3 className="font-semibold text-2xl font-link text-center">
          Enter User Name
        </h3>
        <input
          className="rounded-lg w-full  lg:mx-3 sm:mx-auto mt-4 p-2"
          type="text"
          placeholder="example@gmail.com"
        />
        <h3 className="font-semibold font-link mt-4 text-2xl text-center">
          Enter Password
        </h3>
        <input
          className="rounded-lg w-full mx-3 mt-4 p-2"
          type="password"
          placeholder="password"
        />
        <div className="mt-4">
          <button className="px-3 mx-20 py-2 border-2 border-black font-link text-white font-semibold bg-blue-400 hover:bg-blue-600 rounded-lg">
            <Link to="/home">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
