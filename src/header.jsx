import React from 'react'
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import InsideCard from './İnsideCard'
 const Header = () => {
    const [isActive,setisActive]=useState(false);
  return (
    <div>
        <nav className='row w-100 mt-2 mb-3 me-0'>
            <div className='d-flex flex-column-reverse align-items-center pe-0'>
                <div className=' col-9 col-sm-5 col-md-4 col-lg-3 mt-3 d-flex flex-column justify-content-center align-items-center img-div-for-height'>
                <img src={require('./logo.home/Logo-white.PNG')} className="w-100 h-100"/>
                    <span className='logo-in-header '>
                    HomeLand
                    </span>
                </div>
                <div className='d-flex flex-column flex-lg-row justify-content-between col-12  align-items-center for-height-header me-0 px-2'>
                <span className='d-lg-block d-none'>HomeLand.az</span>
                <ul className='header-ul col-4 ' >
                    <li><NavLink to="/InKart">Alqı-satqı</NavLink></li>
                    <li><NavLink to="/">Kiraye</NavLink></li>
                    <li><NavLink to="/InKart">Obyekt</NavLink></li>
                </ul>
                <button className='download-ads btn' onClick={()=>{setisActive(!isActive)}}><span><i className="fa-solid fa-plus"></i></span>Elan yerləşdirmək 
                {isActive && (
                <div className='download-ads-elements'>
                    <ul>
                        <li><NavLink to="/Sorğu">Kiraye ev</NavLink></li>
                        <li>Satılıq ev</li>
                        <li>Kiraye obyekt</li>
                        <li>Satılıq obyekt</li>
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