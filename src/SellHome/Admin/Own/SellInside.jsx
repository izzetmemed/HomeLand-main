import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Update from "../../../SellHome/Sell";
import FetchGetId from "../../../MyComponents/FetchGetId";
import GetImg from "../../../MyComponents/GetImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import GetBack from "../../../MyComponents/GetBack";
import DateCutting from "../../../MyComponents/DateCutting"
import AddTerritory from "../../../MyComponents/AddTerritory";
import AddPrice from "../../../MyComponents/AddPrice";
import DownloadImage from "../../../MyComponentsAdmin/DownloadImage";
import Swal from "sweetalert2";
const SellInside = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/HomeLogin/MainAdmin/Sell/Img/Update/${id}`);
  };
  const handleClickVideo = () => {
    navigate(`/HomeLogin/MainAdmin/Sell/Video/${id}`);
  };
  const [keepingImgSource, setKeepingImgSource] = useState([]);
  var [getById, setGetById] = useState(null);

  const getByIdData = FetchGetId(id, "Sell/Admin");
  useEffect(() => {
    setGetById(getByIdData);
  }, [getByIdData]);

  useEffect(() => {
    if (getById) {
      const imageUrls = GetImg(getById.img ?? []);
      setKeepingImgSource(imageUrls);
    }
  }, [getById]);
  const deleteItem = async () => {

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
       FetchDelete(getById.id, "Sell");
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        navigate("/HomeLogin/MainAdmin/Sell/own");
      }
    });

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
                <DownloadImage ImageUrl={keepingImgSource}/>
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
                     {AddTerritory(getById.area)}
                  </span>
                </p>
                {getById.addition && (
                  <p>
                    Ətraflı:
                    <span className="measure-home">{getById.addition}</span>
                  </p>
                )}
                <p>
                  Əşya:<span className="time-home">{getById.item}</span>
                </p>
                <p>
                  Təmir:<span className="time-home">{getById.repair}</span>
                </p>
                <p>
                  Sənəd:<span className="time-home">{getById.document}</span>
                </p>
                <p>
                  Mərtəbə:<span className="time-home">{getById.floor}</span>
                </p>
                <p>
                  Bina:<span className="time-home">{getById.building}</span>
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
                className="btn btn-success me-2 h-100"
                onClick={UpdateItem}
              >
                Yeniləmək
              </button>
              <button className='btn btn-primary me-2 h-100' onClick={handleClick} >Şəkil əlavə etmək</button>
              <button className='btn btn-info me-2 h-100 text-white' onClick={handleClickVideo} >Vidio əlavə etmək</button>
            </div>
            <div className="p-2 m-3 d-flex h-auto">
              <button
                className="btn btn-danger me-2 h-100"
                onClick={deleteItem}
              >
                Silmək
              </button>
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

export default SellInside;
