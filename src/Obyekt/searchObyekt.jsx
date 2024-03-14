import React, { useState, useRef,useEffect } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import Alert from "../MyComponents/Alert";
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
  const myRef = useRef([]);
  const HomeOrFlat = useRef([]);
  const Region = useRef([]);
  const Room = useRef([]);
  const Price = useRef([]);
  var isMediaPrice=true;

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
    
    if(!sessionStorage.getItem("FirstMediaObyekt") && isMediaPrice){
      setIsMedia(!isMedia);
      sessionStorage.setItem("FirstMediaObyekt",true);
    }
    if(isMediaPrice){
    sessionStorage.setItem("PriceObyekt",ArrayNewSetSendDataPrice.sort((a, b) => b - a));
    sessionStorage.setItem("RoomObyekt",ArrayNewSetSendDataRoom);
    sessionStorage.setItem("RegionObyekt",ArrayNewSetSendDataRegion);
    sessionStorage.setItem("HomeOrFlatObyekt",ArrayNewSetHomeOrFlat);
    sessionStorage.setItem("MetroObyekt",ArrayNewBool);
    sessionStorage.setItem("SearchObyekt",true);
    }
  };
  useEffect(()=>{
    if(sessionStorage.getItem("SearchObyekt")){
      setClick(true);
      var sessionPrice=sessionStorage.getItem("PriceObyekt")
      var sessionRoom=sessionStorage.getItem("RoomObyekt")
      var sessionRegion=sessionStorage.getItem("RegionObyekt")
      var sessionMetro=sessionStorage.getItem("MetroObyekt")
      var sessionHomeOrFlat=sessionStorage.getItem("HomeOrFlatObyekt")

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
  sessionStorage.removeItem("SearchObyekt");
  sessionStorage.removeItem("PriceObyekt");
  sessionStorage.removeItem("RoomObyekt");
  sessionStorage.removeItem("MetroObyekt");
  sessionStorage.removeItem("HomeOrFlatObyekt");
  sessionStorage.removeItem("RegionObyekt");
  setClick(false);
  setIsActive(false);
  nav("/obyekt");
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
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Kirayə yoxsa satılıq:</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12">
                  <div className="col-12 div-in-select chechAndLabel ms-1">
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Satılır"
                        ref={(element) => (HomeOrFlat.current[1] = element)}
                      />
                      <label className="ms-1">Satılıq</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Kiraye verilir"
                        ref={(element) => (HomeOrFlat.current[2] = element)}
                      />
                      <label className="ms-1">Kirayə</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Metro</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                        name=""
                        id="0"
                    
                      />
                      <label className="ms-1">
                        Bütün
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Metroya yaxın deyil"
                        ref={(element) => (myRef.current[1] = element)}
                      />
                      <label className="ms-1">
                        Metroya yaxın olmasın.
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Həzi"
                        ref={(element) => (myRef.current[2] = element)}
                      />
                      <label className="ms-1">Həzi Aslanov Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Əhmədli"
                        ref={(element) => (myRef.current[3] = element)}
                      />
                      <label className="ms-1">Əhmədli Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xalqlar"
                        ref={(element) => (myRef.current[4] = element)}
                      />
                      <label className="ms-1">Xalqlar dostluğu Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Neftçilər"
                        ref={(element) => (myRef.current[5] = element)}
                      />
                      <label className="ms-1">Neftçilər Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Qarayev"
                        ref={(element) => (myRef.current[6] = element)}
                      />
                      <label className="ms-1">Qara qarayev Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Koroğlu"
                        ref={(element) => (myRef.current[7] = element)}
                      />
                      <label className="ms-1">Koroğlu Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Bakmil"
                        ref={(element) => (myRef.current[8] = element)}
                      />
                      <label className="ms-1">Bakmil Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nərmanov"
                        ref={(element) => (myRef.current[9] = element)}
                      />
                      <label className="ms-1">Nərman Nərmanov Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Gənçlik"
                        ref={(element) => (myRef.current[10] = element)}
                      />
                      <label className="ms-1">Gənçlik Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="28 May"
                        ref={(element) => (myRef.current[11] = element)}
                      />
                      <label className="ms-1">28 May Metrosu.</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xətai"
                        ref={(element) => (myRef.current[12] = element)}
                      />
                      <label className="ms-1">Şah İsmayıl Xətai Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Sahil"
                        ref={(element) => (myRef.current[13] = element)}
                      />
                      <label className="ms-1">Sahil Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="İçərişəhər"
                        ref={(element) => (myRef.current[14] = element)}
                      />
                      <label className="ms-1">İçərişəhər Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nizami"
                        ref={(element) => (myRef.current[15] = element)}
                      />
                      <label className="ms-1">Nizami Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Elmlər"
                        ref={(element) => (myRef.current[16] = element)}
                      />
                      <label className="ms-1">Elmlər Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="İnşaatçılar"
                        ref={(element) => (myRef.current[17] = element)}
                      />
                      <label className="ms-1">İnşaatçılar Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="20 Yanvar"
                        ref={(element) => (myRef.current[18] = element)}
                      />
                      <label className="ms-1">20 Yanvar Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Əcəmi"
                        ref={(element) => (myRef.current[19] = element)}
                      />
                      <label className="ms-1">Memar Əcəmi Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Nəsimi"
                        ref={(element) => (myRef.current[20] = element)}
                      />
                      <label className="ms-1">Nəsimi Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Azadlıq"
                        ref={(element) => (myRef.current[21] = element)}
                      />
                      <label className="ms-1">Azadlıq Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Dərnəgül"
                        ref={(element) => (myRef.current[22] = element)}
                      />
                      <label className="ms-1">Dərnəgül Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Noyabr"
                        ref={(element) => (myRef.current[23] = element)}
                      />
                      <label className="ms-1">8 Noyabr Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Avtovağzal"
                        ref={(element) => (myRef.current[24] = element)}
                      />
                      <label className="ms-1">Avtovağzal Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Xocəsən"
                        ref={(element) => (myRef.current[25] = element)}
                      />
                      <label className="ms-1">Xocəsən Metrosu</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="Ulduz"
                        ref={(element) => (myRef.current[26] = element)}
                      />
                      <label className="ms-1">Ulduz Metrosu.</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Rayon:</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                        name=""
                        id="0"
                        
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
              <div className="col-12 col-lg-3">
                <div className="d-flex flex-row justify-content-between p-2 MakeHandSelect">
                  <span>Otaq sayı:</span>
                  <span>
                    <i className="fa-solid fa-chevron-down"></i>
                  </span>
                </div>

                <div className="mt-3 col-12 pe-2">
                  <div className="col-12 div-in-select chechAndLabel forOverFlow ms-1 pe-1">
                  <div>
                      <input
                        type="checkbox"
                        name=""
                        id="0"
                    
                      />
                      <label className="ms-1">Bütün</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="1"
                        ref={(element) => (Room.current[1] = element)}
                      />
                      <label className="ms-1">1 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="2"
                        ref={(element) => (Room.current[2] = element)}
                      />
                      <label className="ms-1">2 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="3"
                        ref={(element) => (Room.current[3] = element)}
                      />
                      <label className="ms-1">3 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="4"
                        ref={(element) => (Room.current[4] = element)}
                      />
                      <label className="ms-1">4 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="5"
                        ref={(element) => (Room.current[5] = element)}
                      />
                      <label className="ms-1">5 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="6"
                        ref={(element) => (Room.current[6] = element)}
                      />
                      <label className="ms-1">6 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="7"
                        ref={(element) => (Room.current[7] = element)}
                      />
                      <label className="ms-1">7 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="8"
                        ref={(element) => (Room.current[8] = element)}
                      />
                      <label className="ms-1">8 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="9"
                        ref={(element) => (Room.current[9] = element)}
                      />
                      <label className="ms-1">9 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="10"
                        ref={(element) => (Room.current[10] = element)}
                      />
                      <label className="ms-1">10 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="11"
                        ref={(element) => (Room.current[11] = element)}
                      />
                      <label className="ms-1">11 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="12"
                        ref={(element) => (Room.current[12] = element)}
                      />
                      <label className="ms-1">12 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="13"
                        ref={(element) => (Room.current[13] = element)}
                      />
                      <label className="ms-1">13 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="14"
                        ref={(element) => (Room.current[14] = element)}
                      />
                      <label className="ms-1">14 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="15"
                        ref={(element) => (Room.current[15] = element)}
                      />
                      <label className="ms-1">15 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="16"
                        ref={(element) => (Room.current[16] = element)}
                      />
                      <label className="ms-1">16 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="17"
                        ref={(element) => (Room.current[17] = element)}
                      />
                      <label className="ms-1">17 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="18"
                        ref={(element) => (Room.current[18] = element)}
                      />
                      <label className="ms-1">18 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="19"
                        ref={(element) => (Room.current[19] = element)}
                      />
                      <label className="ms-1">19 Otaqlı</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name=""
                        id="20"
                        ref={(element) => (Room.current[20] = element)}
                      />
                      <label className="ms-1">20 Otaqlı</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" d-flex flex-row justify-content-center col-12">
                <div className="col-12 col-lg-8 mt-4">
                  <label>Qiymet:</label>
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
              {sessionStorage.getItem("SearchObyekt") && (
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
          )}{isMedia && (
            <Alert Room={Room2} Region={Region2} Metro={Metro2} HomeOrFlat={Building2} Price={Price2} setIsActiveFunk={setIsActiveFunk} isObyekt={true} Kind="Obyekt"/>
          )}
        </div>
      </div>
      <div className="col-12 mt-3 pe-2 ps-2">
        <Link to="Səbət" className="btn w-100 text-white  search-btn-click">
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
  );
};

export default Search;
