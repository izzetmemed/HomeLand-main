import React from "react";
import SellSectionOwn from "./LandSectionOwn";
import { useState, useEffect } from "react";
import Pagenation from "../../../pagenation";
import {Load} from "../../../Load/Load";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../../../Redux/LandAdmin';

const LandOwn = () => {
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.LandAdmin.data);
  const currentPageR = useSelector((state) => state.LandAdmin.currentPage);
  const totalPages = useSelector((state) => state.LandAdmin.totalPages);
  const hasFetched = useSelector((state) => state.LandAdmin.hasFetched);

  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchData({ page: currentPageR }));
    }
  }, [dispatch, hasFetched, currentPageR]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
      dispatch(fetchData({ page: newPage }));
    }
  };
  const parsedData = GetData.data.map((jsonString) => JSON.parse(jsonString));
  const [showLoad, setShowLoad] = useState(true);
  useEffect(() => {
    if (parsedData.length === 0) {
      const timer = setTimeout(() => setShowLoad(false), 5000);
      return () => clearTimeout(timer);
    } else {
      setShowLoad(false);
    }
  }, [parsedData.length]);
  
  return (
    <div>
    <div className="d-flex flex-wrap">
      {parsedData.map((x) => ( 
        <SellSectionOwn
          key={x.Id}
          props={x}
        />
      ))}
      {parsedData.length === 0 && (
        <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
          {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
        </div>
      )}
    </div>
    <Pagenation countOfPagination={totalPages} setPage={handlePageChange} current={currentPageR}/>
    </div>
  )
}

export default LandOwn