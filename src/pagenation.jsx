import React, { useState } from "react";

const Pagination = ({ countOfPagenation, setCurrentP }) => {
  var pages = countOfPagenation;
  if (pages > 5) {
    pages = 5;
  }
  
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = [];
  
  for (var i = currentPage === 1 ? currentPage : currentPage - 1; i <= (pages + currentPage > countOfPagenation ? countOfPagenation : pages + currentPage); i++) {
    numOfPages.push(i);
  }

  
setCurrentP(currentPage);
  return (
    <div>
      <nav className="mt-5 mb-5">
        <div className="col-12 d-flex justify-content-center">
           <ul className="pagination">
          <li className={currentPage === 1 ? "page-item disabled" : "page-item"}>
            <button className="page-link"  onClick={() => { setCurrentPage((prev) => (currentPage === 1 ? prev : prev - 1)); }}>
              Previous
            </button>
          </li>
         
            {numOfPages.map((page,index)=>(
               <li class={currentPage===page? "page-item active-page":"page-item"}><button class="page-link" onClick={()=>{setCurrentPage(page)}}>{page}</button></li>
            ))}
         
          <li className={currentPage === numOfPages.length ? "page-item disabled" : "page-item"}>
            <button className="page-link" onClick={() => { setCurrentPage((prev) => (currentPage === numOfPages.length ? prev : prev + 1)); }}>
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
