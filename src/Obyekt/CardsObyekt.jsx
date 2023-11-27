import { useState,useEffect } from 'react';
import React  from 'react'
import SectionObyect from './SectionObyekt';
import SearchObyekt  from './searchObyekt';
import { Outlet } from 'react-router-dom';
import Pagenation from '../pagenation';
import  axios from 'axios';
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
        const resp = await axios.get("http://localhost:3000/obyekt");
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
  const [itemCount, setItemCount] = useState(1);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);

 const setPage=(x)=>{
  setCurrentPage(x)
 }
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
      {filteredDataSlice.map((x) => (
          <SectionObyect
            id={x.id}
            type={"obyekt"}
            priceHome={x.Price}
            Region={x.Region}
            address={x.Street}
            SellorRent={x.SellorRent}
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
      
      
      {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            <p className="fs-3 text-danger">Ev tapılmadı!!!</p>
          </div>
        )}
      </div>
      <Outlet/>
      
         <Pagenation countOfPagenation={countOfPagenation} setPage={setPage} />
    </div>
  )
}

export default CardsObyekt