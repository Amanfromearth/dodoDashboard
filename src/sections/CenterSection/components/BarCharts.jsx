"use client";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { useTheme } from "next-themes";

const chartData = [
  { month: "January", transactions: 1200 },
  { month: "February", transactions: 1500 },
  { month: "March", transactions: 1700 },
  { month: "April", transactions: 1600 },
  { month: "May", transactions: 1800 },
];

const chartConfig = {
  transactions: { label: "Transactions" },
};

const lightModeColors = ["#ff9a9e", "#f5e78e", "#9ad0f5", "#b0f2d1", "#f5a6f5", "#ffab91", "#a2d2ff"];
const darkModeColors = ["#9ec1cf", "#f09a9d", "#5d9fc5", "#7be2c7", "#e9a6d7", "#ff8c6f", "#81d4fa"];

export default function BarChartComp() {
  const { theme } = useTheme();
  const colors = theme === 'dark' ? darkModeColors : lightModeColors;

  return (
    <div className="w-full p-4 dark:bg-[#353535] rounded-xl">
      <span className="text-base font-semibold mb-1">Monthly Transaction Volume</span>
      <ChartContainer className="mt-2" config={chartConfig} style={{ height: '24vh' }}>
        <BarChart accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}  
          />
          <YAxis tickLine={false} axisLine={false} width={30} />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent className="bg-white dark:bg-gray-800" hideLabel />}
          />
          <Bar
            dataKey="transactions"
            fill="#8884d8"
            radius={8}
            barSize={30}
            fillOpacity={0.9}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
          </Bar>
        </BarChart>
      </ChartContainer>
    </div>
  );
}
