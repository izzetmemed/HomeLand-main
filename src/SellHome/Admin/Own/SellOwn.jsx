import React from "react";
import SellSectionOwn from "./SellSectionOwn";
import { useState, useEffect } from "react";
import Pagenation from "../../../pagenation";
import {Load} from "../../../Load/Load";
import FetchGetAll from "../../../MyComponents/FetchGetAll";
const RentHomeOwn = () => {
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await FetchGetAll('Sell/Normal');
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
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };
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
          <SellSectionOwn
            id={x.Id}
            priceHome={x.Price}
            address={x.Address}
            MetroHome={x.Metro}
            Items={x.Item}
            roomHome={x.Room}
            Region={x.Region}
            measureHome={x.Area}
            Sənəd={x.Document}
            dateTime={convertDate(x.Date)}
            imgNames={x.Img}
            key={x.Id}
            data={x}
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
