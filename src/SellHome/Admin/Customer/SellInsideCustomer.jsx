import { useState, useEffect, useRef } from "react";
import React from "react";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";
import FetchGetId from "../../../MyComponents/FetchGetId";
import GetImg from "../../../MyComponents/GetImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchPostCustomer from "../../../MyComponentsAdmin/FetchPostCustomer";
import GetBack from "../../../MyComponents/GetBack";
import DateCutting from "../../../MyComponents/DateCutting";
import AddPrice from "../../../MyComponents/AddPrice";
import AddTerritory from "../../../MyComponents/AddTerritory";

const SellinsideCustomer = () => {
  const { id } = useParams();

  const customerName = useRef(null);
  const customerNumber = useRef(null);
  const [keepingImgSource, setKeepingImgSource] = useState([]);
  const [state, setstate] = useState(true);

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
  const addCustomer = () => {
    setstate(!state);
    const customerObject = {
      SecondStepCustomerForeignId: id,
      FullName: customerName.current.value,
      Number: customerNumber.current.value,
    };
    if(customerObject.FullName.length>0 &&  !isNaN(parseFloat(customerObject.Number))){
      const AddItem = async () => {
        await FetchPostCustomer(customerObject, "SellCustomer");
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
                Qiymet:<span className="price-home">{AddPrice(getById.price)}</span>
              </p>
              <p>
                Ev sahibi:<span className="price-home">{getById.fullname}</span>
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
                Mərtəbə:<span className="time-home">{getById.floor}</span>
              </p>
              <p>
                Bina:<span className="time-home">{getById.building}</span>
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
              <div className="col-12 d-flex justify-content-center h-auto">
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
                            <td>{DateCutting(x.directCustomerDate)}</td>
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
                  <button className="btn btn-success ms-1" onClick={addCustomer}>
                    {" "}
                    Əlavə etmək
                  </button>
                </div>
              </div>
              <div className="mt-3">
                {" "}
                <GetBack Direct={"/HomeLogin/MainAdmin/Sell/customer"} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellinsideCustomer;
