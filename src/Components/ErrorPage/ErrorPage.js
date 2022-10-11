import React from "react";
import "./ErrorPage.css";
import Lottie from "lottie-react";
import err from "../../assets/err";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="body">
      <div className="anime">
        <Lottie animationData={err} loop={true}></Lottie>
      </div>
      <div className="w-40 mx-auto">
        <Link className="link" to="/home">
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
