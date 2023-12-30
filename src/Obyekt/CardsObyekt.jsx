import { useState,useEffect } from 'react';
import React  from 'react'
import SectionObyect from './SectionObyekt';
import SearchObyekt  from './searchObyekt';
import { Outlet } from 'react-router-dom';
import Pagenation from '../pagenation';
import  axios from 'axios';
import {Load} from '../Load/Load';
const CardsObyekt = () => {

  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
  const [click, setClick] = useState();

  const ClickFunc = (x) => {
    setClick(x);
  };
  const sendDataToSelecedids = (x) => {
    setSelectedIds(x);
  };
  const sendDataToHomeOrFlat = (x) => {
    setHomeOrFlat(x);
  };
  const sendDataRegion = (x) => {
    setRegion(x);
  };
  const sendDataRoom = (x) => {
    setRoom(x);
  };
  const sendDataPrice = (x) => {
    setPrice(x);
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const ArrayData = [];
        const resp = await axios.get("http://localhost:5224/api/Obyekt");
        if (click) {
          const filteredArray = Array.from(resp.data).filter((x) => {
            if (
              !(
                Number(x.Price) > Array.from(Price)[1] &&
                Number(x.Price) < Array.from(Price)[0]
              )
            ) {
              return false;
            }
            if (HomeOrFlat.length !== 0 && !HomeOrFlat.includes(x.SellorRent)) {
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
        } else {
          setFilteredData(resp.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedIds]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(20);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);

 const setPage=(x)=>{
  setCurrentPage(x)
 }
 const convertDate = (x) => {
  return x.toString().replace("T", " ").substring(0, 16);
};
const parsedData = filteredDataSlice.map((jsonString) => JSON.parse(jsonString));

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
      <SearchObyekt
      setFunc={sendDataToSelecedids}
      setHomeOrFlat={sendDataToHomeOrFlat}
      setRegion={sendDataRegion}
      setRoom={sendDataRoom}
      setPrice={sendDataPrice}
      setClick={ClickFunc}
      />
      <div className='d-flex flex-wrap'>
      {parsedData.map((x) => (
          <SectionObyect
            id={x.Id}
            type={"obyekt"}
            priceHome={x.Price}
            Region={x.Region}
            address={x.Address}
            SellorRent={x.SellorRent}
            MetroHome={x.Metro}
            Items={x.İtem}
            roomHome={x.Room}
            WhoCanTake={x.WhoCan}
            measureHome={x.Area}
            Sənəd={x.Document}
            dateTime={convertDate(x.Date)}
            imgNames={x.Img}
            key={x.Id}
          />
        ))}
      
      
      {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
          </div>
        )}
      </div>
      <Outlet/>
      
         <Pagenation countOfPagenation={countOfPagenation} setPage={setPage} />
    </div>
  )
}

export default CardsObyekt