import React from "react";
import { useLoaderData } from "react-router-dom";
import Que from "../Que/Que";

const Ques = () => {
  const data = useLoaderData();
  const ques = data.data.questions;
  console.log(ques);
  return (
    <div className="p-5 bg-gradient-to-r from-sky-300 via-cyan-200">
      {ques.map((que) => (
        <Que key={que.id} que={que}></Que>
      ))}
    </div>
  );
};

export default Ques;
