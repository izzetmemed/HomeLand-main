import React from 'react'
import { useState } from 'react';
 const Header = () => {
    const [isActive,setisActive]=useState(false);
  return (
    <div>
        <nav className='row w-100 mt-2 mb-3'>
            <div className='d-flex flex-column-reverse align-items-center'>
                <div className='col-3 mt-3 d-flex flex-column justify-content-center align-items-center img-div-for-height'>
                <img src={require('./logo.home/Logo-white.PNG')} className="w-100 h-100"/>
                    <span className='logo-in-header'>
                    HomeLand
                    </span>
                </div>
                <div className='d-flex justify-content-between col-12  align-items-center for-height-header bg-danger px-3'>
                <span>HomeLand.az</span>
                <ul className='header-ul col-4 ' >
                    <li><a href="">Alqı-satqı</a></li>
                    <li><a href="">Kiraye</a></li>
                    <li><a href="">Obyekt</a></li>
                </ul>
                <button className='download-ads btn btn-success' onClick={()=>{setisActive(!isActive)}}><span><i className="fa-solid fa-plus"></i></span>Elan yerləşdirmək 
                {isActive && (
                <div className='download-ads-elements'>
                    <ul>
                        <li>Kiraye ev elanı yerləşdirmək</li>
                        <li>Satılıq ev elanı yerləşdirmək</li>
                        <li>Kiraye obyekt elanı yerləşdirmək</li>
                        <li>Satılıq obyekt elanı yerləşdirmək</li>
                        </ul>
                    </div>)}
                </button>
            </div>
            </div>
            <div className="up-arrow"></div>
        </nav>
    
    </div>
  )
}
export default Header;