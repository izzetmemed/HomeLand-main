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
import FetchPostCustomer from "../../../MyComponentsAdmin/FetchPostCustomer";
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
  const ReloadCheck = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send!",
    }).then((result) => {
      if (result.isConfirmed) {
        Reload();
        Swal.fire({
          title: "Uğurlu!",
          text: "Göndərildi",
          icon: "success",
        });
      }
    });
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
        text: "Bəzi Məlumat boşdur.",
        icon: "error",
      });
    }
  };
  const customerTake = (id) => {
    var CustomerName = getById.customer.filter((x) => x.isTake === true);
    if (
      CustomerName.length < 1 ||
      id === CustomerName[0].secondStepCustomerId
    ) {
      let kind = `LandCustomer/${id}`;
      FetchPostCustomer(null, kind);
      Swal.fire({
        title: "Uğurlu",
        text: "Göndərildi",
        icon: "success",
      });
    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Verildi kimi qeyd etdiyiniz 1 müştəri var",
        icon: "error",
      });
    }
  };
  const CustomerBank = () => {
    var CustomerName = getById.customer.filter((x) => x.isTake === true);
    if (CustomerName.length === 1) {
      const obj = {
        Name: CustomerName[0].fullName,
        Number: CustomerName[0].email,
      };
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Send!",
      }).then((result) => {
        if (result.isConfirmed) {
          FetchPostCustomer(obj, "EmailSend");
          Swal.fire({
            title: "Uğurlu!",
            text: "Göndərildi.",
            icon: "success",
          });
        }
      });
    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Ya müştəri yoxdur ya da 2 müştəri var",
        icon: "error",
      });
    }
  };
  const OwnerBank = () => {
    const obj = {
      name: getById.fullname,
      number: getById.email,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Send!",
    }).then((result) => {
      if (result.isConfirmed) {
        FetchPostCustomer(obj, "EmailSend");
        Swal.fire({
          title: "Uğurlu!",
          text: "Göndərildi",
          icon: "success",
        });
      }
    });
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
                <div className="col-12 col-sm-11 d-flex ">
                  <table className="table table-dark table-striped">
                    <thead>
                      <tr>
                        <th>Müştərinin adı soyadı</th>
                        <th>Nömrə</th>
                        <th>Email</th>
                        <th>Götürürüb ?</th>
                        <th>Qeyd etmək</th>
                        <th>Tarix</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getById &&
                        getById.customer.map((x, index) => (
                          <tr key={index}>
                            <td>{x.fullName}</td>
                            <td>{x.number}</td>
                            <td>{x.email}</td>
                            <td>{x.isTake ? "Verilib" : "Verilməyib"}</td>
                            <td><button className="p-1" onClick={() => {
                                  customerTake(x.secondStepCustomerId);
                                  x.isTake = !x.isTake;
                                }}>{x.isTake ? "Verilib" : " verildi qeyd etmək"} </button></td>
                            <td>{DateCutting(x.directCustomerDate)}</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <GetBack Direct={"/HomeLogin/MainAdmin/Land/payment"} />

              <button className="p-2 m-3 bg-success text-white" onClick={ReloadCheck}>
                Yenidən yüklə
              </button>
              <button className="p-2 m-3 bg-info text-white" onClick={CustomerBank}>
                Müştəriyə kart göndərmək
              </button>
              <button className="p-2 m-3 bg-primary text-white" onClick={OwnerBank}>
              ev sahibinə kart göndərmək
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default LandInsidePayment