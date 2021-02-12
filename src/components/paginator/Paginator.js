import React from "react";
import PropTypes from "prop-types";
import { Pagination } from "reactstrap";
import ReactPaginate from "react-paginate";

const Paginator = ({ pagesCount, onChange, currentPage }) => {
  return (
    <Pagination size="lg" style={{ justifyContent: "center" }}>
      <ReactPaginate
        forcePage={Number(currentPage)}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        activeClassName="active"
        pageCount={pagesCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onChange}
      />
    </Pagination>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
    .isRequired,
  pagesCount: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Paginator;
