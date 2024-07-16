import React, { useEffect, useState } from "react";

const Pagination = ({ countOfPagination,setPage,current }) => {
  var pages=countOfPagination;
  var [currentPage, setCurrentPage] = useState(current);
  useEffect(() => {
    setCurrentPage(current)
  }, [current]);
  const numOfPages = [];
   if (pages > 4) {
    pages = 4;
  }

  for (
    var i = currentPage === 1 ? currentPage : currentPage - 1;
    i <=
    (pages + currentPage > countOfPagination
      ? countOfPagination
      : pages + currentPage);
    i++
  ) {
    numOfPages.push(i);
  }
  useEffect(() => {
    window.scrollTo(0, 0); 
    
  }, [currentPage]);

  return (
    <div>
      <nav className="mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center">
          <ul className="pagination">
            <li
              className={currentPage === 1 ? "page-item disabled" : "page-item"}
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage((prev) =>
                    currentPage === 1 ? prev : prev - 1
                  );
                  setPage(currentPage === 1 ? currentPage : currentPage - 1);
                }}
              >
                <i class="fa-solid fa-angle-left HomeLandText"></i>
              </button>
            </li>

            {numOfPages.map((page, index) => (
              <li
              key={index}
                className={
                  currentPage === page ? "page-item active-page" : "page-item"
                }
              >
                <button
                  className="page-link"
                  onClick={() => {
                    setCurrentPage(page);
                    setPage(page);
                  }}
                >
                  {page}
                </button>
              </li>
            ))}

            <li
              className={
                currentPage === countOfPagination
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage((prev) =>
                    currentPage === countOfPagination ? prev : prev + 1
                  );
                  setPage(currentPage === countOfPagination ? currentPage : currentPage + 1);
                }}
              >
                <i class="fa-solid fa-angle-right HomeLandText"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Pagination;
