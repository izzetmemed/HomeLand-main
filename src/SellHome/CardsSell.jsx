import React from "react";
import SectionSell from "./SectionSell";
import Search from "./searchSell";
import FetchGetAll from "../MyComponents/FetchGetAll";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Pagenation from "../pagenation";
import {Load} from "../Load/Load";
import Scroll from "../MyComponents/Scroll";
import RecommendSell from "./RecommendSell";
const CardsSell = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
  const [click, setClick] = useState();
  Scroll();
  var works=true;
  useEffect(() => {
    const fetchData = async () => {
      const RoomInt=Room.map(x=>Number(x));
      try {
        if(click){
          works=true;
        }
        if(works){
          works=false;
        const ArrayData = [];
        const resp =  await FetchGetAll("Sell");
        if (click) {
          const filteredArray = Array.from(resp.data).filter((x) => {console.log(JSON.parse(x)) 
            
            if (!(Number(JSON.parse(x).Price) > Array.from(Price)[1] && Number(JSON.parse(x).Price) < Array.from(Price)[0])) {
              return false;
            }
            if (HomeOrFlat.length !== 0 && !HomeOrFlat.includes(JSON.parse(x).Building)) {
              return false;
            }
          
            if (RoomInt.length !== 0 && !RoomInt.includes(JSON.parse(x).Room)) {
              return false;
            }
          
            if (Region.length !== 0 && !Region.includes(JSON.parse(x).Region)) {
              return false;
            }
          
            if (selectedIds.length !== 0 && !selectedIds.includes(JSON.parse(x).Metro)) {
              return false;
            }
          
            return true;
          });
          ArrayData.push(...filteredArray);

          setFilteredData(ArrayData);
        } else {
          setFilteredData(resp.data);
        }}
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [click,selectedIds]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(20);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);
  const parsedData = filteredDataSlice.map((jsonString) => JSON.parse(jsonString));
  const [showLoad, setShowLoad] = useState(true);

useEffect(() => {
  if (filteredDataSlice.length === 0) {
    const timer = setTimeout(() => setShowLoad(false), 10000);
    return () => clearTimeout(timer);
  } else {
    setShowLoad(false);
  }
}, [filteredDataSlice.length]);


  return (
    <div>
      <Search
        setFunc={setSelectedIds}
        setHomeOrFlat={setHomeOrFlat}
        setRegion={setRegion}
        setRoom={setRoom}
        setPrice={setPrice}
        setClick={setClick}
      />
          <RecommendSell/>
      <div className="d-flex flex-wrap">
        {parsedData.map((x,index) => (
          <SectionSell
            props={x}
            key={index}
          />
        ))}
        {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 '>Ev tapılmadı.</p>} 
          </div>
        )}
      </div>
      <Outlet />
      <Pagenation countOfPagenation={countOfPagenation} setPage={setCurrentPage} />
    </div>
  );
};

export default CardsSell;
