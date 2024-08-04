"use client";
import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "next-themes";


const lightModeColors = ["#ff9a9e", "#f5e78e", "#9ad0f5", "#b0f2d1"];
const darkModeColors = ["#9ec1cf", "#f09a9d", "#5d9fc5", "#7be2c7"];

const chartData = [
  { category: "Sales", transactions: 600 },
  { category: "Refunds", transactions: 150 },
  { category: "Chargebacks", transactions: 90 },
  { category: "Fees", transactions: 100 },
];

const chartConfig = {
  transactions: {
    label: "Transactions",
  },
  sales: {
    label: "Sales",
  },
  refunds: {
    label: "Refunds",
  },
  chargebacks: {
    label: "Chargebacks",
  },
  fees: {
    label: "Fees",
  },
};

const CustomLegend = ({ data, colors }) => (
  <div className="flex w-full h-full justify-evenly flex-col text-xs">
    {data.map((entry, index) => (
      <div
        key={`item-${index}`}
        className="flex w-full justify-between items-center"
      >
        <div className="flex items-center">
          <div
            className="w-2 h-2 rounded-full flex mr-1"
            style={{ backgroundColor: colors[index % colors.length] }}
          />
          <span>{`${entry.category}`}</span>
        </div>
        <span>{`${entry.transactions}`}</span>
      </div>
    ))}
  </div>
);

export default function PieChartComp() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? darkModeColors : lightModeColors;

  const dataWithColors = chartData.map((item, index) => ({
    ...item,
    fill: colors[index % colors.length],
  }));

  return (
    <div className="w-full p-4 dark:bg-[#353535] rounded-xl">
      <span className="text-base font-semibold">Transaction Distribution</span>
      <div className="flex-1">
        <div className="flex flex-row justify-between items-center h-[25vh]">
          <ChartContainer
            config={chartConfig}
            className="w-full h-full"
          >
            <PieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent className="bg-white dark:bg-gray-800" hideLabel />}
              />
              <Pie
                data={dataWithColors}
                dataKey="transactions"
                nameKey="category"
                innerRadius={50}
                outerRadius="90%"
                strokeWidth={2}
              />
            </PieChart>
          </ChartContainer>
          <div className="w-full sm:pl-4 h-full flex items-center justify-center overflow-y-auto">
            <CustomLegend data={dataWithColors} colors={colors} />
          </div>
        </div>
      </div>
    </div>
  );
}
