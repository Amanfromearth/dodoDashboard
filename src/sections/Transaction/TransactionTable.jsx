
import React, { useState, useEffect } from 'react';
import { ArrowUpDown, Calendar, ChevronLeft, ChevronRight,  Search } from "lucide-react";
import Avatar from 'boring-avatars';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const transactions = [
  {
    id: "#CM9801",
    user: "Arjun Sharma",
    userAvatar: "https://example.com/avatars/arjun.jpg",
    project: "Landing Page",
    amount: 1500.0,
    date: "Just now",
    status: "In Progress",
  },
  {
    id: "#CM9802",
    user: "Meera Nair",
    userAvatar: "https://example.com/avatars/meera.jpg",
    project: "CRM Admin pages",
    amount: 3200.5,
    date: "A minute ago",
    status: "Complete",
  },
  {
    id: "#CM9803",
    user: "Rohit Kumar",
    userAvatar: "https://example.com/avatars/rohit.jpg",
    project: "Client Project",
    amount: 850.75,
    date: "1 hour ago",
    status: "Pending",
  },
  {
    id: "#CM9804",
    user: "Priya Iyer",
    userAvatar: "https://example.com/avatars/priya.jpg",
    project: "Admin Dashboard",
    amount: 2750.0,
    date: "Yesterday",
    status: "Approved",
  },
  {
    id: "#CM9805",
    user: "Suresh Reddy",
    userAvatar: "https://example.com/avatars/suresh.jpg",
    project: "App Landing Page",
    amount: 1100.25,
    date: "Feb 2, 2024",
    status: "Rejected",
  },
  {
    id: "#CM9806",
    user: "Anjali Singh",
    userAvatar: "https://example.com/avatars/anjali.jpg",
    project: "Mobile App Development",
    amount: 5000.0,
    date: "Feb 1, 2024",
    status: "In Progress",
  },
  {
    id: "#CM9807",
    user: "Ravi Menon",
    userAvatar: "https://example.com/avatars/ravi.jpg",
    project: "E-commerce Platform",
    amount: 4200.75,
    date: "Jan 31, 2024",
    status: "Complete",
  },
  {
    id: "#CM9808",
    user: "Lakshmi Pillai",
    userAvatar: "https://example.com/avatars/lakshmi.jpg",
    project: "SEO Optimization",
    amount: 950.5,
    date: "Jan 30, 2024",
    status: "Pending",
  },
  {
    id: "#CM9809",
    user: "Vikram Patel",
    userAvatar: "https://example.com/avatars/vikram.jpg",
    project: "Social Media Management",
    amount: 1250.0,
    date: "Jan 29, 2024",
    status: "Approved",
  },
  {
    id: "#CM9810",
    user: "Neha Joshi",
    userAvatar: "https://example.com/avatars/neha.jpg",
    project: "Content Writing",
    amount: 700.25,
    date: "Jan 28, 2024",
    status: "Complete",
  },
  {
    id: "#CM9811",
    user: "Amit Gupta",
    userAvatar: "https://example.com/avatars/amit.jpg",
    project: "Graphic Design",
    amount: 3400.0,
    date: "Jan 27, 2024",
    status: "In Progress",
  },
  {
    id: "#CM9812",
    user: "Kavya Ramesh",
    userAvatar: "https://example.com/avatars/kavya.jpg",
    project: "Web Development",
    amount: 5600.0,
    date: "Jan 26, 2024",
    status: "Rejected",
  },
  {
    id: "#CM9813",
    user: "Shivani Kapoor",
    userAvatar: "https://example.com/avatars/shivani.jpg",
    project: "App Development",
    amount: 4800.5,
    date: "Jan 25, 2024",
    status: "Approved",
  },
  {
    id: "#CM9814",
    user: "Manoj Desai",
    userAvatar: "https://example.com/avatars/manoj.jpg",
    project: "Email Marketing",
    amount: 2000.0,
    date: "Jan 24, 2024",
    status: "Pending",
  },
  {
    id: "#CM9815",
    user: "Ritu Verma",
    userAvatar: "https://example.com/avatars/ritu.jpg",
    project: "Branding",
    amount: 3300.75,
    date: "Jan 23, 2024",
    status: "Complete",
  },
  {
    id: "#CM9816",
    user: "Santosh Kulkarni",
    userAvatar: "https://example.com/avatars/santosh.jpg",
    project: "Market Research",
    amount: 2750.0,
    date: "Jan 22, 2024",
    status: "In Progress",
  },
  {
    id: "#CM9817",
    user: "Deepa Shetty",
    userAvatar: "https://example.com/avatars/deepa.jpg",
    project: "UI/UX Design",
    amount: 6000.0,
    date: "Jan 21, 2024",
    status: "Approved",
  },
  {
    id: "#CM9818",
    user: "Rajesh Malhotra",
    userAvatar: "https://example.com/avatars/rajesh.jpg",
    project: "Video Production",
    amount: 8200.5,
    date: "Jan 20, 2024",
    status: "Complete",
  },
  {
    id: "#CM9819",
    user: "Pooja Deshmukh",
    userAvatar: "https://example.com/avatars/pooja.jpg",
    project: "Photography",
    amount: 2400.0,
    date: "Jan 19, 2024",
    status: "Rejected",
  },
  {
    id: "#CM9820",
    user: "Karthik Krishnan",
    userAvatar: "https://example.com/avatars/karthik.jpg",
    project: "Digital Marketing",
    amount: 4100.75,
    date: "Jan 18, 2024",
    status: "Pending",
  },
];


const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [statusFilter, setStatusFilter] = useState("All");
  const itemsPerPage = 9;

  useEffect(() => {
    const filtered = filterAndSortTransactions();
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, sortConfig, transactions]);

  const filterAndSortTransactions = () => {
    let filtered = transactions.filter((transaction) =>
      Object.values(transaction).some((value) =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );

    if (statusFilter !== "All") {
      filtered = filtered.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    if (sortConfig.key) {
      filtered.sort((a, b) =>
        compareValues(a, b, sortConfig.key, sortConfig.direction)
      );
    }

    return filtered;
  };

  const compareValues = (a, b, key, direction) => {
    if (key === "amount") {
      return direction === "ascending"
        ? a.amount - b.amount
        : b.amount - a.amount;
    } else if (key === "date") {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return direction === "ascending" ? dateA - dateB : dateB - dateA;
    }
    return 0;
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  const handleSort = (key) => {
    const direction =
      sortConfig.key === key && sortConfig.direction === "ascending"
        ? "descending"
        : "ascending";
    setSortConfig({ key, direction });
  };

  const formatDate = (dateString) => {
    if (["just now", "a minute ago"].includes(dateString.toLowerCase())) {
      return dateString;
    }
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 md:p-8">
      <span className="text-sm font-semibold">Transactions</span>
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        handleSort={handleSort}
        sortConfig={sortConfig}
      />
      <div className="overflow-x-auto">
        <table className="w-full min-w-[600px]">
          <TableHeader />
          <TableBody currentItems={currentItems} formatDate={formatDate} />
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};

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

const StatusFilter = ({ statusFilter, setStatusFilter }) => (
  <div className="font-semibold text-sm">
    <select
      value={statusFilter}
      onChange={(e) => setStatusFilter(e.target.value)}
      className="p-2 border dark:bg-[#3f3f3f] dark:border-[#525252] font-sans rounded-md"
    >
      <option className="font-sans" value="All">All Status</option>
      <option value="Complete">Complete</option>
      <option value="Pending">Pending</option>
      <option value="Rejected">Rejected</option>
      <option value="In Progress">In Progress</option>
      <option value="Approved">Approved</option>
    </select>
  </div>
);

const TableHeader = () => (
  <thead>
    <tr className="text-slate-500 dark:text-[#7f7f7f] text-sm border-b-2 dark:border-[#555555] border-zinc-200">
      <th className="p-2 text-left font-normal hidden sm:table-cell">ID</th>
      <th className="p-2 text-left font-normal">User</th>
      <th className="p-2 text-left font-normal hidden sm:table-cell">Project</th>
      <th className="p-2 text-left font-normal">Amount</th>
      <th className="p-2 text-left font-normal ">Date</th>
      <th className="p-2 text-left font-normal">Status</th>
    </tr>
  </thead>
);

const TableBody = ({ currentItems, formatDate }) => (
  <tbody className="text-sm">
    {currentItems.map((transaction) => (
      <tr key={transaction.id} className="border-b dark:border-[#3f3f3f]">
        <td className="p-2 hidden sm:table-cell">{transaction.id}</td>
        <td className="p-2">
          <div className="flex gap-2 items-center">
            <Avatar
              name={transaction.user}
              colors={["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A", "#98D8C8"]}
              size={23}
              variant="beam"
            />
            <span className="text-xs">{transaction.user}</span>
          </div>
        </td>
        <td className="p-2 hidden sm:table-cell">{transaction.project}</td>
        <td className="p-2">₹{transaction.amount.toFixed(2)}</td>
        <td className="p-2">
          <div className="flex gap-1 items-center">
            <Calendar className="w-4 h-4 "/>
            <span className="">{formatDate(transaction.date)}</span>
          </div>
        </td>
        <td className="p-2">
          <span
            className={`px-2 py-1 rounded-full text-xs ${getStatusColor(
              transaction.status
            )}`}
          >
            {transaction.status}
          </span>
        </td>
      </tr>
    ))}
  </tbody>
);

const Pagination = ({ currentPage, totalPages, handlePageChange }) => (
  <div className="w-full flex justify-center sm:justify-end text-sm items-center">
    <div className="mt-4 flex justify-between items-center">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 hover:bg-gray-100 dark:hover:bg-[#3f3f3f] dark:text-white rounded-full"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <div className="flex space-x-2">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number + 1}
            onClick={() => handlePageChange(number + 1)}
            className={`p-2 rounded-sm flex items-center justify-center bg-gray-100 ${
              currentPage === number + 1
                ? "bg-gray-100 dark:bg-[#3f3f3f]"
                : "bg-transparent"
            }`}
          >
            <div className="w-4 flex items-center justify-center h-4">
              {number + 1}
            </div>
          </button>
        ))}
      </div>
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 hover:bg-gray-100 rounded-full"
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  </div>
);

const getStatusColor = (status) => {
  const colors = {
    complete: "bg-green-200 text-green-800",
    pending: "bg-yellow-200 text-yellow-800",
    rejected: "bg-red-200 text-red-800",
    "in progress": "bg-blue-200 text-blue-800",
    approved: "bg-purple-200 text-purple-800",
  };
  return colors[status.toLowerCase()] || "bg-gray-200 text-gray-800";
};

export default TransactionTable;