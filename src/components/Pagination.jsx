import React from "react";

export default function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNeighbors = 2;
  const pages = [];

  pages.push(1);
  const startPage = Math.max(2, currentPage - pageNeighbors);
  const endPage = Math.min(totalPages - 1, currentPage + pageNeighbors);

  if (startPage > 2) pages.push("start-ellipsis");
  for (let i = startPage; i <= endPage; i++) pages.push(i);
  if (endPage < totalPages - 1) pages.push("end-ellipsis");
  if (totalPages > 1) pages.push(totalPages);

  const handlePageChange = (p) => {
    if (p >= 1 && p <= totalPages && p !== currentPage) {
      onPageChange(p);
    }
  };

  return (
    <div className="pagination-wrapper">
      <button
        className={`pagination-btn ${
          currentPage === 1 ? "pagination-btn-disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Prev
      </button>

      {pages.map((p, idx) => {
        if (p === "start-ellipsis" || p === "end-ellipsis") {
          return (
            <span key={p + idx} className="px-3 py-1 text-gray-400">
              …
            </span>
          );
        }

        const isActive = p === currentPage;
        return (
          <button
            key={p}
            className={`pagination-page ${isActive ? "pagination-page-active" : ""}`}
            onClick={() => handlePageChange(p)}
          >
            {p}
          </button>
        );
      })}

      <button
        className={`pagination-btn ${
          currentPage === totalPages ? "pagination-btn-disabled" : ""
        }`}
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}
