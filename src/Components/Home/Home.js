import React from "react";
import Lottie from "lottie-react";
import study from "../../assets/study.json";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="bg-gradient-to-r from-sky-400 via-cyan-100 mt-0 p-5 ">
      <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex sm:flex-col-1 sm:justify-center items-center h-full m-10">
        <div className="lg:w-1/2 md:w-1/2 sm:w-full py-12 px-5 ">
          <h1 className="lg:text-3xl sm:text-lg text-left font-bold">
            "Being a programmer is not a task of one or several days, but a
            journey for lifetime.So Pracitce , Practice & Practice..."
          </h1>
          <p className="text-right text-red-600 mx-5 mb-10">-Jhankar Mahbub</p>
          <Link
            className="bg-blue-500 mt-20 lg:text-left lg:w-10 sm:w-10 sm:mx-auto sm:text-center  px-3 py-2 rounded-lg hover:shadow-lg border-2 border-black hover:shadow-gray-500 text-white font-bold hover:bg-blue-600"
            to="/game"
          >
            Take A Test
          </Link>
        </div>
        <div className="lg:w-1/2 md:w-1/2 sm:w-full">
          <Lottie animationData={study} loop={true} />;
        </div>
      </div>
    </div>
  );
};

export default Home;
