import { useState, useEffect, useRef } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2';
import FetchGetId from "../../../MyComponents/FetchGetId";
import UseFetchData from "../../../MyComponents/FetchImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchPostCustomer from "../../../MyComponentsAdmin/FetchPostCustomer";
import GetBack from "../../../MyComponents/GetBack";
const ObyektCustomerInside = () => {
  const { id } = useParams();

  const customerName = useRef(null);
  const customerNumber = useRef(null);
  const [keepingImgSource, setKeepingImgSource] = useState([]);
  const [state, setstate] = useState(true);

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

  const addCustomer = () => {
    setstate(!state);
    const customerObject = {
      SecondStepCustomerForeignId: id,
      FullName: customerName.current.value,
      Number: customerNumber.current.value,
    };
    if(customerObject.FullName.length>0 &&  !isNaN(parseFloat(customerObject.Number))){
      const AddItem = async () => {
        await FetchPostCustomer(customerObject, "ObyektCustomer");
      };
      AddItem();
      customerName.current.value="";
      customerNumber.current.value="";
    }else{
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error"
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
              <div className="col-12 d-flex justify-content-center h-auto mt-2">
                <div className="col-12 col-sm-6 d-flex px-1">
                  <table className="table table-dark table-striped">
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
              <div className="col-12 d-flex justify-content-center mt-2 h-auto ms-1">
                <div className="h-25 ">
                  <input
                    type="Text"
                    placeholder="Müştərinin adı soyadı:"
                    ref={customerName}
                  />
                  <input
                    type="number"
                    placeholder="Nömrəsi:"
                    ref={customerNumber}
                  />
                  <button className="btn btn-success" onClick={addCustomer}>
                    {" "}
                    Əlavə etmək
                  </button>
                </div>
              </div>
              <div className="mt-3">
                {" "}
                <GetBack Direct={"/HomeLogin/MainAdmin/Obyekt/Customer"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ObyektCustomerInside;
