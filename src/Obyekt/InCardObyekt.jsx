import { useState, useEffect } from "react";
import React from "react";
import Coordinate from "../mainpage/answer/coordinate";
import Cards from "./CardsObyekt";
import { useParams } from "react-router-dom";
const InCardObyekt = () => {
  const { id } = useParams();

  const [keepingImgSource,setKeepingImgSource] = useState([]);

 

  const [ImgSourceIndex, setImgSourceIndex] = useState(0);
  const btnLeftIcon = () => {
    if (ImgSourceIndex < keepingImgSource.length - 1) {
      setImgSourceIndex(ImgSourceIndex + 1);
    } else {
      setImgSourceIndex(0);
    }
  };

  const btnRightIcon = () => {
    if (ImgSourceIndex > 0) {
      setImgSourceIndex(ImgSourceIndex - 1);
    } else {
      setImgSourceIndex(keepingImgSource.length - 1);
    }
  };
  var [GetById, setGetById] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:5224/api/Obyekt/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setGetById(data);
      } catch (error) {
        console.error("Error in fetchData:", error);
      }
    };
    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:5224/api/ObyektImg/DownloadImages?imgNames=${GetById.img}`);
            const data = await response.json();
            setKeepingImgSource(data.imageUrls);

        } catch (error) {
            console.error("Error downloading images:", error);
        }
    };
    fetchData();
}, [GetById]);
  const price = "Aze";
  const teratory = "m²";
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };
  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
            <div>
              <span onClick={btnLeftIcon}>
                <i className="fa-solid fa-angle-left"></i>
              </span>
              <span onClick={btnRightIcon}>
                <i className="fa-solid fa-angle-right"></i>
              </span>
            </div>
            <div className="d-flex justify-content-center">
              <img
                src={keepingImgSource[ImgSourceIndex]}
                alt=""
                
              />
            </div>
            <div className="logo-on-images d-flex justify-content-center ">
              <p>HomeLand.az</p>
            </div>
          </div>
          {GetById && (
            <div className="pb-2 mt-3">
              <p>
                Qiymet:<span className="price-home">{GetById.price}</span>
                <span>{price}</span>
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
                  {GetById.area}
                  <span>{teratory}</span>
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
                <span className="time-home">
                {GetById.price * 1 /100}<span>{price}</span>
                </span>
              </p>
              <p>
                Tarix:<span className="time-home">{convertDate(GetById.date)}</span>
              </p>
              <div className="height-for-coordiante mt-2 mb-2 p-4">
                <Coordinate />
              </div>
              <div>
                <div className="d-flex justify-content-center w-100">
                  <button className="btn btn-mycolor height-for-calling fs-5">
                    <i className="fa-solid fa-phone"></i> Əmlakçıya zəng etmək.
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="mt-5">
        <Cards />
      </div>
    </div>
  );
};

export default InCardObyekt;
