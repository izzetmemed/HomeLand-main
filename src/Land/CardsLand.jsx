import React from 'react'
import SectionLand from "./SectionLand";
import Search from "./SearchLand";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Pagenation from "../pagenation";
import {Load} from "../Load/Load";
import Scroll from "../MyComponents/Scroll";
import RecommendLand from './RecommendLand';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../Redux/LandGet';
const CardsLand = () => {
    const [Region, setRegion] = useState([]);
    const [Price, setPrice] = useState([]);
    var obj = {
      "minPrice": parseInt(Price[1], 10),
      "maxPrice": parseInt(Price[0], 10),
      "metro": [],
      "region": Region,
      "room": [],
      "building": []
    }; 
    Scroll();
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.Land.data);
  const currentPageR = useSelector((state) => state.Land.currentPage);
  const totalPages = useSelector((state) => state.Land.totalPages);
  const hasFetched = useSelector((state) => state.Land.hasFetched);
  const SearchFalse = useSelector((state) => state.Land.SearchBool);
  const SearchRedux = useSelector((state) => state.Land.SearchModel);

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
        RefuseFunction={RefuseSearch}
        setRegion={setRegion}
        setPrice={setPrice}
      />
      <RecommendLand/>
      <div className="d-flex flex-wrap">
        {parsedData.map((x,index) => (
          <SectionLand
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
  )
}

export default CardsLand