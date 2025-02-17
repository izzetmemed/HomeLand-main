import { useState, useEffect, useRef } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import FetchGetId from "../../../MyComponents/FetchGetId";
import UseFetchData from "../../../MyComponents/FetchImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import FetchPostAll from "../../../MyComponents/FetchPostAll";
import GetBack from "../../../MyComponents/GetBack";
import FetchPutImg from "../../../MyComponents/FetchPutImg";
const ObyektinsidePayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [keepingImgSource, setKeepingImgSource] = useState([]);

  var [getById, setGetById] = useState(null);
  const getByIdData = FetchGetId(id, "Obyekt/Admin");
  useEffect(() => {
    setGetById(getByIdData);
  }, [getByIdData]);

  const imageUrls = UseFetchData(getById?.img, "ObyektImg");

  useEffect(() => {
    setKeepingImgSource(imageUrls);
  }, [getById, imageUrls]);

  const price = "Aze";
  const teratory = "m²";
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };

  const Reload = async () => {
    const ReloadData = {
      Id:getById.id,
      FullName: getById.fullname,
      Number: getById.number,
      CoordinateX: getById.coordinateX,
      CoordinateY: getById.coordinateY,
      Region: getById.region,
      Address: getById.address,
      Metro: getById.metro,
      Room: getById.room,
      Repair: getById.repair,
      İtem: getById.İtem,
      Area: getById.area,
      Price: getById.price,
      Addition: getById.addition,
      Document: getById.document,
      SellOrRent: getById.sellorRent,
      IsCalledWithHomeOwnFirstStep: true,
    };
    if (
      ReloadData.FullName !== "" &&
      ReloadData.Number !== "" &&
      ReloadData.Address !== "" &&
      ReloadData.Metro !== "" &&
      ReloadData.Price !== "" &&
      ReloadData.Area !== "" &&
      ReloadData.İtem !== "" &&
      ReloadData.Repair !== "" &&
      ReloadData.SellOrRent !== "" &&
      ReloadData.Address !== ""
    ) {
      const fake = async () => {};
      async function executeSequentially() {
        try {
            await FetchPostAll(ReloadData, "Obyekt/Admin", fake);
           
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    executeSequentially();
      navigate("/HomeLogin/MainAdmin/Obyekt/Payment");
    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
            <TurnImgIn keepingImgSource={keepingImgSource} />
          </div>
          {getById && (
            <div className="pb-2 mt-3">
              <p>
                Qiymet:<span className="price-home">{getById.price}</span>
                <span>{price}</span>
              </p>
              <p>
                Ev sahibi:<span className="price-home">{getById.fullname}</span>
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
                Metro:<span className="address-home">{getById.metro}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{getById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {getById.area}
                  <span>{teratory}</span>
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
                    {(getById.price * 1) / 100}
                    <span>{price}</span>
                  </span>
                ) : (
                  <span className="time-home">
                    {(getById.price * 20) / 100}
                    <span>{price}</span>
                  </span>
                )}
              </p>
              <p>
                Tarix:
                <span className="time-home">{convertDate(getById.date)}</span>
              </p>
              <div className="col-12 d-flex justify-content-center h-auto">
                <div className="col-12 col-sm-6 d-flex ">
                  <table className="table table-dark table-striped ">
                    <thead>
                      <tr>
                        <th>Müştərinin adı soyadı</th>
                        <th>Nömrə</th>
                        <th>Tarix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getById &&
                        getById.customer.map((x, index) => (
                          <tr key={index}>
                            <td>{x.fullName}</td>
                            <td>{x.number}</td>
                            <td>{convertDate(x.directCustomerDate)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <GetBack Direct={"/HomeLogin/MainAdmin/Obyekt/Payment"} />
              <button className="p-2 m-3 bg-success text-white" onClick={Reload}>
                Yenidən yüklə
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObyektinsidePayment;
