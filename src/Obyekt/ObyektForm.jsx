import React from "react";
import { useState, useRef,useEffect } from "react";
import Swal from "sweetalert2";
import FetchPostImg from "../MyComponents/FetchPostImg";
import FetchPostAll from "../MyComponents/FetchPostAll";
import TurnImgIn from "../MyComponents/TurnImgIn";
import Coordinate from "../mainpage/answer/coordinate";
import NumberTurn from "../MyComponents/NumberTurn";
import FetchPut from "../MyComponentsAdmin/FetchPut";
import UpLoad from "../MyComponents/UpLoad";
import {useNavigate} from 'react-router-dom'
const ObyektForm = ({ Data, IsUpdating, SendFalse}) => {
  const nav=useNavigate();
  const [IsLoading,setIsLoading]=useState(false);
  const [CoordinateX,setCoordinateX]=useState(null);
  const [CoordinateY,setCoordinateY]=useState(null);
  const SendX=(x)=>{
   setCoordinateX(x)
  };
  const SendY=(y)=>{
   setCoordinateY(y)
  };

  const FullName = useRef(null);
  const Number = useRef(null);
  const Region = useRef(null);
  const Address = useRef(null);

  const Metro = useRef(null);
  const Room = useRef(null);
  const Repair = useRef(null);
  const Area = useRef(null);
  const Price = useRef(null);
  const Addition = useRef(null);
  const Paper = useRef(null);
  const SellorRent = useRef(null);
  const İtem = useRef(null);


  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files).slice(0, 10); 
      const newImageUrls = selectedImages.map((image) =>
        URL.createObjectURL(image)
      );
      if (images.length > 9) {
        return;
      }
      setImages((prevImages) => [...prevImages, ...newImageUrls]);
      setImagesFile((prevImages) => [...prevImages, event.target.files[0]]);
    }
  };

  var [keepingImgSource, setkeepingImgSource] = useState([]);
  useEffect(() => {
    setkeepingImgSource(images);
   },[images]) 
   const [sellOrRent, setSellOrRent] = useState(false);
   useEffect(()=>{
    if (IsUpdating) {
      if(Data.sellorRent==="Satılır"){
        setSellOrRent(true);
      }else{
        setSellOrRent(false);
      }
      
      FullName.current.value = Data.fullname;
      Number.current.value = Data.number;
      setCoordinateX(Data.coordinateX);
      setCoordinateY(Data.coordinateY);
      Region.current.value = Data.region;
      Address.current.value = Data.address;
      Metro.current.value = Data.metro;
      Room.current.value = Data.room;
      SellorRent.current.value=Data.sellorRent;
      Repair.current.value = Data.repair;
      İtem.current.value = Data.İtem;
      Area.current.value = Data.area;
      Price.current.value = Data.price;
      Addition.current.value = Data.addition;
     
    
}
   },[Data])
  
 

  const handleSellOrRentChange = (event) => {
    if(event.target.value==="Satılır"){
      setSellOrRent(true);
    }else{
      setSellOrRent(false);
    }
    
  };

  const UploadInformation = () => {
    const formData = {
      FullName: FullName.current.value,
      Number:NumberTurn(Number.current.value),
      
      CoordinateX:CoordinateX,
      CoordinateY:CoordinateY,
      Region: Region.current.value,
      Address: Address.current.value,
      Metro: Metro.current.value,
      Room: Room.current.value,
      Repair: Repair.current.value,
      Area: Area.current.value,
      İtem: İtem.current.value,
      Price: Price.current.value,
      Addition: Addition.current.value,
      SellorRent: SellorRent.current.value,
      Document: sellOrRent ? Paper.current.value : null ,
    };

    if (
      formData.FullName !== "" &&
      formData.FullName.length<50 &&
      formData.Number !== "" &&
      formData.Number.length<30 &&
      formData.Address !== "" &&
      formData.Address.length<50 &&
      formData.Metro !== "" &&
      formData.Price !== "" &&
      formData.Price<40000000 &&
      formData.Area !== "" &&
      formData.Area<30000 &&
      formData.İtem !== "" &&
      formData.İtem.length<50 &&
      formData.Repair !== "" &&
      formData.Paper !== "" &&
      formData.Address.length<50 &&
      formData.Addition.length<500 &&
      formData.SellorRent !== "" &&
      images.length > 4 &&
      !isNaN(parseFloat(formData.Price)) &&
      !isNaN(parseFloat(formData.Area)) &&
      !isNaN(parseFloat(formData.Room))
    ) {
      if(!IsLoading){
      setTimeout(() => {
        setIsLoading(true);
      }, 500);
      FetchPostAll(formData,"Obyekt",imgFunc)
      setTimeout(() => {
        setIsLoading(false)
        Swal.fire({
          title: "Uğurlu",
          text: "Elanınız yükləndi.",
          icon: "success",
        });
        FullName.current.value = "";
      Number.current.value = "";
      Address.current.value = "";
      Area.current.value = "";
      Addition.current.value = "";
      Price.current.value = "";
      Metro.current.value = "";
      Region.current.value = "";
      İtem.current.value = "";
      Room.current.value = "";
      Repair.current.value = "";
      SellorRent.current.value = "";
      setImages([]);
      setImagesFile([]);
        nav("/obyekt");
      }, 10000);
    }else{
      Swal.fire({
        title: "Gözləyin",
        text: "Elanınız yüklənir...",
        icon: "info",
      });
  } 
    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error",
      });
    }
  };
  const imgFunc = () => {
    let formData = new FormData();
    for (let i = 0; i < imagesFile.length; i++) {
      formData.append(`image`, imagesFile[i]);
    }
    FetchPostImg(formData,"ObyektImg");
  };
  const updateload = () => {
    Data.fullname = FullName.current.value;
    Data.number = Number.current.value;
    Data.region = Region.current.value;
    Data.coordinateX=CoordinateX;
    Data.coordinateY=CoordinateY;
    Data.address = Address.current.value;
    Data.metro = Metro.current.value;
    Data.room = Room.current.value;
    Data.repair = Repair.current.value;
    Data.item = İtem.current.value;
    Data.area = Area.current.value;
    Data.price = Price.current.value;
    Data.addition = Addition.current.value;
    Data.sellorRent= SellorRent.current.value;
    if (SellorRent && SellorRent.current && Paper && Paper.current) {
      if (SellorRent.current.value === 'Satılır') {
          Data.document = Paper.current.value === '' ? Data.document : Paper.current.value;
      }}
  

    if (
      Data.fullname !== "" &&
      Data.number !== "" &&
      Data.address !== "" &&
      Data.metro !== "" &&
      Data.price !== "" &&
      Data.floor !== "" &&
      Data.area !== "" &&
      Data.item !== "" &&
      Data.repair !== "" &&
      Data.sellorRent !== "" &&
      !isNaN(parseFloat(Data.price)) &&
      !isNaN(parseFloat(Data.area)) &&
      !isNaN(parseFloat(Data.room))
    ) {
      const PutData=async()=>{
        await FetchPut(Data,"Obyekt");
       }
       PutData();
      setTimeout(() => {
        Swal.fire({
          title: "Uğurlu",
          text: "Elanınız yükləndi.",
          icon: "success",
        });
      }, 500);
      setImages([]);
      setImagesFile([]);

      SendFalse();

    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error",
      });
    }
  };
  return (
    <div>
      <div className="mt-5 ms-1">
        <div className="d-flex flex-column align-items-center ">
          <div className="col-5">
            <p className="text-center text-danger">
              <strong>
                Yalnız obyekt sahibləri elan yerləşdirə bilər.
                <br />
                Əmlakçıların elan yerləşdirilmısinə icazə verilmir!!!
              </strong>
            </p>
          </div>
          <div className="col-12">
            <div>
              <p>
                {" "}
                <strong>
                  Obyektinizi satmaq və ya kiraye vermək üçün aşağıdakı sualları
                  cavablandırın:
                </strong>
              </p>
            </div>
          </div>
          <div className="col-12">
            <div>
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Obyekt sahibinin adı və Soyadı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={FullName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Obyekt sahibinin əlaqə nömrəsi:(Nömrəniz gizli saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" placeholder="0xx-xxx-xx-xx" ref={Number} inputmode="numeric"/>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  * Obyektinizə aid 5-10 şəkil əlavə edin.
                </p>
                <div className="custom-file-input" onClick={triggerFileInput}>
                  Şəkil əlavə etmək.
                </div>
                <input
                  type="file"
                  onChange={onImageChange}
                  className="filetype"
                  multiple
                  ref={fileInputRef}
                  style={{ display: "none" }}
                />
                <div className="mt-4">
                  <p>Yüklədiyiniz şəkil sayı: {images.length}</p>
                </div>
              </div>
            </div>
            <div>
              <div className=" col-12 p-2 mt-4 ps-2 ">
                <div className="answer-images-rent">
                  <div className="overflow-hidden shadowHomeColor">
                  <TurnImgIn keepingImgSource={keepingImgSource} Counter={true}/>

                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Obyektin yerləşdiyi rayon:</label>
              </div>
              <div className="col-12 div-in-select">
              <select name="" id="" ref={Region}>
                  <option value=""></option>
                  <option value="Nəsimi">Nəsimi Rayon</option>
                  <option value="Nizami">Nizami Rayon</option>
                  <option value="Xətai">Xətai Rayon</option>
                  <option value="Nərmanov">Nərmanov Rayon</option>
                  <option value="Yasamal">Yasamal Rayon</option>
                  <option value="Pirallahı">Pirallahı Rayon</option>
                  <option value="Suraxanı">Suraxanı Rayon</option>
                  <option value="Sabunçu">Sabunçu Rayon</option>
                  <option value="Səbail">Səbail Rayon</option>
                  <option value="Xəzər">Xəzər Rayon</option>
                  <option value="Qaradağ">Qaradağ Rayon</option>
                  <option value="Binəqədi">Binəqədi Rayon</option>
                  <option value="Abşeron">Abşeron Rayon</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Obyektin yerləşdiyi küçənin adı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Address} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="sellOrRentSelect">
                <span className="attention">* </span>Obyektinizi satırsınız yoxsa kiraye verirsiniz:
                </label>
              </div>
              <div className="col-12 div-in-select">
                <select id="sellOrRentSelect" ref={SellorRent} onChange={handleSellOrRentChange}>
                  <option value=""></option>
                  <option value="Satılır">Satılır</option>
                  <option value="Kiraye verilir">Kiraye verilir</option>
                </select>
              </div>
            </div>
  
            {sellOrRent && (
              <div className="mt-3">
                <div className="div-in-label">
                  <label htmlFor="documentSelect"><span className="attention">* </span>Sənəd:</label>
                </div>
                <div className="col-12 div-in-select">
                  <select id="documentSelect" ref={Paper}>
                    <option value=""></option>
                    <option value="Kupça var.">Kupça var.</option>
                    <option value="Kupça yoxdur.">Kupça yoxdur.</option>
                  </select>
                </div>
              </div>
            )}
        
           
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Obyectinin qiyməti:</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" ref={Price} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Əşya:</label>
              </div>

              <div className="col-12 div-in-select">
                <select name="" id="" ref={İtem}>
                  <option value=""></option>
                  <option value="Obyektin içərisi boşdur.">Obyektin içərisi boşdur.</option>
                  <option value="Bəzi əşya ilə birlikdə verilir.">Obyektdə bəzi əşyalar var.</option>
                  <option value="Obyektdə bütün əşyalar var.">Obyektdə bütün əşyalar var.</option>
                </select>
              </div>
            </div>
            <div className="mt-3">
            <p><span className="attention">* </span>Evin konumunu qeyd edin.</p>
              <Coordinate x={SendX} y={SendY} CanClick={true}/>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Metro:</label>
              </div>
              <div className="col-12 div-in-select">
              <select name="" id="" ref={Metro}>
                  <option value=""></option>
                  <option value="Metroya yaxın deyil">
                    Metroya yaxın deyil
                  </option>
                  <option value="Həzi">Həzi Aslanov Metrosu</option>
                  <option value="Əhmədli">Əhmədli Metrosu</option>
                  <option value="Xalqlar">Xalqlar dostluğu Metrosu</option>
                  <option value="Neftçilər">Neftçilər Metrosu</option>
                  <option value="Qarayev">Qara qarayev Metrosu</option>
                  <option value="Koroğlu">Koroğlu Metrosu</option>
                  <option value="Ulduz">Ulduz Metrosu</option>
                  <option value="Bakmil">Bakmil Metrosu</option>
                  <option value="Nərmanov">Nərman Nərmanov Metrosu</option>
                  <option value="Gənçlik">Gənçlik Metrosu</option>
                  <option value="28 May">28 May Metrosu</option>
                  <option value="Xətai">Şah İsmayıl Xətai Metrosu</option>
                  <option value="Sahil">Sahil Metrosu</option>
                  <option value="İçərişəhər">İçərişəhər Metrosu</option>
                  <option value="Nizami">Nizami Metrosu</option>
                  <option value="Elmlər">Elmlər Metrosu</option>
                  <option value="İnşaatçılar">İnşaatçılar Metrosu</option>
                  <option value="20 Yanvar">20 Yanvar Metrosu</option>
                  <option value="Əcəmi">Memar Əcəmi Metrosu</option>
                  <option value="Nəsimi">Nəsimi Metrosu</option>
                  <option value="Azadlıq">Azadlıq Metrosu</option>
                  <option value="Dərnəgül">Dərnəgül Metrosu</option>
                  <option value="Noyabr">8 Noyabr Metrosu</option>
                  <option value="Avtovağzal">Avtovağzal Metrosu</option>
                  <option value="Xocəsən">Xocəsən Metrosu</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Otaq sayı:</label>
              </div>
              <div className="col-12 div-in-select">
              <select name="" id="" ref={Room}>
                  <option value=""></option>
                  <option value="1"> 1 otaqlı</option>
                  <option value="2"> 2 otaqlı</option>
                  <option value="3"> 3 otaqlı</option>
                  <option value="4"> 4 otaqlı</option>
                  <option value="5"> 5 otaqlı</option>
                  <option value="6"> 6 otaqlı</option>
                  <option value="7"> 7 otaqlı</option>
                  <option value="8"> 8 otaqlı</option>
                  <option value="9"> 9 otaqlı</option>
                  <option value="10"> 10 otaqlı</option>
                  <option value="11"> 11 otaqlı</option>
                  <option value="12"> 12 otaqlı</option>
                  <option value="13"> 13 otaqlı</option>
                  <option value="14"> 14 otaqlı</option>
                  <option value="15"> 15 otaqlı</option>
                  <option value="16"> 16 otaqlı</option>
                  <option value="17"> 17 otaqlı</option>
                  <option value="18"> 18 otaqlı</option>
                  <option value="19"> 19 otaqlı</option>
                  <option value="20"> 20 otaqlı</option>
                 
                </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Təmir:</label>
              </div>
              <div className="col-12 div-in-select">
                <select name="" id="" ref={Repair}>
                  <option value=""></option>
                  <option value="Təmirsiz">Təmirsiz</option>
                  <option value="Orta təmirli">Orta təmirli</option>
                  <option value="Təmirli">Təmirli</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Obyektin sahəsi: (m²)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" ref={Area} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  Obyekt haqqında əlavə məlumat yaza bilərsiniz:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Addition} />
              </div>
            </div>
            {IsLoading && ( <UpLoad/>)}
            <div className="d-flex justify-content-center col-12 mb-5">
            {!IsUpdating && (
                <div className=" mt-5">
                  <button
                    className="btn btn-mycolor pe-5 ps-5"
                    onClick={UploadInformation}
                  >
                    Elan yerləşdirmək
                  </button>
                </div>
              )}
              {IsUpdating && (
                <div className=" mt-5">
                  <button
                    className="btn btn-mycolor pe-5 ps-5"
                    onClick={updateload}
                  >
                    Yenilənməni tamamla
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObyektForm;
