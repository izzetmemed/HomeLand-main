import React from "react";
import SectionSell from "./SectionSell";
import Search from "./searchSell";
import FetchGetAll from "../MyComponents/FetchGetAll";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Pagenation from "../pagenation";
import {Load} from "../Load/Load";
import Scroll from "../MyComponents/Scroll";
const CardsSell = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [HomeOrFlat, setHomeOrFlat] = useState([]);
  const [Region, setRegion] = useState([]);
  const [Room, setRoom] = useState([]);
  const [Price, setPrice] = useState([]);
  const [click, setClick] = useState();
  Scroll();
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
  var works=true;
  useEffect(() => {
    const fetchData = async () => {
      const RoomInt=Room.map(x=>Number(x));
      try {
        if(click){
          works=true
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
          //   if (
          //     !(
          //       Number(JSON.parse(x).Price) > Array.from(Price)[1] &&
          //       Number(JSON.parse(x).Price) < Array.from(Price)[0]
          //     )
          //   ) {
          //     console.log("price")
          //     return false;
          //   }
          //   console.log(JSON.parse(x).Building)
          //   if (HomeOrFlat.length !== 0 && !HomeOrFlat.includes(JSON.parse(x).Building)) {
          //     console.log(HomeOrFlat)
              
          //     return false;
          //   }

          //   if (Room.length !== 0 && !Room.includes(JSON.parse(x).Room)) {
          //     return false;
          //   }

          //   if (Region.length !== 0 && !Region.includes(JSON.parse(x).Region)) {
          //     return false;
          //   }

          //   if (selectedIds.length !== 0 && !selectedIds.includes(JSON.parse(x).Metro)) {
          //     return false;
          //   }

          //   return true;
          // });
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
    const timer = setTimeout(() => setShowLoad(false), 10000);
    return () => clearTimeout(timer);
  } else {
    setShowLoad(false);
  }
}, [filteredDataSlice.length]);


  return (
    <div>
      <Search
        setFunc={sendDataToSelecedids}
        setHomeOrFlat={sendDataToHomeOrFlat}
        setRegion={sendDataRegion}
        setRoom={sendDataRoom}
        setPrice={sendDataPrice}
        setClick={ClickFunc}
      />
      <div className="d-flex flex-wrap">
        {parsedData.map((x) => (
          <SectionSell
            id={x.Id}
            type={"sellHome"}
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
          />
        ))}
        {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 '>Ev tapılmadı.</p>} 
          </div>
        )}
      </div>
      <Outlet />
      <Pagenation countOfPagenation={countOfPagenation} setPage={setPage} />
    </div>
  );
};

export default CardsSell;
