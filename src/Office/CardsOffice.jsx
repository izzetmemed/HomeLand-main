import React from "react";
import SectionOffice from "./SectionOffice";
import Search from "./SearchOffice";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Pagenation from "../pagenation";
import {Load} from "../Load/Load";
import Scroll from "../MyComponents/Scroll";
import RecommendOffice from "./RecommendOffice";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../Redux/OfficeGet';
const CardsOffice = () => {
    const [selectedIds, setSelectedIds] = useState([]);
    const [HomeOrFlat, setHomeOrFlat] = useState([]);
    const [Region, setRegion] = useState([]);
    const [Room, setRoom] = useState([]);
    const [Price, setPrice] = useState([]);
    var obj = {
      "minPrice": parseInt(Price[1], 10),
      "maxPrice": parseInt(Price[0], 10),
      "metro": selectedIds,
      "region": Region,
      "room": Room,
      "building": HomeOrFlat
    };
    Scroll();
    const dispatch = useDispatch();
    const GetData = useSelector((state) => state.Office.data);
    const currentPageR = useSelector((state) => state.Office.currentPage);
    const totalPages = useSelector((state) => state.Office.totalPages);
    const hasFetched = useSelector((state) => state.Office.hasFetched);
    const SearchFalse = useSelector((state) => state.Office.SearchBool);
    const SearchRedux = useSelector((state) => state.Office.SearchModel);
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
    <RecommendOffice/>
    <div className="d-flex flex-wrap">
      {parsedData.map((x,index) => (
        <SectionOffice
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

export default CardsOffice