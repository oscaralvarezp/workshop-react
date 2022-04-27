import { useState } from 'react'

export function usePagination({ itemsPerPage, data }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = ({ selected: selectedPage }) =>
    setCurrentPage(selectedPage);

  const offset = currentPage * itemsPerPage;
  const currentPageData = data.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(data.length / itemsPerPage);

  return {
    pageCount,
    currentPageData,
    handlePageClick
  };
}