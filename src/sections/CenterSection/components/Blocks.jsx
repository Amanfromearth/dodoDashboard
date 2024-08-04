import React from "react";
import { ChevronDown, MoveUpRight, MoveDownRight } from "lucide-react";

const MetricCard = ({
  title,
  value,
  change,
  isPositive,
  bgColor,
  darkbgColor,
}) => (
  <div
    className={`${bgColor} dark:${darkbgColor} w-full sm:w-[48%] lg:w-[180px] xl:w-[202px] h-[90px] xl:h-[112px] gap-1 dark:text-black flex flex-col items-center justify-center p-4 sm:p-6 rounded-2xl`}
  >
    <span className="font-medium w-full text-xs sm:text-sm">{title}</span>
    <div className="w-full flex items-center justify-between">
      <span className="font-semibold text-base sm:text-lg xl:text-2xl">{value}</span>
      <div
        className={`flex items-center gap-1 font-light text-[10px] sm:text-xs ${
          isPositive ? "text-green-600" : "text-red-600"
        }`}
      >
        {change}
        {isPositive ? (
          <MoveUpRight className="w-2 h-2 sm:w-3 sm:h-3" />
        ) : (
          <MoveDownRight className="w-2 h-2 sm:w-3 sm:h-3" />
        )}
      </div>
    </div>
  </div>
);

const Block = () => {
  const metrics = [
    {
      title: "Revenue",
      value: "₹24M",
      change: "+11.01%",
      isPositive: true,
      bgColor: "bg-[#f9fef0]",
      darkbgColor: "dark:bg-[#f9fef0]",
    },
    {
      title: "Customers",
      value: "1,250",
      change: "+5.27%",
      isPositive: true,
      bgColor: "bg-[#dbe6f2]",
      darkbgColor: "dark:bg-[#e5ecf6]",
    },
    {
      title: "Orders",
      value: "345",
      change: "-2.35%",
      isPositive: false,
      bgColor: "bg-[#fef0f9]",
      darkbgColor: "dark:bg-[#f9fef0]",
    },
    {
      title: "Conversion",
      value: "3.67%",
      change: "+0.82%",
      isPositive: true,
      bgColor: "bg-[#dbe6f2]",
      darkbgColor: "dark:bg-[#e5ecf6]",
    },
  ];

  return (
    <div className="w-full flex px-2 sm:px-8 p-3 gap-2 flex-col">
      <span className="flex text-xs font-medium gap-1 tracking-tight items-center">
        Today <ChevronDown className="w-3 h-3 sm:w-4 sm:h-4" />
      </span>
      <div className="flex flex-wrap gap-2 sm:gap-4 items-center justify-between w-full">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
};

export default Block;
