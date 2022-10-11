import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Game = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div className="lg:flex lg:flex-row md:flex md:flex-row sm:flex-col-1 sm:justify-center items-center sm:flex sm:flex-col bg-gradient-to-l from-sky-400 via-cyan-100 justify-evenly py-20 ">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Game;
