import React from "react";
import { useState ,useEffect} from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();
  const backgroundColorStyle = "HomeLandColor shadowClassic";
    
    const [isActive, setisActive] = useState(false);
    const [color1, setColor1] = useState();
    const [color2, setColor2] = useState();
    const [color3, setColor3] = useState();
    const [color4, setColor4] = useState();
    const [color5, setColor5] = useState();

    useEffect(() => {
        const decodedPath = decodeURIComponent(location.pathname);
        switch(decodedPath) {
            case '/':
                setColor1();
                setColor2(backgroundColorStyle);
                setColor3();
                setColor4();
                setColor5();
                break;
            case '/obyekt':
                setColor1();
                setColor2();
                setColor3(backgroundColorStyle);
                setColor4();
                setColor5();
                break;
            
            case '/Sell':
                setColor1(backgroundColorStyle);
                setColor2();
                setColor3();
                setColor4();
                setColor5();
                break;
            
            case '/Land':
                setColor1();
                setColor2();
                setColor3();
                setColor4(backgroundColorStyle);
                setColor5();
                break;
            
            case '/Office':
                setColor1();
                setColor2();
                setColor3();
                setColor4();
                setColor5(backgroundColorStyle);
                break;
            
            default:
                
                setColor1();
                setColor2();
                setColor3();
                setColor4();
                setColor5();
                break;
        }
    }, [location]);
  return (
    <div>
      <nav className="row w-100  mb-3 me-0 ms-0">
        <div className="d-flex flex-column-reverse align-items-center pe-0 ps-0">
          <div className=" col-9 col-sm-5 col-md-4 col-lg-3 mt-3 d-flex flex-column justify-content-center align-items-center img-div-for-height">
            <img
              src={require("./logo.home/Logo-white.PNG")}
              className="w-100 h-100"
              loading="lazy"
            />
            <span className="logo-in-header ">HomeLand</span>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-between col-12  align-items-center for-height-header me-0 px-2">
            <span className="d-lg-block d-none col-2">HomeLand.az</span>
            <ul className="header-ul col-10 col-sm-6 col-lg-4 ">
            <li  className={color5}>
                <NavLink to="/Office">Ofis</NavLink>
              </li>
              <li className={color1}>
                <NavLink to="/Sell">Satılıq</NavLink>
              </li>
              <li className={color2}>
                <NavLink to="/">Kiraye</NavLink>
              </li>
              <li  className={color3}>
                <NavLink to="/obyekt">Obyekt</NavLink>
              </li>
              <li  className={color4}>
                <NavLink to="/Land">Torpaq</NavLink>
              </li>
             
            </ul>
            <button
              className="download-ads btn col-2"
              onClick={() => {
                setisActive(!isActive);
              }}
            >
              <span>
                <i className="fa-solid fa-plus"></i>
              </span>
              Elan yerləşdirmək
              {isActive && (
                <div className="download-ads-elements">
                  <ul>
                    <NavLink to="/kiraye-ev-form">
                      {" "}
                      <li>Kiraye ev</li>
                    </NavLink>
                    <NavLink to="/satılıq-ev-form">
                      {" "}
                      <li>Satılıq ev</li>
                    </NavLink>
                    <NavLink to="/obyekt-form">
                      {" "}
                      <li>Obyekt</li>
                    </NavLink>
                    <NavLink to="/land-form">
                      {" "}
                      <li>Torpaq</li>
                    </NavLink>
                    <NavLink to="/office-form">
                      {" "}
                      <li>Ofis</li>
                    </NavLink>
                  </ul>
                </div>
              )}
            </button>
          </div>
        </div>
        <div className="up-arrow"></div>
      </nav>
    </div>
  );
};
export default Header;
