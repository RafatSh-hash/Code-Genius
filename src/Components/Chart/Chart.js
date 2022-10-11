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
    <div className="  bg-gradient-to-l from-sky-400 via-cyan-100 to-sky-300 p-20">
      <div className="lg:w-1/2 mx-auto bg-slate-300 rounded-2xl p-5 shadow-xl shadow-gray-500">
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
      </div>
    </div>
  );
};

export default Chart;
