import React, { useState, useRef ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import Alert from '../../src/MyComponents/Alert';
import PriceJsx from '../MyComponents/Price';
import RegionJsx from '../MyComponents/Region';
const SearchLand = ({setRegion,setPrice ,RefuseFunction}) => {
    const [isActive, setIsActive] = useState(false);
    const [isMedia, setIsMedia] = useState(false);
    const Region = useRef([]);
    const Price= useRef([]);
    const ArrayNewSetSendDataRegion=[]
    const ArrayNewSetSendDataPrice=[]
    var isMediaPrice=true;
    const[Price2, setPrice2]=useState([]);
    const[Region2, setRegion2]=useState([]);
    var Refuse=RefuseFunction;
   const setIsActiveFunk=()=>{
      setIsMedia(!isMedia)
   }
    const GetDataFromSearch = () => {  
      isMediaPrice=true
   
      for (var i = 1; i < Region.current.length; i++) {
        if (Region.current[i].checked) {
          ArrayNewSetSendDataRegion.push(Region.current[i].id);
        }
      }
      for (var i = 1; i < Price.current.length; i++) { 
        if(Price.current[i].value===""){
          Swal.fire({
            title: "Diqqət!",
            text: "Qiymət aralığı qeyd edilməlidir!!!",
            icon: "warning"
          });
          isMediaPrice=false;
        }else{
           ArrayNewSetSendDataPrice.push(Price.current[i].value);
        }
        
      } 
      setPrice(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
      setRegion(ArrayNewSetSendDataRegion);
  
      setPrice2(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
      setRegion2(ArrayNewSetSendDataRegion);
      
      if(isMediaPrice){
      sessionStorage.setItem("SearchLand",true);
      }
      if(!sessionStorage.getItem("FirstMediaLand") && isMediaPrice){
        setIsMedia(!isMedia);
        sessionStorage.setItem("FirstMediaLand",true);
      }
    };
    useEffect(()=>{
      if(sessionStorage.getItem("SearchLand")){
        setIsActive(true);
      }
    },[])
   const RefuseSearch =()=>{
    sessionStorage.removeItem("SearchLand");
    setIsActive(false);
    Refuse();
   }
  return (
    <div>
      <div className="search-part pe-2 ps-2">
        <div className='col-12'>
          <div className="col-12">
            <button className='btn w-100 text-white  search-btn-click' onClick={() => setIsActive(!isActive)}>
              <span><i className="fa-solid fa-magnifying-glass"></i></span>Axtarış etmək
            </button>
          </div>
          {isActive && (
            <div className='d-flex flex-wrap search-flex-part bg-success'>
              <div className='d-flex justify-content-center align-items-center col-12'>
              <RegionJsx Region={Region}/>
                </div>
              <PriceJsx Price={Price}/>
              {sessionStorage.getItem("SearchLand") && (
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
              <div className='d-flex align-items-center col-12'>
                <div className='col-12 col-lg-6 mt-4 pt-1'>
                  <button className='btn btn-mycolor' onClick={GetDataFromSearch}>Axtarmaq</button>
                </div>
              </div>

            </div>

          )}
          {isMedia && (
            <Alert Region={Region2}  Price={Price2} setIsActiveFunk={setIsActiveFunk} isRoom={true} Kind="Land"/>
          )}
        </div>
      </div>
      <div className="col-12 mt-3 pe-2 ps-2">
        <Link to="Səbət" className='btn w-100 text-white  search-btn-click' >
        <i className="fa-solid fa-basket-shopping"></i> Mənim səbətim 
        </Link>
      </div>
      <div className="col-12 mt-3 pe-2 ps-2 ">
        <Link to="mapSearch" className="btn w-100 bg-map">
          <div className="btn  text-white p-1  search-btn-click">
          <i class="fa-solid fa-location-dot"></i> Xəritə üzrə baxmaq 
          </div>
        </Link>
      </div>
    </div>
  )
}

export default SearchLand