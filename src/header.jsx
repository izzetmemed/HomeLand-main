import React from 'react'
import { useState } from 'react';
import { Link,NavLink } from 'react-router-dom';
import InsideCard from './mainpage/İnsideCard'
 const Header = () => {
    const [isActive,setisActive]=useState(false);
  return (
    <div>
        <nav className='row w-100  mb-3 me-0 ms-0'>
            <div className='d-flex flex-column-reverse align-items-center pe-0 ps-0'>
                <div className=' col-9 col-sm-5 col-md-4 col-lg-3 mt-3 d-flex flex-column justify-content-center align-items-center img-div-for-height'>
                <img src={require('./logo.home/Logo-white.PNG')} className="w-100 h-100"/>
                    <span className='logo-in-header '>
                    HomeLand
                    </span>
                </div>
                <div className='d-flex flex-column flex-lg-row justify-content-between col-12  align-items-center for-height-header me-0 px-2'>
                <span className='d-lg-block d-none'>HomeLand.az</span>
                <ul className='header-ul col-4 ' >
                    <li><NavLink to="/Satılıq-ev">Alqı-satqı</NavLink></li>
                    <li><NavLink to="/">Kiraye</NavLink></li>
                    <li><NavLink to="/obyekt">Obyekt</NavLink></li>
                </ul>
                <button className='download-ads btn' onClick={()=>{setisActive(!isActive)}}><span><i className="fa-solid fa-plus"></i></span>Elan yerləşdirmək 
                {isActive && (
                <div className='download-ads-elements'>
                    <ul>
                    <NavLink to="/kiraye-ev-form"> <li>Kiraye ev</li></NavLink>
                    <NavLink to="/satılıq-ev-form"> <li>Satılıq ev</li></NavLink>
                    <NavLink to="/obyekt-form"> <li>Obyekt</li></NavLink>
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