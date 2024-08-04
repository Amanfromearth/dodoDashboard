import { ChevronLeft, ChevronRight } from "lucide-react";

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

export default Pagination;