import React, { useState, useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom"
import Alert from "./MyComponents/Alert";
import RoomCount from "./MyComponents/RoomCount";
import HomeKind from "./MyComponents/HomeKind";
import Metro from "./MyComponents/Metro";
import RegionJsx from './MyComponents/Region';
import PriceJsx from "./MyComponents/Price";
const Search = ({
  setFunc,
  setHomeOrFlat,
  setRegion,
  setRoom,
  setPrice,
  setClick,
}) => {
  const nav=useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [isMedia, setIsMedia] = useState(false);
  var isMediaPrice=true;
  const myRef = useRef([]);
  const HomeOrFlat = useRef([]);
  const Region = useRef([]);
  const Room = useRef([]);
  const Price = useRef([]);
  

  const ArrayNewBool = [];
  const ArrayNewSetHomeOrFlat = [];
  const ArrayNewSetSendDataRegion = [];
  const ArrayNewSetSendDataRoom = [];
  const ArrayNewSetSendDataPrice = [];

  const[Metro2, setMetro2]=useState([]);
  const[Price2, setPrice2]=useState([]);
  const[Room2, setRoom2]=useState([]);
  const[Building2, setBuilding2]=useState([]);
  const[Region2, setRegion2]=useState([]);

 const setIsActiveFunk=(x)=>{
    setIsMedia(!isMedia)
 }
  const GetDataFromSearch = (e) => {
    isMediaPrice=true

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
        isMediaPrice=false;
        break;
      } else {
       
        ArrayNewSetSendDataPrice.push(Price.current[i].value);
      }
    }
    setClick(true);
    setPrice(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
    setRoom(ArrayNewSetSendDataRoom);
    setRegion(ArrayNewSetSendDataRegion);
    setFunc(ArrayNewBool);
    setHomeOrFlat(ArrayNewSetHomeOrFlat);
  
      
    setBuilding2(ArrayNewSetHomeOrFlat);
    setPrice2(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
    setRegion2(ArrayNewSetSendDataRegion);
    setMetro2(ArrayNewBool);
    setRoom2(ArrayNewSetSendDataRoom);
    
   if(isMediaPrice){
    sessionStorage.setItem("Price",ArrayNewSetSendDataPrice.sort((a, b) => b - a));
    sessionStorage.setItem("Room",ArrayNewSetSendDataRoom);
    sessionStorage.setItem("Region",ArrayNewSetSendDataRegion);
    sessionStorage.setItem("HomeOrFlat",ArrayNewSetHomeOrFlat);
    sessionStorage.setItem("Metro",ArrayNewBool);
    sessionStorage.setItem("Search",true);
   }
    if(!sessionStorage.getItem("FirstMediaRent") && isMediaPrice){
      setIsMedia(!isMedia);
      sessionStorage.setItem("FirstMediaRent",true);
    }
 
  };
  useEffect(()=>{
    if(sessionStorage.getItem("Search")){
      setClick(true);
      var sessionPrice=sessionStorage.getItem("Price")
      var sessionRoom=sessionStorage.getItem("Room")
      var sessionRegion=sessionStorage.getItem("Region")
      var sessionMetro=sessionStorage.getItem("Metro")
      var sessionHomeOrFlat=sessionStorage.getItem("HomeOrFlat")

      if(sessionPrice!==""){
         setPrice(sessionPrice.split(","));
      }
      if (sessionRoom !== "") {
        const rooms = sessionRoom.split(",");
        setRoom(rooms); 
    }
    
      if(sessionRegion!==""){
        const Region = sessionRegion.split(",");
        setRegion(Region);
      }
      if(sessionMetro!==""){
        const Metro = sessionMetro.split(",");
        setFunc(Metro);
      }
      if(sessionHomeOrFlat!==""){
        const HomeOrFlat = sessionHomeOrFlat.split(",");
        setHomeOrFlat(HomeOrFlat);
      }
      setIsActive(true);
    }
  },[])
 const RefuseSearch =()=>{
  sessionStorage.removeItem("Search");
  sessionStorage.removeItem("Price");
  sessionStorage.removeItem("Room");
  sessionStorage.removeItem("Metro");
  sessionStorage.removeItem("HomeOrFlat");
  sessionStorage.removeItem("Region");
  setClick(false);
  setIsActive(false);
  nav("/");
 }
  return (
    <div>
      <div className="search-part pe-2 ps-2">
        <div className="col-12">
          <div className="col-12">
            <button
              className="btn w-100 text-white  search-btn-click"
              onClick={() => setIsActive(!isActive)}
            >
              <span>
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>
              Axtarış etmək
            </button>
          </div>
          {isActive && (
            <div className="d-flex flex-wrap search-flex-part bg-success">
              <HomeKind HomeOrFlat={HomeOrFlat}/>
              <Metro myRef={myRef}/>
              <RegionJsx Region={Region}/>
              <RoomCount Room={Room}/>
              <PriceJsx Price={Price}/>
             {sessionStorage.getItem("Search") && (
                 <div className="d-flex align-items-center col-12">
                 <div className="col-12 col-lg-6 mt-4 pt-1">
                   <button
                     className="btn btn-mycolor"
                     onClick={RefuseSearch}
                   >
                     Əvvəlki axtarışı ləğv etmək
                   </button>
                 </div>
               </div>
             )
             } 
              <div className="d-flex align-items-center col-12">
                <div className="col-12 col-lg-6 mt-4 pt-1">
                  <button
                    className="btn btn-mycolor"
                    onClick={GetDataFromSearch}
                  >
                    Axtarmaq
                  </button>
                </div>
              </div>
            </div>
          )}
          {isMedia && (
            <Alert Room={Room2} Region={Region2} Metro={Metro2} HomeOrFlat={Building2} Price={Price2} setIsActiveFunk={setIsActiveFunk} isRoom={true} Kind="Rent"/>
          )}
        </div>
      </div>
      <div className="d-flex flex-row">
      <div className="col-12 mt-3 pe-2 ps-2">
        <Link to="Səbət" className="btn w-100 text-white  search-btn-click">
        <i className="fa-solid fa-basket-shopping"></i> Mənim səbətim 
        </Link>
      </div>
      {/* <div className="col-6 mt-3 pe-2">
        <Link to="Səbət" className="btn w-100 text-white  search-btn-click">
        <i class="fa-solid fa-envelope"></i> Mailə göndərmək
        </Link>
      </div> */}
      </div>
      <div className="col-12 mt-3 pe-2 ps-2 ">
        <Link to="mapSearch" className="btn w-100 bg-map">
          <div className="btn  text-white p-1  search-btn-click">
          <i class="fa-solid fa-location-dot"></i> Xəritə üzrə baxmaq 
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Search;