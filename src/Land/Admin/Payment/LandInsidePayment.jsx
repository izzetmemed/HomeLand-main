import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import FetchGetId from "../../../MyComponents/FetchGetId";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchPostAll from "../../../MyComponents/FetchPostAll";
import GetBack from "../../../MyComponents/GetBack";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import DateCutting from "../../../MyComponents/DateCutting";
import GetImg from "../../../MyComponents/GetImg";
import AddPrice from "../../../MyComponents/AddPrice";
import AddTerritory from "../../../MyComponents/AddTerritory";
const LandInsidePayment = () => {
    const navigate = useNavigate();
  const { id } = useParams();

  const [keepingImgSource, setKeepingImgSource] = useState([]);

  var [getById, setGetById] = useState(null);
  const getByIdData = FetchGetId(id, "Land/Admin");
  useEffect(() => {
    setGetById(getByIdData);
  }, [getByIdData]);
  
  useEffect(() => {
    if (getById) {
      const imageUrls = GetImg(getById.img ?? []);
      setKeepingImgSource(imageUrls);
    }
  }, [getById]);
  const Reload = async () => {
    const ReloadData = {
      Id:getById.id,
      FullName: getById.fullname,
      Number: getById.number,
      CoordinateX: getById.coordinateX,
      CoordinateY: getById.coordinateY,
      Region: getById.region,
      Address: getById.address,
      Floor: getById.floor,
      Metro: getById.metro,
      Room: getById.room,
      Repair: getById.repair,
      Email:getById.email,
      Looking:getById.looking, 
      Building: getById.building,
      İtem: getById.İtem,
      Area: getById.area,
      Price: getById.price,
      Addition: getById.addition,
      Document: getById.document,
      IsCalledWithHomeOwnFirstStep: true,
    };
    if (
      ReloadData.FullName !== "" &&
      ReloadData.Number !== "" &&
      ReloadData.Address !== "" &&
      ReloadData.Metro !== "" &&
      ReloadData.Price !== "" &&
      ReloadData.Floor !== "" &&
      ReloadData.Building !== "" &&
      ReloadData.Area !== "" &&
      ReloadData.İtem !== "" &&
      ReloadData.Repair !== "" &&
      ReloadData.Document !== "" &&
      ReloadData.Address !== ""
    ) {
      const fake = async () => {};
      async function executeSequentially() {
        try {
            await FetchPostAll(ReloadData, "Land/Admin", fake);
           
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }
    
    executeSequentially();
      navigate("/HomeLogin/MainAdmin/Land/Payment");
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
                Qiymet:<span className="price-home">{AddPrice(getById.price) }</span>
              </p>
              <p>
                Ev sahibi:<span className="price-home">{getById.fullname}</span>
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
                Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                <span className="time-home">
                  {AddPrice((getById.price * 1) / 100)}
                </span>
              </p>
              <p>
                Tarix:
                <span className="time-home">{DateCutting(getById.date)}</span>
              </p>
              <div className="col-12 d-flex justify-content-center h-auto mt-2 ms-1">
                <div className="col-12 col-sm-6 d-flex ">
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
              <GetBack Direct={"/HomeLogin/MainAdmin/Land/payment"} />

              <button className="p-2 m-3 bg-success text-white" onClick={Reload}>
                Yenidən yüklə
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandInsidePayment