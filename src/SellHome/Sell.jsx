import React from "react";
import { useState, useRef,useEffect } from "react";
import MapComponent from "../mainpage/answer/coordinate";
import Swal from 'sweetalert2';

const Sell = ({ Data, IsUpdating, SendFalse}) => {

  
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);


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
  const Area = useRef(null);
  const Price = useRef(null);
  const Addition = useRef(null);
  const Paper = useRef(null);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (Data.img.length > 0) {
          const response = await fetch(
            `http://localhost:5224/api/SellImg/DownloadImages?imgNames=${Data.img}`
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
      Area.current.value = Data.area;
      Price.current.value = Data.price;
      Addition.current.value = Data.addition;
      Paper.current.value = Data.document;
    }
  }, [IsUpdating, Data]);

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

  const [ImgSourceIndex, setImgSourceIndex] = useState(0);
  const btnLeftIcon = () => {
    if (ImgSourceIndex < keepingImgSource.length - 1) {
      setImgSourceIndex(ImgSourceIndex + 1);
    } else {
      setImgSourceIndex(0);
    }
  };

  const btnRightIcon = () => {
    if (ImgSourceIndex > 0) {
      setImgSourceIndex(ImgSourceIndex - 1);
    } else {
      setImgSourceIndex(keepingImgSource.length - 1);
    }
  };

  
 
  const UploadInformation = () => {
    const formData = {
      FullName: FullName.current.value,
      Number: Number.current.value,
      Region:Region.current.value,
      Address: Address.current.value,
      Floor:Floor.current.value,
      Metro: Metro.current.value,
      Room:Room.current.value,
      Repair: Repair.current.value,
      Building: Building.current.value,
      İtem: İtem.current.value,
      Area: Area.current.value,
      Price: Price.current.value,
      Addition: Addition.current.value,
      Document: Paper.current.value
    };

    if (
    
      formData.FullName !== "" &&
      formData.Number !== "" &&
      formData.Address !== "" &&
      formData.Metro !== "" &&
      formData.Price !== "" &&
      formData.Floor !== "" &&
      formData.Area !== "" &&
      formData.İtem !== "" &&
      formData.Repair !== "" &&
      formData.Paper !== "" &&
      images.length>4 &&
      !isNaN(parseFloat(formData.Price)) &&
      !isNaN(parseFloat(formData.Area)) &&
      !isNaN(parseFloat(formData.Room))
    ) {
      fetch("http://localhost:5224/api/Sell", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(formData),
      })
        .then((response) => {
          console.log(response.ok);
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
            icon: "success"
          });
        }, 500);
      FullName.current.value="";
      Number.current.value="";
      Address.current.value="";
      Floor.current.value="";
      Area.current.value="";
      Addition.current.value="";
      Paper.current.value="";
      Price.current.value="";
      Metro.current.value="";
      Region.current.value="";
      Building.current.value="";
      Room.current.value="";
      Repair.current.value="";
      İtem.current.value="";
      setImages([]);
      setImagesFile([]);
    } else {
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error"
      });
    }
    

  }
  const imgFunc=()=>{
    let formData = new FormData();
    for (let i = 0; i < imagesFile.length; i++) {
     
        formData.append(`image`, imagesFile[i]);
    }
        fetch('http://localhost:5224/api/SellImg', {
          method: 'POST',
          body:formData
        })
          .then(response => response)
          .then(data => {
            console.log('Image uploaded successfully:', data);
          })
          .catch(error => {
            console.error('Error uploading image:', error);
          });
   
   
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
      Data.area = Area.current.value;
      Data.price = Price.current.value;
      Data.addition = Addition.current.value;
      Data.document= Paper.current.value
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
        Data.document !== "" &&
        !isNaN(parseFloat(Data.price)) &&
        !isNaN(parseFloat(Data.area)) &&
        !isNaN(parseFloat(Data.room))
      ) {
        fetch("http://localhost:5224/api/Sell", {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(Data),
        })
          .then((response) => {
            console.log(response.ok);
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
        Paper.current.value = "";
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
                  Evinizi satmaq üçün aşağıdakı sualları cavablandırın:
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
                <input type="text" ref={FullName}/>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  *Ev sahibinin əlaqə nömrəsi:(Nömrəniz gizli saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" placeholder="0xx-xxx-xx-xx" ref={Number}/>
              </div>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  *Evinizə aid 5-10 şəkil əlavə edin. (Salon, yataq otağı, mətbəxt,
                  hamam, tualet, balkon və.s)
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
                  <div className="overflow-hidden backgrounImgDefault">
                    <div>
                      <span onClick={btnLeftIcon}>
                        <i className="fa-solid fa-angle-left"></i>
                      </span>
                      <span onClick={btnRightIcon}>
                        <i className="fa-solid fa-angle-right"></i>
                      </span>
                    </div>
                    <div className="d-flex justify-content-center align-items-center">
                      <img
                        src={keepingImgSource[ImgSourceIndex]}
                       
                      />
                    </div>
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
                  <option value="Digər Rayon">Digər Rayon</option>
                  <option value="Nəsimi Rayon">Nəsimi Rayon</option>
                  <option value="Nizami Rayon">Nizami Rayon</option>
                  <option value="Xətai Rayon">Xətai Rayon</option>
                  <option value="Nərmanov Rayon">Nərmanov Rayon</option>
                  <option value="Yasamal Rayon">Yasamal Rayon</option>
                  <option value="Pirallahı Rayon">Pirallahı Rayon</option>
                  <option value="Suraxanı Rayon">Suraxanı Rayon</option>
                  <option value="Sabunçu Rayon">Sabunçu Rayon</option>
                  <option value="Səbail Rayon">Səbail Rayon</option>
                  <option value="Xəzər Rayon">Xəzər Rayon</option>
                  <option value="Qaradağ Rayon">Qaradağ Rayon</option>
                  <option value="Binəqədi Rayon">Binəqədi Rayon</option>
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
                <input type="text" ref={Address}/>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Evin qiyməti:(Aze)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number"  ref={Price}/>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Mərtəbə:</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Floor} placeholder="1/10"/>
              </div>
            </div>
            <div className="mt-3">
              <MapComponent />
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Metro:</label>
              </div>
              <div className="col-12 div-in-select">
              <select name="" id="" ref={Metro}>
                  <option value=""></option>
                  <option value="Metroya yaxın deyil">Metroya yaxın deyil</option>
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
                  <option value="İşərişəhər">İçərişəhər Metrosu</option>
                  <option value="Nizami">Nizami Metrosu</option>
                  <option value="Elmlər">Elmlər Metrosu</option>
                  <option value="İnşaatçlılar">İnşaatçılar Metrosu</option>
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
                  <option value="9 və daha çox otaqlı"> 9 və daha çox otaqlı</option>
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
                <label htmlFor="customerName">*Sənəd:</label>
              </div>

              <div className="col-12 div-in-select">
                <select name="" id="" ref={Paper}>
                  <option value=""></option>
                  <option value="Kupça var.">Kupça var.</option>
                  <option value="Kupça yoxdur.">Kupça yoxdur.</option>
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
                  <option value="Ev əşyasız verilir.">Ev əşyasız satılır.</option>
                  <option value="Bəzi əşya ilə birlikdə verilir.">Bəzi əşya ilə birlikdə satılır.</option>
                  <option value="Ev əşyalı verilir.">Ev əşyalı satılır.</option>
                </select>
              </div>
            </div>

            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Evin sahəsi: (m²)</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number" ref={Area}/>
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  Ev Haqqında əlavə məlumat yaza bilərsiniz:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Addition}/>
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

export default Sell;
