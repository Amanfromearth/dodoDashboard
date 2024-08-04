import React from "react";
import LineChartComp from "./LineCharts";
import BarChartComp from "./BarCharts";
import PieChartComp from "./PieCharts";

const revenueChartConfig = {
  desktop: {
    label: "Revenue",
    color: "#ff9a9e", 
  },
};

const transactionsChartConfig = {
  transactions: {
    label: "Number of Transactions",
    color: "#0b6468", 
  },
};

const revenueData = [
  { month: "January", revenue: 1000 },
  { month: "February", revenue: 1200 },
  { month: "March", revenue: 1400 },
  { month: "April", revenue: 1300 },
  { month: "May", revenue: 1600 },
  { month: "June", revenue: 1300 },
  { month: "July", revenue: 2000 },
];

const transactionsData = [
  { month: "January", transactions: 100 },
  { month: "February", transactions: 20 },
  { month: "March", transactions: 200 },
  { month: "April", transactions: 180 },
  { month: "May", transactions: 250 },
  { month: "June", transactions: 300 },
  { month: "July", transactions: 390 },
];

const Charts = () => {
  return (
    <div className="w-full px-2 sm:px-7 pt-2 flex flex-col gap-4 sm:gap-4">
      <div className="w-full gap-4 sm:gap-5 flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <LineChartComp
            chartData={revenueData}
            name="Revenue"
            lineColor="#ff9a9e" // Bright pink
            dataKey="revenue"
            chartConfig={revenueChartConfig}
          />
        </div>
        <div className="w-full lg:w-1/2">
          <LineChartComp
            chartData={transactionsData}
            name="Number of Transactions"
            lineColor="#0b6468" // Deep teal
            dataKey="transactions"
            chartConfig={transactionsChartConfig}
          />
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
