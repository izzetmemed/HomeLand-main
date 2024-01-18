import React, { useEffect, useState } from "react";

const Pagination = ({ countOfPagenation,setPage }) => {
  var pages=countOfPagenation;
  var [currentPage, setCurrentPage] = useState(1);
  const numOfPages = [];
  useEffect(()=>{
   setCurrentPage(1);
  },[countOfPagenation]
)

   if (pages > 4) {
    pages = 4;
  }

  setPage(currentPage);
  for (
    var i = currentPage === 1 ? currentPage : currentPage - 1;
    i <=
    (pages + currentPage > countOfPagenation
      ? countOfPagenation
      : pages + currentPage);
    i++
  ) {
    numOfPages.push(i);
  }
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
                }}
              >
                Previous
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
                  }}
                >
                  {page}
                </button>
              </li>
            ))}

            <li
              className={
                currentPage === countOfPagenation
                  ? "page-item disabled"
                  : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => {
                  setCurrentPage((prev) =>
                    currentPage === countOfPagenation ? prev : prev + 1
                  );
                }}
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Pagination;
