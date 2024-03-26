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
import GetImg from "../MyComponents/GetImg";
const InCardObyekt = () => {
  const { id } = useParams();
  const [MaklerNumber,setMaklerNumber]=useState(false)
  const [keepingImgSource,setKeepingImgSource] = useState([]);

 Scroll()
  var [GetById, setGetById] = useState(null);
  const getByIdData = FetchGetId(id, 'Obyekt');
  useEffect(() => {
    setGetById(getByIdData);
   }, [getByIdData]);
   

  const imageUrls =GetImg(GetById?.img);

  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [GetById]);
  
  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
          <TurnImgIn keepingImgSource={keepingImgSource}/>
            <div className="logo-on-images d-flex justify-content-center ">
              <p>HomeLand.az</p>
            </div>
          </div>
          {GetById && (
            <div className="pb-2 mt-3 pe-2">
              <p>
                Qiymet:<span className="price-home">{AddPrice(GetById.price) }</span>
              </p>
              <p>
                Ünvan:<span className="address-home">{GetById.address}</span>
              </p>
              <p>
                Metro:<span className="address-home">{GetById.metro}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{GetById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {AddTerritory(GetById.area)}
                </span>
              </p>
              {GetById.addition
               && (
                <p>
                Ətraflı:<span className="measure-home">{GetById.addition}</span>
              </p>
               )
               }
              <p>
                Obyekt:<span className="time-home">{GetById.sellorRent}</span>
              </p>
              {GetById.sellorRent==="Satılır" && (
                <p>
                Sənəd:<span className="time-home">{GetById.document}</span>
              </p>
              )
              }
              <p>
                Təmir:<span className="time-home">{GetById.repair}</span>
              </p>
              <p>
              Obyekti tutduğunuz halda əmlakçıya verəcəyiniz ödəniş:
             
            {GetById.sellorRent==='Satılır' ?  <span className="time-home">{AddPrice(GetById.price * 1 /100) }
             </span> :  <span className="time-home">{AddPrice(GetById.price * 20 /100) }
             </span>}
            
           </p>
              <p>
                Tarix:<span className="time-home">{DateCutting(GetById.date)}</span>
              </p>
              <div className="h-auto mb-3">
               
              <Coordinate  CanClick={false} Xvalue={GetById.coordinateX} Yvalue={GetById.coordinateY}/>
              </div>

              <GetBack Direct={"/Obyekt"}/>
              <div className="d-flex justify-content-center w-100 ">
                <div >
                  <button className="btn btn-mycolor height-for-calling fs-5" onClick={()=>{setMaklerNumber(!MaklerNumber)}}>
                    <i className="fa-solid fa-phone"></i> Əmlakçıya zəng etmək.
                  </button>
                 {
                  MaklerNumber &&(
                   <CallToMakler id={GetById.id}/>
                  )
                 } 
                </div>
              </div>
            </div>
          )}
          <Share Link={`HomeLand.az/Obyekt/Kart/${id}`}/>
        </div>
      </div>
      {/* <div className="mt-5">
        <Cards />
      </div> */}
    </div>
  );
};

export default InCardObyekt;
