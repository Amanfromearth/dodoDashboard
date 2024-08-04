import { ArrowUpDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const SortPopover = ({ handleSort, sortConfig }) => (
  <Popover>
    <PopoverTrigger>
      <ArrowUpDown className="w-5 h-5 cursor-pointer" />
    </PopoverTrigger>
    <PopoverContent className="w-fit">
      <div className="flex flex-col gap-2 text-sm">
        <button onClick={() => handleSort("date")} className="text-left">
          Sort by Date {sortConfig.key === "date" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </button>
        <button onClick={() => handleSort("amount")} className="text-left">
          Sort by Amount {sortConfig.key === "amount" && (sortConfig.direction === "ascending" ? "↑" : "↓")}
        </button>
      </div>
    </PopoverContent>
  </Popover>
);

export default SortPopover;