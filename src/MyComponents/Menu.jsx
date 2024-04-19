import React from "react";
import { NavLink } from "react-router-dom";
const phoneNumber = "994705715610";
const Link = "www.HomeLand.az"; 
const message = encodeURIComponent(`${Link} xoş gəlmisiniz`);

let whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

const handleClick = () => {
    if (!isMobileDevice()) {
        whatsappUrl = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
    window.open(whatsappUrl, '_blank');
};

const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

var whatsappUrlShare = `https://wa.me/?text=${message}`;
const handleClickShare = () => {
  if (!isMobileDevice()) {
    whatsappUrlShare = `https://web.whatsapp.com/send?phone=&text=${message}`;
  }
  window.open(whatsappUrlShare, '_blank');
};

const Menu = ({ Add, ref }) => {
  return (

      <div className="menu-bar" ref={ref}>
      <div
        className="w-100 d-flex justify-content-end p-2"
        onClick={() => {
          Add(false);
        }}
      >
        <i class="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
      </div>
      <ul>
        <li>
            <i class="fa-regular fa-envelope" style={{ color: "#ffffff" }}></i> <NavLink to="/SendMail"> Elanı mailə göndərmək</NavLink>
        </li>
        <li>
            <i class="fa-solid fa-basket-shopping" style={{ color: "#ffffff" }}></i><NavLink to="/Səbət"> Mənim səbətim</NavLink>
        </li>
        <li  onClick={() => window.open('https://www.instagram.com/HomeLand.az_', '_blank')}>
          <i class="fa-solid fa-globe"></i> Instaqramımız
        </li>
        <li onClick={handleClick}>
          <i class="fa-solid fa-comment-dots"></i> Whatsappımız
        </li>
        <li>
            <i class="fa-solid fa-location-dot" style={{ color: "#ffffff" }}></i>  <NavLink to="/mapSearch"> Xəritə üzrə baxmaq</NavLink>
        </li>
        <li onClick={handleClick}>
            <i class="fa-solid fa-phone" style={{ color: "#ffffff" }}></i> Əlaqə
        </li>
        <li>
            <i class="fa-solid fa-circle-info" style={{ color: "#ffffff" }}></i>{" "}
            Haqqımızda
        </li>
        <li>
            <i class="fa-solid fa-house" style={{ color: "#ffffff" }}></i>{" "}
            Xidmətlərimiz
        </li>
        <li>
            <i class="fa-regular fa-user" style={{ color: "#ffffff" }}></i>{" "}
            Giriş/Qeydiyyat
        </li>
        <li onClick={handleClickShare}>
          <i class="fa-solid fa-share-nodes"></i> Paylaşmaq
        </li>
      </ul>
      <div className="w-100 h-50 d-flex justify-content-center align-items-center">
        <span className="logo-in-header static-width">HomeLand</span>
      </div>
      <div className="darker-menu" onClick={() => {
          Add(false);
        }}></div>
    </div>

    
  );
};

export default Menu;
