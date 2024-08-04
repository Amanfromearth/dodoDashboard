const TableHeader = () => (
  <thead>
    <tr className="text-slate-500 dark:text-[#7f7f7f] text-sm border-b-2 dark:border-[#555555] border-zinc-200">
      <th className="p-2 text-left font-normal hidden sm:table-cell">ID</th>
      <th className="p-2 text-left font-normal">User</th>
      <th className="p-2 text-left font-normal hidden sm:table-cell">Project</th>
      <th className="p-2 text-left font-normal">Amount</th>
      <th className="p-2 text-left font-normal">Date</th>
      <th className="p-2 text-left font-normal">Status</th>
    </tr>
  </thead>
);

export default TableHeader;

