import React from "react";
import SectionSell from "./SectionSell";
import Search from "./searchSell";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Pagenation from "../pagenation";
import {Load} from "../Load/Load";
import Scroll from "../MyComponents/Scroll";
import RecommendSell from "./RecommendSell";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../Redux/SellGet';
const CardsSell = () => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
  Scroll();
  var obj = {
    "minPrice": parseInt(Price[1], 10),
    "maxPrice": parseInt(Price[0], 10),
    "metro": selectedIds,
    "region": Region,
    "room": Room,
    "building": HomeOrFlat
  }
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.Sell.data);
  const currentPageR = useSelector((state) => state.Sell.currentPage);
  const totalPages = useSelector((state) => state.Sell.totalPages);
  const hasFetched = useSelector((state) => state.Sell.hasFetched);
  const SearchFalse = useSelector((state) => state.Sell.SearchBool);
  const SearchRedux = useSelector((state) => state.Sell.SearchModel);

  useEffect(() => {
    if (!hasFetched) {
      dispatch(fetchData({ page: currentPageR,SearchBool:false}));
    }
  }, [dispatch, hasFetched, currentPageR]);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      dispatch(setPage(newPage));
      dispatch(fetchData({ page: newPage,SearchBool:SearchFalse,searchModel:SearchRedux}));
    }
  };
  const RefuseSearch=()=>{
    dispatch(setPage(1));
    dispatch(fetchData({ page: 1,SearchBool:false}));
  }
  useEffect(() => {
    if(Price.length>0){
      dispatch(setPage(1));
      dispatch(fetchData({ page: 1,SearchBool: true ,searchModel:obj}));
    }
  }, [Region,Price]);
  const parsedData = GetData.data.map((jsonString) => JSON.parse(jsonString));
  const [showLoad, setShowLoad] = useState(true);
useEffect(() => {
  if (parsedData.length === 0) {
    const timer = setTimeout(() => setShowLoad(false), 10000);
    return () => clearTimeout(timer);
  } else {
    setShowLoad(false);
  }
}, [parsedData.length]);

  return (
    <div>
      <Search
        setFunc={setSelectedIds}
        setHomeOrFlat={setHomeOrFlat}
        setRegion={setRegion}
        setRoom={setRoom}
        setPrice={setPrice}
        RefuseFunction={RefuseSearch}
      />
          <RecommendSell/>
      <div className="d-flex flex-wrap">
        {parsedData.map((x,index) => (
          <SectionSell
            props={x}
            key={index}
          />
        ))}
        {parsedData.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 '>Ev tapılmadı.</p>} 
          </div>
        )}
      </div>
      <Outlet />
      <Pagenation countOfPagination={totalPages} setPage={handlePageChange} current={currentPageR}/>
    </div>
  );
};

export default CardsSell;
