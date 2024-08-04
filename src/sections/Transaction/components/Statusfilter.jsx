import { ChevronDown } from "lucide-react";

const StatusFilter = ({ statusFilter, setStatusFilter }) => (
  <label className="relative flex items-center p-2 border bg-gray-200 dark:bg-[#3f3f3f] dark:border-[#525252] font-sans rounded-md font-semibold text-sm cursor-pointer">
    <select
      id="status"
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="appearance-none w-full bg-transparent pr-7"
    >
      <option className="font-sans" value="All">All Status</option>
      <option value="Complete">Complete</option>
      <option value="Pending">Pending</option>
      <option value="Rejected">Rejected</option>
      <option value="In Progress">In Progress</option>
      <option value="Approved">Approved</option>
    </select>
    <ChevronDown
      className="absolute right-2 text-gray-500 pointer-events-none"
      size={20}
    />
  </label>
);

export default StatusFilter;