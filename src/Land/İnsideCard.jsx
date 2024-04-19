import { useState, useEffect } from "react";
import React from "react";
import Coordinate from "../mainpage/answer/coordinate";
import { useParams } from "react-router-dom";
import GetBack from "../MyComponents/GetBack";
import Scroll from "../MyComponents/Scroll";
import TurnImgIn from "../MyComponents/TurnImgIn";
import CallToMakler from "../MyComponents/CallToMakler";
import FetchGetId from "../MyComponents/FetchGetId";
import DateCutting from "../MyComponents/DateCutting";
import GetImg from "../MyComponents/GetImg";
import AddPrice from "../MyComponents/AddPrice";
import AddTerritory from "../MyComponents/AddTerritory";
const İnsideCard = () => {
    const { id } = useParams();
  Scroll();
  const [keepingImgSource,setKeepingImgSource] = useState([]);
  var [getById, setGetById] = useState(null);
  const [MaklerNumber,setMaklerNumber]=useState(false)
 
  const getByIdData = FetchGetId(id, 'Land');
  useEffect(() => {
    setGetById(getByIdData);
   }, [getByIdData]);
  const imageUrls =GetImg(getById?.img);

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
             <div className="w-100 h-auto d-flex justify-content-center">
              <p>
                Baxış:<span className="address-home ms-1">{getById.looking}</span>
              </p>
              </div>
            <p>
              Qiymet:<span className="price-home">{AddPrice(getById.price)}</span>
            </p>
            <p>
              Ünvan:<span className="address-home">{getById.address}</span>
            </p>
            <p>
              Rayon:<span className="address-home">{getById.region}</span>
            </p>
            <p>
              Sənəd:<span className="address-home">{getById.document}</span>
            </p>
        
            <p>
              Sahe:
              <span className="measure-home">
                {AddTerritory(getById.area,true)}
              </span>
            </p>
           
            {/* <p>
              Torpağı aldığınız halda əmlakçıya verəcəyiniz ödəniş:
              <span className="time-home">
              {AddPrice(getById.price * 1 /100)}
              </span>
            </p> */}
             {getById.addition
             && (
              <p>
              Ətraflı:<span className="measure-home">{getById.addition}</span>
            </p>
             )
             }
            <p>
              Tarix:<span className="time-home">{DateCutting(getById.date)}</span>
            </p>
            <div className="height-for-coordiante mt-2 mb-2 p-4">
              <Coordinate CanClick={false} Xvalue={getById.coordinateX} Yvalue={getById.coordinateY}/>
            </div>
            <GetBack Direct={"/Land"}/>
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

      </div>
    </div>
  </div>
  )
}

export default İnsideCard