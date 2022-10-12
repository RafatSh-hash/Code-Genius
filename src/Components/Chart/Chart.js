import React from "react";
import { useLoaderData } from "react-router-dom";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const Chart = () => {
  const data = useLoaderData();
  const chartData = data.data;
  console.log(chartData);

  const dataC = [
    {
      Name: chartData[0].name,
      ID: chartData[0].id,
      Total: chartData[0].total,
      Amt: 15,
    },
    {
      Name: chartData[1].name,
      ID: chartData[1].id,
      Total: chartData[1].total,
      Amt: 15,
    },
    {
      Name: chartData[2].name,
      ID: chartData[2].id,
      Total: chartData[2].total,
      Amt: 15,
    },
    {
      Name: chartData[3].name,
      ID: chartData[3].id,
      Total: chartData[3].total,
      Amt: 15,
    },
  ];

  return (
    <div className="   p-20">
      <div className="lg:w-1/2 sm: hidden lg:block md:block mx-auto bg-slate-300 rounded-2xl p-5 shadow-xl shadow-gray-500">
        <LineChart
          width={500}
          height={400}
          data={dataC}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis dataKey="Amt" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#ff0000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
        <h1 className="font-semibold text-center">
          This chart shows the quiz numbers in total.
        </h1>
      </div>

      <div className="lg:w-1/2 lg:hidden md:hidden sm:block my-10 mx-auto bg-slate-300 rounded-2xl shadow-xl shadow-gray-500">
        <LineChart
          width={250}
          height={150}
          data={dataC}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="Name" />
          <YAxis dataKey="Amt" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="Total"
            stroke="#ff0000"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </div>
    </div>
  );
};

export default Chart;
