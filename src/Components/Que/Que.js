import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Que = ({ que }) => {
  const { question, options, correctAnswer } = que;
  return (
    <div className="">
      <div className="w-1/2 h-66 mx-auto leading-9 shadow-gray-600 shadow-lg mt-10 border-2 border-slate-500 p-4 rounded-2xl">
        <div className="flex justify-between">
          <p className="font-bold w-[80%]">{question}</p>
          <button className="w-[20%]">
            <FontAwesomeIcon icon={faEye} />
          </button>
        </div>
        <input className="font-semibold" name="a" type="radio" />
        <label className="font-semibold" htmlFor="">
          <span> {options[0]}</span>
        </label>
        <br />
        <input className="font-semibold" name="a" type="radio" />
        <label className="font-semibold" htmlFor="">
          <span> {options[1]}</span>
        </label>
        <br />
        <input className="font-semibold" name="a" type="radio" />
        <label className="font-semibold" htmlFor="">
          <span> {options[2]}</span>
        </label>
        <br />
        <input className="font-semibold" name="a" type="radio" />
        <label className="font-semibold" htmlFor="">
          <span> {options[3]}</span>
        </label>
        <br />
      </div>
    </div>
  );
};

export default Que;
