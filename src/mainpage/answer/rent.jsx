import React from "react";
import { useState, useRef, useEffect } from "react";
import Coordinate from "./coordinate";
import FetchPostImg from "../../MyComponents/FetchPostImg";
import Swal from "sweetalert2";
import FetchPostAll from "../../MyComponents/FetchPostAll";
import TurnImgIn from "../../MyComponents/TurnImgIn";
import NumberTurn from "../../MyComponents/NumberTurn";
const Rent = ({ Data, IsUpdating, SendFalse}) => {
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
    const fetchData = async () => {
      try {
        if (Data.img.length > 0) {
          const response = await fetch(
            `http://localhost:5224/api/RentHomeImg/DownloadImages?imgNames=${Data.img}`
          );
          const imageData = await response.json();
          setkeepingImgSource(imageData.imageUrls);
        }
      } catch (error) {
        console.error("Error downloading images:", error);
      }
    };
    if (IsUpdating) {
      fetchData();
      console.log(Data);
      FullName.current.value = Data.fullname;
      Number.current.value = Data.number;
      Region.current.value = Data.region;
      Address.current.value = Data.address;
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
 const [CoordinateX,setCoordinateX]=useState(null);
 const [CoordinateY,setCoordinateY]=useState(null);
 const SendX=(x)=>{
  setCoordinateX(x)
 };
 const SendY=(y)=>{
  setCoordinateY(y)
 };
  const UploadInformation = () => {
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
      HeatingSystem: HeatingSystem.current.checked,
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
    console.log(formData.Number)
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
      formData.Floor !== "" &&
      formData.Floor.length<50 &&
      formData.Area !== "" &&
      formData.Area<30000 &&
      formData.İtem !== "" &&
      formData.İtem.length<50 &&
      formData.Repair !== "" &&
      formData.Address !== "" &&
      formData.Address.length<50 &&
      formData.Addition.length<500 &&
      images.length > 4 &&
      !isNaN(parseFloat(formData.Price)) &&
      !isNaN(parseFloat(formData.Area)) &&
      !isNaN(parseFloat(formData.Room))
    ) {
      FetchPostAll(formData,"RentHome",imgFunc);
      setTimeout(() => {
        Swal.fire({
          title: "Uğurlu",
          text: "Elanınız yükləndi.",
          icon: "success",
        });
      }, 500);

      FullName.current.value = "";
      Number.current.value = "";
      Address.current.value = "";
      Floor.current.value = "";
      Area.current.value = "";
      Addition.current.value = "";
      Price.current.value = "";
      Metro.current.value = "";
      Region.current.value = "";
      Building.current.value = "";
      Room.current.value = "";
      Repair.current.value = "";
      İtem.current.value = "";
      Bed.current.checked = false;
      wardrobe.current.checked = false;
      TableChair.current.checked = false;
      HeatingSystem.current.checked = false;
      GasHeating.current.checked = false;
      Combi.current.checked = false;
      Tv.current.checked = false;
      WashingClothes.current.checked = false;
      AirConditioning.current.checked = false;
      Sofa.current.checked = false;
      Wifi.current.checked = false;
      Boy.current.checked = false;
      Girl.current.checked = false;
      Family.current.checked = false;
      WorkingBoy.current.checked = false;
      setImages([]);
      setImagesFile([]);
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
    Data.address = Address.current.value;
    Data.floor = Floor.current.value;
    Data.metro = Metro.current.value;
    Data.room = Room.current.value;
    Data.repair = Repair.current.value;
    Data.building = Building.current.value;
    Data.item = İtem.current.value;
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
      fetch("http://localhost:5224/api/RentHome", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          imgFunc();
          return response;
        })
        .then((responseData) => {
          console.log("Data uploaded successfully:", responseData);
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
      setTimeout(() => {
        Swal.fire({
          title: "Uğurlu",
          text: "Elanınız yükləndi.",
          icon: "success",
        });
      }, 500);

      FullName.current.value = "";
      Number.current.value = "";
      Address.current.value = "";
      Floor.current.value = "";
      Area.current.value = "";
      Addition.current.value = "";
      Price.current.value = "";
      Metro.current.value = "";
      Region.current.value = "";
      Building.current.value = "";
      Room.current.value = "";
      Repair.current.value = "";
      İtem.current.value = "";
      Bed.current.checked = false;
      wardrobe.current.checked = false;
      TableChair.current.checked = false;
      HeatingSystem.current.checked = false;
      GasHeating.current.checked = false;
      Combi.current.checked = false;
      Tv.current.checked = false;
      WashingClothes.current.checked = false;
      AirConditioning.current.checked = false;
      Sofa.current.checked = false;
      Wifi.current.checked = false;
      Boy.current.checked = false;
      Girl.current.checked = false;
      Family.current.checked = false;
      WorkingBoy.current.checked = false;
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
                  *Ev sahibinin adı və Soyadı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={FullName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  *Ev sahibinin əlaqə nömrəsi:(Nömrəniz gizlin saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" placeholder="0xx-xxx-xx-xx" ref={Number} inputmode="numeric"/>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  *Evinizə aid 5-10 şəkil əlavə edin. (Salon, yataq otağı,
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
              <div className=" col-12 p-2 mt-4 ps-2">
                <div className="answer-images-rent">
                  <div className="overflow-hidden">
                  <TurnImgIn keepingImgSource={keepingImgSource} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Evin yerləşdiyi rayon:</label>
              </div>
              <div className="col-12 div-in-select">
                <select name="" id="" ref={Region}>
                  <option value=""></option>
                  <option value="Digər">Digər Rayon</option>
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
                </select>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  *Evin yerləşdiyi küçənin adı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Address} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Mərtəbə:</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" placeholder=" 1/10" ref={Floor} />
              </div>
            </div>
            <div className="mt-3">
              <Coordinate x={SendX} y={SendY} CanClick={true}/>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Metro:</label>
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
                  <option value="28">28 May Metrosu</option>
                  <option value="Xətai">Şah İsmayıl Xətai Metrosu</option>
                  <option value="Sahil">Sahil Metrosu</option>
                  <option value="İçərişəhər">İçərişəhər Metrosu</option>
                  <option value="Nizami">Nizami Metrosu</option>
                  <option value="Elmlər">Elmlər Metrosu</option>
                  <option value="İnşaatçılar">İnşaatçılar Metrosu</option>
                  <option value="Yanvar">20 Yanvar Metrosu</option>
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
                <label htmlFor="customerName">*Otaq sayı:</label>
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
                <label htmlFor="customerName">*Təmir:</label>
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
                <label htmlFor="customerName">*Bina:</label>
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
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Əşya:</label>
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
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Evdə hansı əşyalar var?</label>
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
                <label htmlFor="customerName">*Evin sahəsi: (m²)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number" ref={Area} inputmode="numeric"/>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Evin Aylıq qiyməti:(Aze)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" ref={Price} inputmode="numeric" />
              </div>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  *Evinizi kim kirayə götürə bilər?
                </label>
              </div>
              <div className="col-12 main-div-for-chechbox ms-2">
                <div>
                  <input type="checkbox" name="" id="" ref={Boy} />
                  <label className="ms-1">Oğlan tələbələr</label>
                </div>
                <div>
                  <input type="checkbox" name="" id="" ref={Girl} />
                  <label className="ms-1">Qadın tələbələr</label>
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
