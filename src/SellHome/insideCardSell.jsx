import { useState, useEffect } from "react";
import React from "react";
import Coordinate from "../mainpage/answer/coordinate";
import { useParams } from "react-router-dom";
import GetBack from "../MyComponents/GetBack";
import Scroll from "../MyComponents/Scroll";
import TurnImgIn from "../MyComponents/TurnImgIn";
import CallToMakler from "../MyComponents/CallToMakler";
import FetchGetId from "../MyComponents/FetchGetId";
import UseFetchData from "../MyComponents/FetchImg";
import Share from '../MyComponents/Share';
import DateCutting from "../MyComponents/DateCutting"
import AddPrice from "../MyComponents/AddPrice";
import AddTerritory from "../MyComponents/AddTerritory";
const İnsideCardSell = () => {
  const { id } = useParams();
  Scroll();
  const [keepingImgSource,setKeepingImgSource] = useState([]);
  var [getById, setGetById] = useState(null);
  const [MaklerNumber,setMaklerNumber]=useState(false)
 
  const getByIdData = FetchGetId(id, 'Sell');
  useEffect(() => {
    setGetById(getByIdData);
   }, [getByIdData]);
   

  const imageUrls = UseFetchData(getById?.img, 'SellImg');

  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [getById]);
  
  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
          <TurnImgIn keepingImgSource={keepingImgSource}/>
            <div className="logo-on-images d-flex justify-content-center ">
              <p >HomeLand.az</p>
            </div>
          </div>
          {getById && ( 
            <div className="pb-2 mt-3 pe-2">
              <p>
                Qiymet:<span className="price-home">{AddPrice(getById.price)}</span>
              </p>
              <p>
                Ünvan:<span className="address-home">{getById.address}</span>
              </p>
              <p>
                Metro:<span className="address-home">{getById.metro}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{getById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {AddTerritory(getById.area)}
                </span>
              </p>
              {getById.addition
               && (
                <p>
                Ətraflı:<span className="measure-home">{getById.addition}</span>
              </p>
               )
               }
              <p>
                Əşya:<span className="time-home">{getById.item}</span>
              </p>
              <p>
                Təmir:<span className="time-home">{getById.repair}</span>
              </p>
              <p>
                Mərtəbə:<span className="time-home">{getById.floor}</span>
              </p>
              <p>
                Bina:<span className="time-home">{getById.building}</span>
              </p>
              
              <p>
                Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                <span className="time-home">
                {AddPrice(getById.price * 1 /100)}
                </span>
              </p>
              <p>
                Tarix:<span className="time-home">{DateCutting(getById.date)}</span>
              </p>
              <div className="height-for-coordiante mt-2 mb-2 p-4">
                <Coordinate CanClick={false} Xvalue={getById.coordinateX} Yvalue={getById.coordinateY}/>
              </div>
              <GetBack Direct={"/Sell"}/>
              <div className="d-flex justify-content-center w-100 ">
                <div >
                  <button className="btn btn-mycolor height-for-calling fs-5 " onClick={()=>{setMaklerNumber(!MaklerNumber)}}>
                    <i className="fa-solid fa-phone"></i> Əmlakçıya zəng etmək.
                  </button>
                 {
                  MaklerNumber &&(
                   <CallToMakler id={getById.id}/>
                  )
                 } 
                </div>
              </div>
            </div>
          )}
          <Share Link={`HomeLand.az/Sell/Kart/${id}`}/>
        </div>
      </div>
      {/* <div className="mt-5">
        <CardsSell />
      </div> */}
    </div>
  );
};

export default İnsideCardSell;
