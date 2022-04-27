import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { Heading } from "@chakra-ui/react";

import "../styles/PaginationStyles.css";

import { getAllLaunches } from "../api/launches";

import CardItem from "../components/CardItem";
import Loader from "../components/Loader";

import { usePagination } from "../hooks/usePagination";

export default function Home() {
  const [launches, setLaunches] = useState([]);
  const { pageCount, currentPageData, handlePageClick } = usePagination({
    itemsPerPage: 5,
    data: launches,
  });

  useEffect(() => {
    getAllLaunches().then((data) => setLaunches(data));
  }, []);

  return (
    <>
      <Heading textAlign="center" m="5" as="h1" size="lg">
        Space X Launches
      </Heading>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        previousLinkClassName="page-link"
        nextLinkClassName="page-link"
        disabledClassName="disabled"
        activeClassName="active"
      />
      <section className="container-data">
        {launches.length === 0 && <Loader />}
        {currentPageData.map((launch, index) => (
          <CardItem key={index} {...launch} />
        ))}
      </section>
    </>
  );
}
