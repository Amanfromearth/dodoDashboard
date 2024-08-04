import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import TableHeader from './components/TableHeader';
import TableBody from './components/TableBody';
import Pagination from './components/Pagination';
import { filterAndSortTransactions } from './utils/transactionUtils';
import { transactions } from './data';

const TransactionTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "ascending" });
  const [statusFilter, setStatusFilter] = useState("All");
  const itemsPerPage = 6;

  useEffect(() => {
    const filtered = filterAndSortTransactions(transactions, searchTerm, statusFilter, sortConfig);
    setFilteredTransactions(filtered);
    setCurrentPage(1);
  }, [searchTerm, statusFilter, sortConfig]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTransactions.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const handleSort = (key) => {
    const direction = sortConfig.key === key && sortConfig.direction === "ascending" ? "descending" : "ascending";
    setSortConfig({ key, direction });
  };

  return (
    <div className="w-full h-full flex flex-col gap-3 p-4 mt-5 lg:mt-0 md:p-8">
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
          <TableBody currentItems={currentItems} />
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

export default TransactionTable;