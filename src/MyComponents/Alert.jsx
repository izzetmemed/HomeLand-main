import React from "react";
import { useState,useRef } from "react";
import FetchPostAll from "./FetchPostAll";
import FetchPostCustomer from "../MyComponentsAdmin/FetchPostCustomer";
const Alert = ({ Price, Room, Metro, Region, HomeOrFlat, setIsActiveFunk,Kind}) => {
  const [count, setCount] = useState(5);
   const numberRef=useRef(null);
   const fake=()=>{}
  const AddGmail = async() => {
       const media={
      Type:Kind,
      Counter:count.toString(),
      Number:numberRef.current.value,
      MaxPrice: (Price ? Price[0]:null),
      MinPrice: (Price ? Price[1]:null),
     
    }
     await FetchPostAll(media,"Media",fake);
    if(Room){
      const uniqueNumbers = [...new Set(Room)];
      FetchPostCustomer(uniqueNumbers,"Media/Room")  
    }
    if(Metro){
      const uniqueNumbers = [...new Set(Metro)];
      FetchPostCustomer(uniqueNumbers,"Media/Metro")
      }
    if(Region){
      const uniqueNumbers = [...new Set(Region)];
      FetchPostCustomer(uniqueNumbers,"Media/Region")
      }
    if(HomeOrFlat){
      const uniqueNumbers = [...new Set(HomeOrFlat)];
      FetchPostCustomer(uniqueNumbers,"Media/Building")
    }
    setIsActiveFunk();
  };


  const Refuse = () => {
    setIsActiveFunk();
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
  return (
    <div className="Alert-media col-11 col-md-9 col-lg-7 col-xl-5">
      <div className="col-12">
        <div className="col-12">
          <p className="text-center mb-0">Bu şərtlərə uyğun elan axtardınız.</p>
          <div className="col-12 d-flex flex-wrap">
              <div className="col-4 p-1">
              <label>Otaq:</label>
              {Room && (
                <ul>
                  {Room.slice(0, 2).map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                  {Room.length > 2 && <li>...</li>}
                  {Room.length === 0 && <li>Bütün</li>}
                </ul>
              )}
            </div>

            <div className="col-4 p-1">
              <label>Metro:</label>
              {Metro && (
                <ul>
                  {Metro.slice(0, 2).map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                  {Metro.length > 2 && <li>...</li>}
                  {Metro.length === 0 && <li>Bütün</li>}
                </ul>
              )}
            </div>
            <div className="col-4 p-1">
              <label>Rayon:</label>
              {Region && (
                <ul>
                  {Region.slice(0, 2).map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                  {Region.length > 2 && <li>...</li>}
                  {Region.length === 0 && <li>Bütün</li>}
                </ul>
              )}
            </div>
            <div className="col-8 p-1">
              <label>Elan növü:</label>
              {HomeOrFlat && (
                <ul>
                  {HomeOrFlat.slice(0, 1).map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                  {HomeOrFlat.length > 2 && <li>...</li>}
                  {HomeOrFlat.length === 0 && <li>Bütün</li>}
                </ul>
              )}
            </div>
            <div className="col-4 p-1">
              <label>Qiymət:</label>
              {Price && (
                <ul>
                  {Price.slice(0, 2).map((x, index) => (
                    <li key={index}>{x}</li>
                  ))}
                  {Price.length > 2 && <li>...</li>}
                
                </ul>
              )}
            </div>
          </div>
          <p className="text-center">
            <strong>
              Bu cür elanları səhifəmizə yüklənən kimi <i>Emailinizə</i> göndərə
              bilərik. (Xidmət tamamilə ödənişsizdir)
            </strong>
          </p>
        </div>
        <p className="text-center">Nə qədər elan göndərək?</p>
        <div className="counter">
          <button className="button" onClick={decrement}>
            -
          </button>
          <span className="count">{count}</span>
          <button className="button" onClick={increment}>
            +
          </button>
        </div>
        <div>
          <div class="input-group mb-3">
            <input
              type="email"
              ref={numberRef}
              class="form-control"
              placeholder="Email"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-center">
          <button className="close-btn-media btn me-1" onClick={AddGmail}>
            {" "}
            Əlavə etmək
          </button>
          <button className="close-btn-media btn bg-primary me-1" onClick={Refuse}>
            {" "}
            Əlavə etmişəm
          </button>
          <button className="close-btn-media btn bg-danger" onClick={Refuse}>
            {" "}
            Ləğv etmək
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alert;
