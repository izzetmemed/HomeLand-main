import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const MainAdmin = () => {
  const [isRentHome, setIsRentHome] = useState(false);
  const [isSellHome, setIsSellHome] = useState(false);
  const [isRentWarehouse, setIsRentWarehouse] = useState(false);
  const [isSellWarehouse, setIsSellWarehouse] = useState(false);
  return (
    <div>
      <div className='col-12  d-flex flex-column justify-content-center align-items-center  login-div'>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRentHome(!isRentHome)}>
                  <span>Kiraye ev:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRentHome && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                      <Link to="/login/MainAdmin/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="/login/MainAdmin/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="/login/MainAdmin/Payment">Ödəniş:</Link>
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
                       <Link to="/Own">Ev sahibi:</Link>
                      </div>
                      <div >
                      <Link to="/Customer">Müştəri:</Link>
                      </div>
                      <div >
                      <Link to="/Payment">Ödəniş:</Link>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsRentWarehouse(!isRentWarehouse)}>
                  <span>Kiraye Obyekt:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isRentWarehouse && (
                  <div className='mt-3 col-12 pe-2'>
                   <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                       <a href="">Ev sahibi:</a>
                      </div>
                      <div >
                        <a href="">Müştəri:</a>
                      </div>
                      <div >
                       <a href="">Ödəniş:</a>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" onClick={() => setIsSellWarehouse(!isSellWarehouse)}>
                  <span>Satılıq obyekt:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>
                {isSellWarehouse && (
                  <div className='mt-3 col-12 pe-2'>
                    <div className='col-12 div-in-select LinkTree ms-1 pe-1'>
                      <div >
                       <a href="">Ev sahibi:</a>
                      </div>
                      <div >
                        <a href="">Müştəri:</a>
                      </div>
                      <div >
                       <a href="">Ödəniş:</a>
                      </div>
                    </div>
                  </div >
                )}
      </div>
      </div>
    </div>
  )
}

export default MainAdmin