import React from "react";
import LineChartComp from "./LineCharts";
import BarChartComp from "./BarCharts";
import PieChartComp from "./PieCharts";

const chartData = [
  { month: "January", desktop: 100 },
  { month: "February", desktop: 150 },
  { month: "March", desktop: 200 },
  { month: "April", desktop: 180 },
  { month: "May", desktop: 250 },
  { month: "June", desktop: 300 },
  { month: "July", desktop: 390 },
];

const Charts = () => {
  return (
    <div className="w-full px-2 sm:px-7 py-4 flex flex-col gap-4 sm:gap-8">
      <div className="w-full gap-4 sm:gap-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <LineChartComp chartData={chartData} name="Revenue" />
        </div>
        <div className="w-full lg:w-1/2">
          <LineChartComp chartData={chartData} name="Number of transactions" />
        </div>
      </div>
      <div className="w-full gap-4 sm:gap-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <BarChartComp />
        </div>
        <div className="w-full lg:w-1/2">
          <PieChartComp />
        </div>
      </div>
    </div>
  );
};

export default Charts;