import React, { useState, useRef ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import {useNavigate} from "react-router-dom";
import Alert from '../../src/MyComponents/Alert';
const SearchLand = ({setRegion,setPrice ,setClick}) => {
    const [isActive, setIsActive] = useState(false);
    const [isMedia, setIsMedia] = useState(false);
    const Region = useRef([]);
    const Price= useRef([]);
    const nav=useNavigate();
    const ArrayNewSetSendDataRegion=[]
    const ArrayNewSetSendDataPrice=[]
    var isMediaPrice=true;
    const[Price2, setPrice2]=useState([]);
    const[Region2, setRegion2]=useState([]);
  
   const setIsActiveFunk=(x)=>{
      setIsMedia(!isMedia)
   }
    const GetDataFromSearch = (e) => {  
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
      setClick(true);
      setPrice(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
      setRegion(ArrayNewSetSendDataRegion);
  
         

      setPrice2(ArrayNewSetSendDataPrice.sort((a, b) => b - a));
      setRegion2(ArrayNewSetSendDataRegion);
      
      if(isMediaPrice){
      sessionStorage.setItem("PriceLand",ArrayNewSetSendDataPrice.sort((a, b) => b - a));
      sessionStorage.setItem("RegionLand",ArrayNewSetSendDataRegion);
      sessionStorage.setItem("SearchLand",true);
      }
      if(!sessionStorage.getItem("FirstMediaLand") && isMediaPrice){
        setIsMedia(!isMedia);
        sessionStorage.setItem("FirstMediaLand",true);
      }
    };
    useEffect(()=>{
      if(sessionStorage.getItem("SearchLand")){
        setClick(true);
        var sessionPrice=sessionStorage.getItem("PriceLand")
        var sessionRegion=sessionStorage.getItem("RegionLand")
  
        if(sessionPrice!==""){
           setPrice(sessionPrice.split(","));
        }
        if(sessionRegion!==""){
          const Region = sessionRegion.split(",");
          setRegion(Region);
        }
        setIsActive(true);
      }
    },[])
   const RefuseSearch =()=>{
    sessionStorage.removeItem("SearchLand");
    sessionStorage.removeItem("PriceLand");
    sessionStorage.removeItem("RegionLand");
    setClick(false);
    setIsActive(false);
    nav("/Land");
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
              <div className="col-12">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect" >
                  <span>Rayon:</span>
                  <span ><i className="fa-solid fa-chevron-down"></i></span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                        name=""
                      />
                      <label className="ms-1">Bütün</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nəsimi"
                        ref={(element) => (Region.current[1] = element)}
                      />
                      <label className="ms-1">Nəsimi Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nizami"
                        ref={(element) => (Region.current[2] = element)}
                      />
                      <label className="ms-1">Nizami Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xətai"
                        ref={(element) => (Region.current[3] = element)}
                      />
                      <label className="ms-1">Xətai Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nərmanov"
                        ref={(element) => (Region.current[4] = element)}
                      />
                      <label className="ms-1">Nərmanov Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Yasamal"
                        ref={(element) => (Region.current[5] = element)}
                      />
                      <label className="ms-1">Yasamal Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Pirallahı"
                        ref={(element) => (Region.current[6] = element)}
                      />
                      <label className="ms-1">Pirallahı Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Suraxanı"
                        ref={(element) => (Region.current[7] = element)}
                      />
                      <label className="ms-1">Suraxanı Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Sabunçu"
                        ref={(element) => (Region.current[8] = element)}
                      />
                      <label className="ms-1">Sabunçu Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Səbail"
                        ref={(element) => (Region.current[9] = element)}
                      />
                      <label className="ms-1">Səbail Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xəzər"
                        ref={(element) => (Region.current[10] = element)}
                      />
                      <label className="ms-1">Xəzər Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Qaradağ"
                        ref={(element) => (Region.current[11] = element)}
                      />
                      <label className="ms-1">Qaradağ Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Binəqədi"
                        ref={(element) => (Region.current[12] = element)}
                      />
                      <label className="ms-1">Binəqədi Rayon</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Abşeron"
                        ref={(element) => (Region.current[13] = element)}
                      />
                      <label className="ms-1">Abşeron Rayon</label>
                    </div>
                  </div>
                </div>

              </div>
              
              <div className=' d-flex flex-row justify-content-center col-12'>
                <div className='col-12 col-lg-8 mt-4'>
                  <label >Qiymet:</label>
                  <div className="d-flex flex-row max-min-input mt-1">
                    <input
                      type="number"
                      placeholder="Max"
                      inputmode="numeric"
                      ref={(element) => (Price.current[1] = element)}
                    />
                    <input
                      type="number"
                      placeholder="Min"
                      inputmode="numeric"
                      ref={(element) => (Price.current[2] = element)}
                    />
                  </div>
                </div>
              </div>
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
          Mənim səbətim
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