import React, { useState, useEffect } from 'react';
import Cards from './cards';

const itemsPerPage = 20;

const Pagination = () => {
  const [MyArrayCard, setMyArrayCard] = useState([]);

  useEffect(() => {

    if (Array.isArray(Cards)) {
      setMyArrayCard(Cards);
    } else {

      console.error('Cards is not an array!');
    }
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = MyArrayCard.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(MyArrayCard.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <ul>
        {currentItems.map((card, index) => (
          <li key={index}>{card}</li>
        ))}
      </ul>

      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index} onClick={() => handleClick(index + 1)}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
