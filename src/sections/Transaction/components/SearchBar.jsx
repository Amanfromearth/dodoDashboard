import React from 'react';
import { Search } from "lucide-react";
import StatusFilter from './Statusfilter';
import SortPopover from './SortPopover';

const SearchBar = ({ searchTerm, setSearchTerm, statusFilter, setStatusFilter, handleSort, sortConfig }) => (
  <div className="mb-4 w-full flex flex-col-reverse sm:flex-row bg-[#f7f9fb] dark:bg-[#353535] rounded-md p-2 px-4 gap-2 sm:gap-0 sm:justify-between items-center">
    <div className="flex gap-3 font-thin items-center justify-between w-full sm:w-auto">
      <StatusFilter
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
      />
      <SortPopover handleSort={handleSort} sortConfig={sortConfig} />
    </div>
    <div className="relative w-full sm:max-w-xs">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-3 w-3 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search"
        className="pl-10 text-sm pr-4 py-1 w-full bg-transparent dark:bg-[#3f3f3f] border border-gray-300 dark:border-[#525252] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  </div>
);

export default SearchBar;