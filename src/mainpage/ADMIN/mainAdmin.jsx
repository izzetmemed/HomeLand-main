import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Scroll from '../../MyComponents/Scroll';
import LogOut from '../../MyComponentsAdmin/LogOut';
const MainAdmin = () => {
  Scroll()
  const [isRentHome, setIsRentHome] = useState(false);
  const [isSellHome, setIsSellHome] = useState(false);
  const [isLandHome, setIsLandHome] = useState(false);
  const [isOfficeHome, setIsOfficeHome] = useState(false);
  const [isRentWarehouse, setIsRentWarehouse] = useState(false);
  return (
    <div>
      <div className='col-12  d-flex flex-column justify-content-center align-items-center '>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRentHome(!isRentHome)}>
                  <span>Kiraye ev:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRentHome && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                      <Link to="Renthome/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="Renthome/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="Renthome/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsSellHome(!isSellHome)}>
                  <span>Satılıq ev:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isSellHome && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                       <Link to="Sell/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="Sell/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="Sell/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsOfficeHome(!isOfficeHome)}>
                  <span>Ofis:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isOfficeHome && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                       <Link to="Office/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="Office/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="Office/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsLandHome(!isLandHome)}>
                  <span>Torpaq:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isLandHome && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                       <Link to="Land/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="Land/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="Land/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRentWarehouse(!isRentWarehouse)}>
                  <span> Obyekt:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRentWarehouse && (
                  <div className='mt-3 col-12 pe-2'>
                   <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                      <Link to="Obyekt/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="Obyekt/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="Obyekt/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <LogOut/>
      </div>
    </div>
  )
}

export default MainAdmin