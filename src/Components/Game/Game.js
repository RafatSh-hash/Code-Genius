import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Game = () => {
  const data = useLoaderData();
  const topics = data.data;

  return (
    <div className=" lg:flex lg:flex-row lg:flex-nowrap sm:flex-col-1 sm:justify-center sm:mb-4 items-center sm:flex sm:flex-col bg-gradient-to-l from-sky-400 via-cyan-100 justify-evenly py-20 md: flex md: flex-wrap ">
      {topics.map((topic) => (
        <Topic key={topic.id} topic={topic}></Topic>
      ))}
    </div>
  );
};

export default Game;
