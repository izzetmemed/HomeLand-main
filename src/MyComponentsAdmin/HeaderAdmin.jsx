import React from "react";
import { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

const HeaderAdmin = () => {
  const location = useLocation();
  const backgroundColorStyle = "HomeLandColor shadowClassic";

  const [isActive1, setisActive1] = useState(false);
  const [isActive2, setisActive2] = useState(false);
  const [isActive3, setisActive3] = useState(false);
  const [isActive4, setisActive4] = useState(false);
  const [isActive5, setisActive5] = useState(false);
  const [isBars, setIsBars] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setIsBars((prevIsBars) => !prevIsBars);
  };
  return (
    <div>
      <nav className="row w-100  mb-5 me-0 ms-0 ">
        <div className=" pe-0 ps-0 mb-5">
          <div className=" for-height-header me-0 px-2">
            <div className="col-12 d-flex flex-row flex-wrap pt-1 justify-content-center">
            <button
              className=" btn btn-light m-2 download-ads"
              onClick={() => {
                setisActive1(!isActive1);
              }}
            >
              Kirayə
              {isActive1 && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/Homelogin/MainAdmin/Renthome/own">
                      {" "}
                      <li>Sahibi</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Renthome/Customer">
                      {" "}
                      <li>Müştəri</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Renthome/Payment">
                      {" "}
                      <li>Ödəniş</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
            <button
              className=" btn btn-light m-2 download-ads"
              onClick={() => {
                setisActive2(!isActive2);
              }}
            >
              Satılıq
              {isActive2 && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/Homelogin/MainAdmin/Sell/Own">
                      {" "}
                      <li>Sahibi</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Sell/Customer">
                      {" "}
                      <li>Müştəri</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Sell/Payment">
                      {" "}
                      <li>Ödəniş</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
            <button
              className=" btn btn-light m-2 download-ads"
              onClick={() => {
                setisActive3(!isActive3);
              }}
            >
              Ofis
              {isActive3 && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/Homelogin/MainAdmin/Office/Own">
                      {" "}
                      <li>Sahibi</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Office/Customer">
                      {" "}
                      <li>Müştəri</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Office/Payment">
                      {" "}
                      <li>Ödəniş</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
            <button
              className=" btn btn-light m-2 download-ads"
              onClick={() => {
                setisActive4(!isActive4);
              }}
            >
              Obyekt
              {isActive4 && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/Homelogin/MainAdmin/Obyekt/Own">
                      {" "}
                      <li>Sahibi</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Obyekt/Customer">
                      {" "}
                      <li>Müştəri</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Obyekt/Payment">
                      {" "}
                      <li>Ödəniş</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
            <button
              className=" btn btn-light m-2 download-ads"
              onClick={() => {
                setisActive5(!isActive5);
              }}
            >
              Torpaq
              {isActive5 && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/Homelogin/MainAdmin/Land/Own">
                      {" "}
                      <li>Sahibi</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Land/Customer">
                      {" "}
                      <li>Müştəri</li>
                    </NavLink>
                    <NavLink to="/Homelogin/MainAdmin/Land/Payment">
                      {" "}
                      <li>Ödəniş</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
            </div>
          </div>
        </div>
        <div className="up-arrow"></div>
      </nav>
    </div>
  );
};
export default HeaderAdmin;
