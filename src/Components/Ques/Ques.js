import React, { createContext, useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Que from "../Que/Que";
import { totalContext } from "../Topic/Topic";
export const ScoreContext = createContext();

export const chartContext = createContext();
const Ques = () => {
  const data = useLoaderData();
  const ques = data.data.questions;
  const topic = data.data;
  console.log(topic);

  const total = useContext(totalContext);
  const [point, setPoint] = useState(0);
  const chartData = [
    {
      Name: "HTML",
      num: 10,
      score: 5,
      amt: 20,
    },
    {
      Name: "CSS",
      num: 15,
      score: 8,
      amt: 20,
    },
    {
      Name: "React",
      num: 10,
      score: 8,
      amt: 20,
    },
    {
      Name: "JavaScript",
      num: 10,
      score: 6,
      amt: 20,
    },
  ];

  return (
    <chartContext.Provider value={chartData}>
      <ScoreContext.Provider value={[point, setPoint]}>
        <div className="lg:flex lg:flex-row sm:flex sm:justify-center sm:flex-col-reverse sm:gap-3 p-5 h-full w-full bg-gradient-to-r from-sky-300 via-cyan-200">
          <div className="lg:w-[80%] md:w-full sm:w-full sm:mt-10">
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
    </chartContext.Provider>
  );
};

export default Ques;
