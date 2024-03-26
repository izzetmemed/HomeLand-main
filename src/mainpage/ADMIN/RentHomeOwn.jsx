import React from "react";
import SectionSell from "./Own/sectionOwn";
import { useState, useEffect } from "react";
import FetchGetAll from "../../MyComponents/FetchGetAll";
import Pagenation from "../../pagenation";
import {Load} from "../../Load/Load";
const RentHomeOwn = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await FetchGetAll('RentHome/Normal');
        const data = resp.data;
        setFilteredData(data);
      } catch (error) {
        setFilteredData([]);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(20);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);

  const parsedData = filteredDataSlice.map((jsonString) => JSON.parse(jsonString));

 const setPage=(x)=>{
  setCurrentPage(x)
 }
 const [showLoad, setShowLoad] = useState(true);

useEffect(() => {
  if (filteredDataSlice.length === 0) {
    const timer = setTimeout(() => setShowLoad(false), 5000);
    return () => clearTimeout(timer);
  } else {
    setShowLoad(false);
  }
}, [filteredDataSlice.length]);


  return (
    <div>
      <div className="d-flex flex-wrap">
        {parsedData.map((x) => ( 
          <SectionSell
            key={x.Id}
            props={x}
          />
        ))}
        {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
          </div>
        )}
      </div>
      <Pagenation countOfPagenation={countOfPagenation} setPage={setPage} />;
    </div>
  );
};

export default RentHomeOwn;
