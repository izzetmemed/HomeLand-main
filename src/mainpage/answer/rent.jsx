import React from "react";
import { useState, useRef, useEffect } from "react";
import Coordinate from "./coordinate";
import {useNavigate} from 'react-router-dom';
import FetchPostImg from "../../MyComponents/FetchPostImg";
import Swal from "sweetalert2";
import FetchPostAll from "../../MyComponents/FetchPostAll";
import TurnImgIn from "../../MyComponents/TurnImgIn";
import NumberTurn from "../../MyComponents/NumberTurn";
import FetchPut from "../../MyComponentsAdmin/FetchPut";
import UpLoad from "../../MyComponents/UpLoad";
import CheckEmpty from "../../MyComponents/CheckEmpty";
import CheckLength from "../../MyComponents/CheckLength";
import CheckNumber from "../../MyComponents/CheckNumber";
import WarningComp from "../../MyComponents/WarningComp";
const Rent = ({ Data, IsUpdating, SendFalse}) => {
  const nav=useNavigate();
  const [IsLoading,setIsLoading]=useState(false);
   const [CoordinateX,setCoordinateX]=useState(null);
 const [CoordinateY,setCoordinateY]=useState(null);
 const [warning, setWarning] = useState([]);
  const FullName = useRef(null);
  const Number = useRef(null);
  const Region = useRef(null);
  const Address = useRef(null);
  const Floor = useRef(null);
  const Metro = useRef(null);
  const Room = useRef(null);
  const Repair = useRef(null);
  const Building = useRef(null);
  const İtem = useRef(null);
  const Bed = useRef(null);
  const wardrobe = useRef(null);
  const TableChair = useRef(null);
  const HeatingSystem = useRef(null);
  const GasHeating = useRef(null);
  const Combi = useRef(null);
  const Tv = useRef(null);
  const WashingClothes = useRef(null);
  const AirConditioning = useRef(null);
  const Sofa = useRef(null);
  const Wifi = useRef(null);
  const Area = useRef(null);
  const Price = useRef(null);
  const Boy = useRef(null);
  const Girl = useRef(null);
  const Family = useRef(null);
  const WorkingBoy = useRef(null);
  const Addition = useRef(null);

  const [images, setImages] = useState([]);
  var [keepingImgSource, setkeepingImgSource] = useState([]);
  useEffect(() => {
    setkeepingImgSource(images);
   },[images]) 
  useEffect(() => {
  
    if (IsUpdating) {
      
      FullName.current.value = Data.fullname;
      Number.current.value = Data.number;
      Region.current.value = Data.region;
      Address.current.value = Data.address;
      setCoordinateX(Data.coordinateX);
      setCoordinateY(Data.coordinateY);
      Floor.current.value = Data.floor;
      Metro.current.value = Data.metro;
      Room.current.value = Data.room;
      Repair.current.value = Data.repair;
      Building.current.value = Data.building;
      İtem.current.value = Data.İtem;
      Bed.current.checked = Data.bed;
      wardrobe.current.checked = Data.wardrobe;
      TableChair.current.checked = Data.tableChair;
      HeatingSystem.current.checked = Data.centralHeating;
      GasHeating.current.checked = Data.gasHeating;
      Combi.current.checked = Data.combi;
      Tv.current.checked = Data.tv;
      WashingClothes.current.checked = Data.washingClosthes;
      AirConditioning.current.checked = Data.airConditioning;
      Sofa.current.checked = Data.sofa;
      Wifi.current.checked = Data.wifi;
      Area.current.value = Data.area;
      Price.current.value = Data.price;
      Boy.current.checked = Data.boy;
      Girl.current.checked = Data.girl;
      Family.current.checked = Data.family;
      WorkingBoy.current.checked = Data.workingBoy;
      Addition.current.value = Data.addition;
    }
  }, [IsUpdating, Data]);

  const fileInputRef = useRef(null);

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

  const UploadInformation = () => {
    setWarning([]);
    const formData = {
      FullName: FullName.current.value,
      Number:NumberTurn(Number.current.value),
      CoordinateX:CoordinateX,
      CoordinateY:CoordinateY,
      Region: Region.current.value,
      Address: Address.current.value,
      Floor: Floor.current.value,
      Metro: Metro.current.value,
      Room: Room.current.value,
      Repair: Repair.current.value,
      Building: Building.current.value,
      İtem: İtem.current.value,
      Bed: Bed.current.checked,
      wardrobe: wardrobe.current.checked,
      TableChair: TableChair.current.checked,
      CentralHeating: HeatingSystem.current.checked,
      GasHeating: GasHeating.current.checked,
      Combi: Combi.current.checked,
      Tv: Tv.current.checked,
      WashingClothes: WashingClothes.current.checked,
      AirConditioning: AirConditioning.current.checked,
      Sofa: Sofa.current.checked,
      Wifi: Wifi.current.checked,
      Area: Area.current.value,
      Price: Price.current.value,
      Boy: Boy.current.checked,
      Girl: Girl.current.checked,
      Family: Family.current.checked,
      WorkingBoy: WorkingBoy.current.checked,
      Addition: Addition.current.value,
    };
    const Check = [
      CheckEmpty(formData.FullName, setWarning, "FullNameWarn"),
      CheckEmpty(formData.Number, setWarning, "NumberWarn"),
      CheckEmpty(formData.CoordinateX ? null : "", setWarning, "CoordinateWarn"),
      CheckEmpty(formData.Address, setWarning, "AddressWarn"),
      CheckEmpty(formData.Metro, setWarning, "MetroWarn"),
      CheckEmpty(formData.Price, setWarning, "PriceWarn"),
      CheckEmpty(formData.İtem, setWarning, "ItemWarn"),
      CheckEmpty(formData.Room, setWarning, "RoomWarn"),
      CheckEmpty(formData.Repair, setWarning, "RepairWarn"),
      CheckEmpty(formData.Floor, setWarning, "FloorWarn"),
      CheckEmpty(formData.Building, setWarning, "BuildingWarn"),
      CheckEmpty(formData.Region, setWarning, "RegionWarn"),
      CheckEmpty(formData.Area, setWarning, "AreaWarn"),
      CheckLength(formData.Number.length, setWarning, 30, "NumberLengthWarn"),
      CheckLength(formData.Building.length, setWarning, 30, "BuildingLengthWarn"),
      CheckLength(formData.Metro.length, setWarning, 50, "MetroLengthWarn"),
      CheckLength(formData.Floor.length, setWarning, 50, "FloorLengthWarn"),
      CheckLength(formData.Address.length, setWarning, 50, "AddressLengthWarn"),
      CheckLength(formData.İtem.length, setWarning, 50, "ItemLengthWarn"),
      CheckLength(
        formData.Addition.length,
        setWarning,
        500,
        "AdditionLengthWarn"
      ),
      CheckLength(5, setWarning,images.length , "ImagesLengthWarn"),
      CheckLength(formData.Price, setWarning, 40000000, "PriceLengthWarn"),
      CheckLength(formData.Area, setWarning, 30000, "AreaLengthWarn"),
      CheckNumber(formData.Price, setWarning, "isNaNPriceWarn"),
      CheckNumber(formData.Area, setWarning, "isNaNAreaWarn"),
      CheckNumber(formData.Number, setWarning, "isNaNNumberWarn"),
      CheckNumber(formData.Room, setWarning, "isNaNRoomWarn"),
    ];
    if (Check.every((x) => x === true)){
      if(!IsLoading){
          setIsLoading(true);
        FetchPostAll(formData,"RentHome",imgFunc);
        
        setTimeout(() => {
          setIsLoading(false)
          Swal.fire({
            title: "Uğurlu",
            text: "Elanınız yükləndi.",
            icon: "success",
          });
          nav("/");
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
    FetchPostImg(formData,"RentHomeImg");
  };

  const updateload = () => {
    Data.fullname = FullName.current.value;
    Data.number = Number.current.value;
    Data.region = Region.current.value;
    Data.coordinateX=CoordinateX;
    Data.coordinateY=CoordinateY;
    Data.address = Address.current.value;
    Data.floor = Floor.current.value;
    Data.metro = Metro.current.value;
    Data.room = Room.current.value;
    Data.repair = Repair.current.value;
    Data.building = Building.current.value;
    Data.İtem = İtem.current.value;
    Data.bed = Bed.current.checked;
    Data.wardrobe = wardrobe.current.checked;
    Data.tableChair = TableChair.current.checked;
    Data.centralHeating = HeatingSystem.current.checked;
    Data.gasHeating = GasHeating.current.checked;
    Data.combi = Combi.current.checked;
    Data.tv = Tv.current.checked;
    Data.washingClosthes = WashingClothes.current.checked;
    Data.airConditioning = AirConditioning.current.checked;
    Data.sofa = Sofa.current.checked;
    Data.wifi = Wifi.current.checked;
    Data.area = Area.current.value;
    Data.price = Price.current.value;
    Data.boy = Boy.current.checked;
    Data.girl = Girl.current.checked;
    Data.family = Family.current.checked;
    Data.workingBoy = WorkingBoy.current.checked;
    Data.addition = Addition.current.value;
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
      !isNaN(parseFloat(Data.price)) &&
      !isNaN(parseFloat(Data.area)) &&
      !isNaN(parseFloat(Data.room))
    ) {
      const PutData=async()=>{
       await FetchPut(Data,"RentHome");
      }
      PutData();
      setTimeout(() => {
        Swal.fire({
          title: "Uğurlu",
          text: "Elanınız yükləndi.",
          icon: "success",
        });
      }, 500);
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
                Yalnız ev sahibləri elan yerləşdirə bilər.
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
                  Evinizi kiraye vermək üçün aşağıdakı sualları cavablandırın:
                </strong>
              </p>
            </div>
          </div>
          <div className="col-12">
            <div>
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Ev sahibinin adı və Soyadı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={FullName} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"FullNameWarn"} Text={"Ev sahibinin adı və soyadı daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"FullNameLengthWarn"} Text={"Daha qısa ad və soyad daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Ev sahibinin əlaqə nömrəsi:(Nömrəniz gizlin saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" placeholder="0xx-xxx-xx-xx" ref={Number} inputmode="numeric"/>
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"NumberWarn"} Text={"Ev sahibinin əlaqə nömrəsi daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNNumberWarn"} Text={"Ev sahibinin əlaqə nömrəsi rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"NumberLengthWarn"} Text={"Daha qısa əlaqə nömrəsi daxil edilməlidir."}/>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  * Evinizə aid 5-10 şəkil əlavə edin. (Salon, yataq otağı,
                  mətbəxt, hamam, tualet, balkon və.s)
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
                <div className="answer-images-rent shadowHomeColor">
                  <div className="overflow-hidden">
                  <TurnImgIn keepingImgSource={keepingImgSource} Counter={true}/>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <WarningComp warning={warning} StringName={"ImagesLengthWarn"} Text={"Ən azı 5 şəkil daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Evin yerləşdiyi rayon:</label>
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
            <div>
            <WarningComp warning={warning} StringName={"RegionWarn"} Text={"Evin yerləşdiyi rayon daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"RegionLengthWarn"} Text={"Daha qısa rayon adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Evin yerləşdiyi küçənin adı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Address} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AddressWarn"} Text={"Evin yerləşdiyi ünvan daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"AddressLengthWarn"} Text={"Daha qısa ünvan adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Mərtəbə:</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" placeholder=" 1/10" ref={Floor} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"FloorWarn"} Text={"Mərtəbə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"FloorLengthWarn"} Text={"Daha qısa mərtəbə adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
            <p><span className="attention">* </span>Evin konumunu qeyd edin.</p>
              <Coordinate x={setCoordinateX} y={setCoordinateY} CanClick={true} />
            </div>
            <div>
            <WarningComp warning={warning} StringName={"CoordinateWarn"} Text={"Evin yerləşdiyi konum daxil edilməlidir."}/>
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
            <div>
            <WarningComp warning={warning} StringName={"MetroWarn"} Text={"Evə yaxın metro adı daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"MetroLengthWarn"} Text={"Daha qısa metro adı daxil edilməlidir."}/>
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
            <div>
            <WarningComp warning={warning} StringName={"RoomWarn"} Text={"Otaq sayı daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNRoomWarn"} Text={"Otaq sayı rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"RoomLengthWarn"} Text={"Daha az otaq sayı daxil edilməlidir."}/>
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
            <div>
            <WarningComp warning={warning} StringName={"RepairWarn"} Text={"Evin təmiri daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"RepairLengthWarn"} Text={"Daha qısa ad daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Bina:</label>
              </div>
              <div className="col-12 div-in-select">
                <select name="" id="" ref={Building}>
                  <option value=""></option>
                  <option value="Həyət evi">Həyət evi</option>
                  <option value="Yeni tikili bina.">Yeni tikili bina.</option>
                  <option value="Köhnə tikili bina.">Köhnə tikili bina.</option>
                </select>
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"BuildingWarn"} Text={"Evin binası daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"BuildingLengthWarn"} Text={"Daha qısa bina adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Əşya:</label>
              </div>
              <div className="col-12 div-in-select">
                <select name="" id="" ref={İtem}>
                  <option value=""></option>
                  <option value="Ev əşyasız verilir.">
                    Ev əşyasız verilir.
                  </option>
                  <option value="Bəzi əşya ilə birlikdə verilir.">
                    Bəzi əşya ilə birlikdə verilir.
                  </option>
                  <option value="Ev əşyalı verilir.">Ev əşyalı verilir.</option>
                </select>
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"ItemWarn"} Text={"Seçim edin."}/>
            <WarningComp warning={warning} StringName={"ItemLengthWarn"} Text={"Daha qısa əşya adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Evdə hansı əşyalar var?</label>
              </div>
              <div className="col-12 main-div-for-chechbox ms-2">
                <div>
                  {" "}
                  <input type="checkbox" name="" id="" ref={Bed} />
                  <label className="ms-1">Yataq</label>
                </div>
                <div>
                  {" "}
                  <input type="checkbox" name="" id="" ref={wardrobe} />
                  <label className="ms-1">Paltar Şkafı</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={TableChair} />
                  <label className="ms-1">Stol və stul</label>
                </div>

                <div>
                  <input type="checkbox" name="" id="" ref={HeatingSystem} />
                  <label className="ms-1">Mərkəzi istilik sistemi</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={GasHeating} />
                  <label className="ms-1">Qaz isidicisi (peçi)</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Combi} />
                  <label className="ms-1">Kombi</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Tv} />
                  <label className="ms-1">TV</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={WashingClothes} />
                  <label className="ms-1">Paltaryuyan</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={AirConditioning} />
                  <label className="ms-1">Kondisaner</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Sofa} />
                  <label className="ms-1">Divan və kreslo</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Wifi} />
                  <label className="ms-1">Quraşdırılmış Vifi</label>
                </div>
              </div>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Evin sahəsi: (m²)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number" ref={Area} inputmode="numeric"/>
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AreaWarn"} Text={"Evin sahəsi daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNAreaWarn"} Text={"Evin sahəsi rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"AreaLengthWarn"} Text={"Daha az sahə daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName"><span className="attention">* </span>Evin Aylıq qiyməti:(Azn)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" ref={Price} inputmode="numeric" />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"PriceWarn"} Text={"Evin qiyməti daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNPriceWarn"} Text={"Evin qiyməti rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"PriceLengthWarn"} Text={"Daha az qiymət daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                <span className="attention">* </span>Evinizi kim kirayə götürə bilər?
                </label>
              </div>
              <div className="col-12 main-div-for-chechbox ms-2">
                <div>
                  <input type="checkbox" name="" id="" ref={Boy} />
                  <label className="ms-1">Oğlan tələbələr</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Girl} />
                  <label className="ms-1">Xanım</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Family} />
                  <label className="ms-1">Ailə</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={WorkingBoy} />
                  <label className="ms-1">İşləyən bəylər</label>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  Ev Haqqında əlavə məlumat yaza bilərsiniz:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Addition} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AdditionLengthWarn"} Text={"Qısa əlavə məlumat daxil edilməlidir."}/>
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

export default Rent;
