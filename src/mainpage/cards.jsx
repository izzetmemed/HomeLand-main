import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Section from '../section';
import Search from '../search';
import Pagenation from '../pagenation';
import {Load} from "../Load/Load"
import Scroll from '../MyComponents/Scroll';
import RecommendRent from './RecommendRent';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, setPage } from '../Redux/RentGet';

const Cards = () => {
  Scroll();
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
  const [click, setClick]=useState();
  const dispatch = useDispatch();
  const GetData = useSelector((state) => state.GetAll.data);
  const currentPageR = useSelector((state) => state.GetAll.currentPage);
  const totalPages = useSelector((state) => state.GetAll.totalPages);
  const hasFetched = useSelector((state) => state.GetAll.hasFetched);
  const SearchFalse = useSelector((state) => state.GetAll.SearchBool);
  const SearchRedux = useSelector((state) => state.GetAll.SearchModel);
  var obj = {
    "minPrice": parseInt(Price[1], 10),
    "maxPrice": parseInt(Price[0], 10),
    "metro": selectedIds,
    "region": Region,
    "room": Room,
    "building": HomeOrFlat
  };
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
      console.log(obj)
      dispatch(fetchData({ page: 1,SearchBool: true ,searchModel:obj}));
    }
  }, [Region,Price,selectedIds,Room,HomeOrFlat]);
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
      <Search RefuseFunction={RefuseSearch}  setFunc={setSelectedIds} setHomeOrFlat={setHomeOrFlat} setRegion={setRegion} setRoom={setRoom} setPrice={setPrice} setClick={setClick}/>
     <RecommendRent/>
      <div className='d-flex flex-wrap'>
        {parsedData.map((x,index) => (
          <Section
            props={x}
            key={index} 
          />
        ))}
        {parsedData.length === 0 && (
          <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
           {showLoad ? <Load/> :  <p className='fs-3'>Ev tapılmadı.</p>} 
          </div>
        )}
      </div>
      <Outlet />
      <Pagenation countOfPagination={totalPages} setPage={handlePageChange} current={currentPageR}/>
    </div>
  )
}

export default Cards;
