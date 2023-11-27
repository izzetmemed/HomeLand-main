import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Section from '../section';
import Search from '../search';
import axios from 'axios';
import Pagenation from '../pagenation';

const Cards = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
 const [click, setClick]=useState();
  const ClickFunc=(x)=>{
    setClick(x)
  }
  const sendDataToSelecedids=(x)=>{
    setSelectedIds(x)
  }
  const sendDataToHomeOrFlat=(x)=>{
    setHomeOrFlat(x)
  }
  const sendDataRegion=(x)=>{
    setRegion(x)
  }
  const sendDataRoom=(x)=>{
    setRoom(x)
  }
  const sendDataPrice=(x)=>{
    setPrice(x);
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
       const ArrayData=[];
      const resp = await axios.get("http://localhost:3000/Rent");
        if(click){
          const filteredArray = Array.from(resp.data).filter((x) => { 
            if (!(Number(x.Price) > Array.from(Price)[1] && Number(x.Price) < Array.from(Price)[0])) {
              return false;
            }
            if (HomeOrFlat.length !== 0 && !HomeOrFlat.includes(x.Bina)) {
              return false;
            }
          
            if (Room.length !== 0 && !Room.includes(x.Room)) {
              return false;
            }
          
            if (Region.length !== 0 && !Region.includes(x.Region)) {
              return false;
            }
          
            if (selectedIds.length !== 0 && !selectedIds.includes(x.Metro)) {
              return false;
            }
          
            return true;
          });
          ArrayData.push(...filteredArray);
          
         setFilteredData(ArrayData);
        }else{
          setFilteredData(resp.data)
        }

      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [selectedIds]);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(2);
  
  const setPage=(x)=>{
    setCurrentPage(x)
   }
const lastIndex=currentPage*itemCount;
const firstItem=lastIndex-itemCount;
const filteredDataSlice=filteredData.slice(firstItem,lastIndex);
const countOfPagenation =Math.ceil(filteredData.length/itemCount);
  return (
    <div>
      <Search   setFunc={sendDataToSelecedids} setHomeOrFlat={sendDataToHomeOrFlat} setRegion={sendDataRegion} setRoom={sendDataRoom} setPrice={sendDataPrice} setClick={ClickFunc}/>
      <div className='d-flex flex-wrap'>
        {filteredDataSlice.map((x) => (
          <Section
            id={x.id}
            type={"rentHome"}
            priceHome={x.Price}
            address={x.Street}
            MetroHome={x.Metro}
            Items={x.Furniture}
            roomHome={x.Room}
            WhoCanTake={x.WhoCan}
            measureHome={x.Area}
            dateTime={x.Date}
            key={x.Id} 
          />
        ))}
        {filteredDataSlice.length === 0 && (
          <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
            <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>
          </div>
        )}
      </div>
      <Outlet />
      <Pagenation countOfPagenation={countOfPagenation} setPage={setPage}/>
    </div>
  );
};

export default Cards;
