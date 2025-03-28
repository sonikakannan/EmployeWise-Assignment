import React from "react";

const Pagination = ({ page, totalPages, setPage }) => {
  return (
    <div className="mt-6 flex gap-4">
      <button
        className="bg-gray-300 px-4 cursor-pointer py-2 rounded disabled:opacity-50"
        onClick={() => setPage(page - 1)}
        disabled={page === 1}
      >
        Previous
      </button>
      <span className="text-lg font-semibold">
        Page {page} of {totalPages}
      </span>
      <button
        className="bg-gray-300 cursor-pointer px-4 py-2 rounded disabled:opacity-50"
        onClick={() => setPage(page + 1)}
        disabled={page === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
