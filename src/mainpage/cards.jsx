import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Section from '../section';
import Search from '../search';
import axios from 'axios';

const Cards = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
 
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
    setPrice(x)
  }
  useEffect(() => {
    console.log(Price);
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/Rent");
        if(selectedIds.length!=0 || HomeOrFlat.length!=0){  
        const filtered = resp.data.filter((x) =>{if (selectedIds.length !== 0 ) {
          if(selectedIds.includes(x.Metro)){
             return true;
          }else{
            return false
          }
         
         
        }
        if (HomeOrFlat.length !== 0  ) {
          if(HomeOrFlat.includes(x.Bina)){
            return true;
          }else{
            return false
          }
        
          
        }});
        
        setFilteredData(filtered); 
        }

        else{
        setFilteredData(resp.data);
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      console.log(HomeOrFlat);
    };
  
    fetchData();
  }, [selectedIds]);
  

  return (
    <div>
      <Search   setFunc={sendDataToSelecedids} setHomeOrFlat={sendDataToHomeOrFlat} setRegion={sendDataRegion} setRoom={sendDataRoom} setPrice={sendDataPrice}/>
      <div className='d-flex flex-wrap'>
        {filteredData.map((x) => (
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
      </div>
      <Outlet />
    </div>
  );
};

export default Cards;
