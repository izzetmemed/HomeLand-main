import React from "react";
import { useState, useRef } from "react";
import Metro from "./Metro";
import HomeKind from "./HomeKind";
import RoomCount from "./RoomCount";
import PriceJsx from "./Price";
import RegionJsx from "./Region";
import HomeOrFlatJsx from "./HomeOrFlat";
import FetchPostAll from "./FetchPostAll";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FetchPostCustomer from "../MyComponentsAdmin/FetchPostCustomer";
const SendMail = () => {
  const nav = useNavigate();
  const Type = useRef([]);
  const myRef = useRef([]);
  const HomeOrFlat = useRef([]);
  const Region = useRef([]);
  const Room = useRef([]);
  const Price = useRef([]);
  const numberRef = useRef();
  const [count, setCount] = useState(5);
  const [isNext, setIsNext] = useState(false);
  const [TypeArray,setTypeArray] =useState();
  const Next = () => {
    setIsNext(true);
    for (var i = 1; i < Type.current.length; i++) {
      if (Type.current[i].checked) {
        setTypeArray(Type.current[i].id);
      }
    }
  };
  const increment = () => {
    if (count < 20) {
      setCount(count + 1);
    }
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const ArrayNewBool = [];
  const ArrayNewSetHomeOrFlat = [];
  const ArrayNewSetSendDataRegion = [];
  const ArrayNewSetSendDataRoom = [];
  const ArrayNewSetSendDataPrice = [];
  const AddGmail = async () => {
    for (var i = 1; i < myRef.current.length; i++) {
      if (myRef.current[i].checked) {
        ArrayNewBool.push(myRef.current[i].id);
      }
    }

    for (var i = 1; i < HomeOrFlat.current.length; i++) {
      if (HomeOrFlat.current[i].checked) {
        ArrayNewSetHomeOrFlat.push(HomeOrFlat.current[i].id);
      }
    }
    for (var i = 1; i < Region.current.length; i++) {
      if (Region.current[i].checked) {
        ArrayNewSetSendDataRegion.push(Region.current[i].id);
      }
    }
    for (var i = 1; i < Room.current.length; i++) {
      if (Room.current[i].checked) {
        ArrayNewSetSendDataRoom.push(Room.current[i].id);
      }
    }
    for (var i = 1; i < Price.current.length; i++) {
      if (Price.current[i].value === "") {
        Swal.fire({
          title: "Diqqət!",
          text: "Qiymət aralığı qeyd edilməlidir!!!",
          icon: "warning",
        });
        break;
      } else {
       
        ArrayNewSetSendDataPrice.push(Price.current[i].value);
      }
    }
    const media = {
      Type: TypeArray,
      Counter: count.toString(),
      Number: numberRef.current.value,
      MaxPrice: ArrayNewSetSendDataPrice ? ArrayNewSetSendDataPrice.sort((a, b) => b - a)[0] : null,
      MinPrice: ArrayNewSetSendDataPrice ? ArrayNewSetSendDataPrice.sort((a, b) => b - a)[1] : null,
    };
    const fake = () => {};
    await FetchPostAll(media, "Media", fake);
    if (ArrayNewSetSendDataRoom) {
      FetchPostCustomer(ArrayNewSetSendDataRoom, "Media/Room");
    }
    if (ArrayNewBool) {
      FetchPostCustomer(ArrayNewBool, "Media/Metro");
    }
    if (ArrayNewSetSendDataRegion) {
      FetchPostCustomer(ArrayNewSetSendDataRegion, "Media/Region");
    }
    if (ArrayNewSetHomeOrFlat) {
      FetchPostCustomer(ArrayNewSetHomeOrFlat, "Media/Building");
    }
    Swal.fire({
      title: "Uğurlu",
      text: "Əlavə edildi.",
      icon: "success",
    });
    nav("/");
  };
  return (
    <div className="d-flex flex-wrap search-flex-part bg-success">
      <div className="col-12  mb-2">
        {!isNext && (
          <>
            <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
              <span>Elan növü</span>
              <span>
                <i className="fa-solid fa-chevron-down"></i>
              </span>
            </div>
            <div className="mt-3 col-12 pe-2">
              <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id="Rent"
                    ref={(element) => (Type.current[1] = element)}
                  />
                  <label className="ms-1">Kirayə ev</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id="Sell"
                    ref={(element) => (Type.current[2] = element)}
                  />
                  <label className="ms-1">Satılıq ev</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id="Office"
                    ref={(element) => (Type.current[3] = element)}
                  />
                  <label className="ms-1">Ofis</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id="Land"
                    ref={(element) => (Type.current[4] = element)}
                  />
                  <label className="ms-1">Torpaq</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    name=""
                    id="Obyekt"
                    ref={(element) => (Type.current[5] = element)}
                  />
                  <label className="ms-1">Obyekt</label>
                </div>
              </div>
            </div>

            <div className="d-flex align-items-center col-12">
              <div className="col-12 col-lg-6 mt-4 pt-1">
                <button className="btn btn-mycolor" onClick={Next}>
                  Sonrakı
                </button>
              </div>
            </div>
          </>
        )}
      </div>
      {isNext && (
        <>
        
          {TypeArray === "Sell" || TypeArray === "Rent" ? (
            <>
              <RoomCount Room={Room} />
              <Metro myRef={myRef} />
              <HomeKind HomeOrFlat={HomeOrFlat} />
            </>
          ) : null}
          {TypeArray === "Obyekt" ? (
            <>
              <RoomCount Room={Room} />
              <Metro myRef={myRef} />
              <HomeOrFlatJsx HomeOrFlat={HomeOrFlat} />
            </>
          ) : null}

          {TypeArray === "Office" ? (
            <>
              <Metro myRef={myRef} />
            </>
          ) : null}
            <RegionJsx Region={Region} />
          <PriceJsx Price={Price} />
          <div className="col-12 d-flex  h-50 justify-content-center align-items-center mt-5">
            <p className="text-center text-white p-2">
              İstədiyiniz elanları səhifəmizə yüklənən kimi <i>Emailinizə</i> göndərə
              bilərik. (Xidmət tamamilə ödənişsizdir)
            </p>
            <p className="text-center text-white">Nə qədər elan göndərək?</p>
            <div className="counter d-flex flex-row">
              <button className="button" onClick={decrement}>
                -
              </button>
              <span className="count text-white">{count}</span>
              <button className="button" onClick={increment}>
                +
              </button>
            </div>
            <div>
              <div class="input-group mb-3 ">
                <input
                  type="email"
                  ref={numberRef}
                  class="form-control w-100"
                  placeholder="Email"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center col-12">
            <div className="col-12 col-lg-6 mt-4 pt-1">
              <button className="btn btn-mycolor" onClick={AddGmail}>
                Əlavə etmək
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SendMail;
