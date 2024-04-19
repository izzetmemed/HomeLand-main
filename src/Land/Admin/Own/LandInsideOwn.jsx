import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Update from "../../LandForm";
import FetchGetId from "../../../MyComponents/FetchGetId";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import GetBack from "../../../MyComponents/GetBack";
import DateCutting from "../../../MyComponents/DateCutting";
import GetImg from "../../../MyComponents/GetImg";
import AddPrice from "../../../MyComponents/AddPrice";
import AddTerritory from "../../../MyComponents/AddTerritory";
const LandInsideOwn = () => {
  const { id } = useParams();
  const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/HomeLogin/MainAdmin/Land/Img/Update/${id}`);
    };
  const [keepingImgSource, setKeepingImgSource] = useState([]);
  var [getById, setGetById] = useState(null);

  const getByIdData = FetchGetId(id, "Land/Admin");
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
    await FetchDelete(getById.id, "Land");
    navigate("/HomeLogin/MainAdmin/Land/own");
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
                <GetBack Direct={"/HomeLogin/MainAdmin/Sell/Own"} />

                <p>
                  Qiymet:<span className="price-home">{AddPrice(getById.price)}</span>
                </p>
                <p>
                  Ev sahibi:
                  <span className="price-home">{getById.fullname}</span>
                </p>
                <p>
                Email:<span className="price-home">{getById.email}</span>
              </p>
                <p>
                  Nömrəsi:<span className="price-home">{getById.number}</span>
                </p>
                <p>
                  Kod:<span className="price-home">{getById.id}</span>
                </p>
                <p>
                  Ünvan:<span className="address-home">{getById.address}</span>
                </p>
                <p>
                  Sahe:
                  <span className="measure-home">
                    {AddTerritory(getById.area,true) }
                  </span>
                </p>
                {getById.addition && (
                  <p>
                    Ətraflı:
                    <span className="measure-home">{getById.addition}</span>
                  </p>
                )}
                <p>
                  Sənəd:<span className="time-home">{getById.document}</span>
                </p>
                <p>
                  Rayon:<span className="time-home">{getById.region}</span>
                </p>

                <p>
                  Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                  <span className="time-home">
                    {AddPrice((getById.price * 1) / 100)}
                  </span>
                </p>
                <p>
                  Tarix:
                  <span className="time-home">{DateCutting(getById.date)}</span>
                </p>
                <div className="p-2 m-3 d-flex h-auto">
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
  )
}

export default LandInsideOwn