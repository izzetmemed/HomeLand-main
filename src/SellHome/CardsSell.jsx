import React from 'react'
import SectionSell from './SectionSell';
import Search  from './searchSell';
import axios  from 'axios';
import { useState,useEffect } from 'react';
import { Outlet } from 'react-router-dom';
const CardsSell = () => {
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
      const resp = await axios.get("http://localhost:3000/Sell");
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
  

  return (
    <div>
      <Search  setFunc={sendDataToSelecedids} setHomeOrFlat={sendDataToHomeOrFlat} setRegion={sendDataRegion} setRoom={sendDataRoom} setPrice={sendDataPrice} setClick={ClickFunc} />
      <div className='d-flex flex-wrap'>
      {filteredData.map((x) => (
          <SectionSell
            id={x.id}
            type={"sellHome"}
            priceHome={x.Price}
            address={x.Street}
            MetroHome={x.Metro}
            Items={x.Furniture}
            roomHome={x.Room}
            WhoCanTake={x.WhoCan}
            measureHome={x.Area}
            Sənəd={x.Sənəd}
            dateTime={x.Date}
            key={x.Id} 
          />
        ))}
        {filteredData.length === 0 && (
          <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
            <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>
          </div>
        )}

           
           
      </div>
      <Outlet/>
    </div>
  )
}

export default CardsSell