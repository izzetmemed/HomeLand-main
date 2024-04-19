import { useState, useEffect } from "react";
import React from "react";
import Coordinate from "./answer/coordinate";
import { useParams } from "react-router-dom";
import GetBack from "../MyComponents/GetBack";
import Scroll from "../MyComponents/Scroll";
import CallToMakler from "../MyComponents/CallToMakler";
import TurnImgIn from "../MyComponents/TurnImgIn";
import FetchGetId from "../MyComponents/FetchGetId";
import Share from "../MyComponents/Share";
import AddTerritory from "../MyComponents/AddTerritory";
import AddPrice from "../MyComponents/AddPrice";
import DateCutting from "../MyComponents/DateCutting";
import GetImg from "../MyComponents/GetImg";
const İnsideCard = () => {
  const { id } = useParams();
  const [MaklerNumber,setMaklerNumber]=useState(false)
  const [keepingImgSource,setKeepingImgSource] = useState([]);

  Scroll();
  var [GetById, setGetById] = useState(null);
  const getByIdData = FetchGetId(id, 'RentHome');
  useEffect(() => {
    setGetById(getByIdData);
   }, [getByIdData]);
   

  const imageUrls = GetImg(GetById?.img);

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
              <div className="w-100 h-auto d-flex justify-content-center">
              <p>
                Baxış:<span className="address-home ms-1">{GetById.looking}</span>
              </p>
              </div>
              <p>
                Qiymet:<span className="price-home">{AddPrice(GetById.price)}</span>
              </p>
              <p>
                Ünvan:<span className="address-home">{GetById.address}</span>
              </p>
              <p>
                Metro:<span className="address-home">{GetById.metro}</span>
              </p>
              <p>
                Rayon:<span className="address-home">{GetById.region}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{GetById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {AddTerritory(GetById.area) }
                </span>
              </p>
              <p>
                Ev kimə verilir:
                <span className="time-home">
                  {[
                    GetById.family && "Ailə",
                    GetById.boy && "Oğlan tələbələrə",
                    GetById.girl && "Xanımlar",
                    GetById.workingBoy && "İşləyən bəylərə",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>

              <p>
                Əşya:<span className="time-home">{GetById.item}</span>
              </p>
              <p>
                Təmir:<span className="time-home">{GetById.repair}</span>
              </p>
              <p>
                Mərtəbə:<span className="time-home">{GetById.floor}</span>
              </p>
              <p>
                Bina:<span className="time-home">{GetById.building}</span>
              </p>
              <p>
                Evdə olan Əşyalar:
                <span className="time-home">
                  {[
                    GetById.bed && "Yataq",
                    GetById.wardrobe && "Dolab",
                    GetById.tableChair && "Masa və Stol",
                    GetById.centralHeating && "Mərkəzi İstilik sistemi",
                    GetById.gasHeating && "Qaz İstilik sistemi",
                    GetById.combi && "Kombi",
                    GetById.tv && "Televizor",
                    GetById.washingClothes && "Paltar Yuyan",
                    GetById.airConditioning && "Kondisioner",
                    GetById.sofa && "Divan",
                    GetById.wifi && "Wi-Fi",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>
              {/* <p>
                Evi tutduğunuz halda əmlakçıya verəcəyiniz ödəniş:
                <span className="time-home">
                {AddPrice( GetById.price * 20 /100)}
                </span>
              </p> */}
              {GetById.addition
               && (
                <p>
                Ətraflı:<span className="measure-home">{GetById.addition}</span>
              </p>
               )
               }
              <p>
                Tarix:<span className="time-home">{DateCutting(GetById.date)}</span>
              </p>
              <div className="h-auto my-3">
              <Coordinate  CanClick={false} Xvalue={GetById.coordinateX} Yvalue={GetById.coordinateY}/>
              </div>

              <GetBack Direct={"/"}/>
              <div className="d-flex justify-content-center w-100 ">
                <div >
                  <button className="btn btn-mycolor height-for-calling fs-5 " onClick={()=>{setMaklerNumber(!MaklerNumber)}}>
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
          <Share Link={`HomeLand.az/Kart/${id}`}/>
        </div>
      </div>
    </div>
  );
};

export default İnsideCard;
