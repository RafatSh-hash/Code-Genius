import React, { createContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Que from "../Que/Que";
export const ScoreContext = createContext();

const Ques = () => {
  const data = useLoaderData();
  const ques = data.data.questions;
  const topic = data.data;
  console.log(topic);

  const [point, setPoint] = useState(0);
  return (
    <ScoreContext.Provider value={[point, setPoint]}>
      <div className="lg:flex lg:flex-row sm:flex sm:justify-center sm:flex-col-reverse p-5 bg-gradient-to-r from-sky-300 via-cyan-200">
        <div className="lg:w-[80%] md:w-full sm:w-full">
          <p className="font-bold text-xl text-center">{topic.name}</p>
          {ques.map((que) => (
            <Que key={que.id} que={que}></Que>
          ))}
        </div>
        <div className="lg:w-[20%] mt-14 md:w-full sm:w-full sm:mx-auto">
          <h4 className="font-bold text-2xl text-center">
            Your score : <span className="text-red-500"> {point}</span>
          </h4>
        </div>
      </div>
    </ScoreContext.Provider>
  );
};

export default Ques;
