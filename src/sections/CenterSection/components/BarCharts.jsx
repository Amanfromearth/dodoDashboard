"use client"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { useTheme } from "next-themes" // Import useTheme hook

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 133 },
]

const chartConfig = {
  desktop: { label: "Desktop" },
}

const lightModeColors = ["#526062", "#ef8e5b", "#0b6468", "#526062"]
const darkModeColors = ["#8ecae6", "#219ebc", "#023047", "#ffb703"]

export default function BarChartComp() {
  const { theme } = useTheme() // Use the useTheme hook to get the current theme

  const colors = theme === 'dark' ? darkModeColors : lightModeColors

  return (
    <div className="w-full p-4 dark:bg-[#353535] rounded-xl ">
      <span className="text-base font-semibold mb-1">Transaction Volume by Referrer</span>
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
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar
            dataKey="desktop"
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
  )
}