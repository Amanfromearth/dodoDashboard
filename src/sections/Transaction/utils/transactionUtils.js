export const filterAndSortTransactions = (transactions, searchTerm, statusFilter, sortConfig) => {
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
  
  export const formatDate = (dateString) => {
    if (["just now", "a minute ago"].includes(dateString.toLowerCase())) {
      return dateString;
    }
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };
  
  export const getStatusColor = (status) => {
    const colors = {
      complete: "bg-green-200 text-green-800",
      pending: "bg-yellow-200 text-yellow-800",
      rejected: "bg-red-200 text-red-800",
      "in progress": "bg-blue-200 text-blue-800",
      approved: "bg-purple-200 text-purple-800",
    };
    return colors[status.toLowerCase()] || "bg-gray-200 text-gray-800";
  };