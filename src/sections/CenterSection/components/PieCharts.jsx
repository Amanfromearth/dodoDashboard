"use client";
import * as React from "react";
import { Pie, PieChart } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useTheme } from "next-themes";

const lightModeColors = ["#c5fa58", "#526062", "#ef8e5b", "#0b6468"];
const darkModeColors = ["#8ecae6", "#219ebc", "#023047", "#ffb703"];

const chartData = [
  { browser: "chrome", visitors: 275 },
  { browser: "safari", visitors: 200 },
  { browser: "firefox", visitors: 287 },
  { browser: "edge", visitors: 173 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
  },
  safari: {
    label: "Safari",
  },
  firefox: {
    label: "Firefox",
  },
  edge: {
    label: "Edge",
  },
};

const CustomLegend = ({ data, colors }) => (
  <div className="flex w-full h-full  justify-evenly flex-col  text-xs">
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
          <span>{`${entry.browser}`}</span>
        </div>
        <span>{`${entry.visitors}%`}</span>
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
      <span className="text-base font-semibold">Pie Chart</span>
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
                dataKey="visitors"
                nameKey="browser"
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