import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Update from "../../../Obyekt/ObyektForm";
import FetchGetId from "../../../MyComponents/FetchGetId";
import UseFetchData from "../../../MyComponents/FetchImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import GetBack from "../../../MyComponents/GetBack";
import DateCutting from "../../../MyComponents/DateCutting";
import GetImg from "../../../MyComponents/GetImg";
import AddPrice from "../../../MyComponents/AddPrice";
import AddTerritory from "../../../MyComponents/AddTerritory";
const ObyektInsideOwn = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [keepingImgSource, setKeepingImgSource] = useState([]);
  var [getById, setGetById] = useState(null);
    const handleClick = () => {
      navigate(`/HomeLogin/MainAdmin/Obyekt/Img/Update/${id}`);
    };
  const getByIdData = FetchGetId(id, "Obyekt/Admin");
  useEffect(() => {
    setGetById(getByIdData);
  }, [getByIdData]);

  if(getById){
    var imageUrls =GetImg(getById.img);
  }else{
    imageUrls=[];
  }
  useEffect(() => {
    setKeepingImgSource(imageUrls);
  }, [getById, imageUrls]);

  const deleteItem = async () => {
    await FetchDelete(getById.id, "Obyekt");
    navigate("/HomeLogin/MainAdmin/Obyekt/own");
  };
  const [isTrueUpdate, setIsTrueUpdate] = useState(false);
  const UpdateItem = () => {
    setIsTrueUpdate(true);
  };
  const UpdateItemFalse = () => {
    setIsTrueUpdate(false);
  };
  return (
    <div>
      {!isTrueUpdate && (
        <div className=" col-12 p-2 mt-4 ps-2">
          <div className="insideCard-home">
            <div className="overflow-hidden">
              <TurnImgIn keepingImgSource={keepingImgSource} />
            </div>

            {getById && (
              <div className="pb-2 mt-3">
                <GetBack Direct={"/HomeLogin/MainAdmin/Obyekt/Own"} />
                <p>
                  Qiymet:<span className="price-home">{AddPrice(getById.price) }</span>
                </p>
                <p>
                  Ev sahibi:
                  <span className="price-home">{getById.fullname}</span>
                </p>
                <p>
                  Nömrəsi:<span className="price-home">{getById.number}</span>
                </p>
                <p>
                Email:<span className="price-home">{getById.email}</span>
              </p>
                <p>
                  Kod:<span className="price-home">{getById.id}</span>
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
                    {AddTerritory(getById.area) }
                  </span>
                </p>
                {getById.addition && (
                  <p>
                    Ətraflı:
                    <span className="measure-home">{getById.addition}</span>
                  </p>
                )}
                <p>
                  Əşya:<span className="time-home">{getById.İtem}</span>
                </p>
                <p>
                  Təmir:<span className="time-home">{getById.repair}</span>
                </p>
                <p>
                  Obyekt:<span className="time-home">{getById.sellorRent}</span>
                </p>
                {getById.sellorRent === "Satılır" && (
                  <p>
                    Sened:<span className="time-home">{getById.document}</span>
                  </p>
                )}

                <p>
                  Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                  {getById.sellorRent === "Satılır" ? (
                    <span className="time-home">
                      {AddPrice((getById.price * 1) / 100)}
                    </span>
                  ) : (
                    <span className="time-home">
                      {AddTerritory((getById.price * 20) / 100)}
                    </span>
                  )}
                </p>
                <p>
                  Tarix:
                  <span className="time-home">{DateCutting(getById.date)}</span>
                </p>
                <div className="p-2 m-2 d-flex h-auto">
              <button
                className="btn btn-danger me-2 h-100"
                onClick={deleteItem}
              >
                Silmək
              </button>
              <button
                className="btn btn-success me-2 h-100"
                onClick={UpdateItem}
              >
                Yeniləmək
              </button>
              <button className='btn btn-primary me-2 h-100' onClick={handleClick} >Şəkil əlavə etmək</button>

            </div>
              </div>
            )}
            
          </div>
        </div>
      )}
      {isTrueUpdate && (
        <div className="mt-2 mb-2 p-4">
          <Update
            Data={getById}
            IsUpdating={true}
            SendFalse={UpdateItemFalse}
          />
        </div>
      )}
    </div>
  );
};

export default ObyektInsideOwn;
