import React from "react";
import { useState, useRef } from "react";
import MapComponent from "../mainpage/answer/coordinate";
import Swal from "sweetalert2";
const ObyektForm = () => {
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files).slice(0, 10); // Limit to 10 images
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

  const keepingImgSource = images;

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

  const [sellOrRent, setSellOrRent] = useState(false);

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
      Number: Number.current.value,
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
      formData.Number !== "" &&
      formData.Address !== "" &&
      formData.Metro !== "" &&
      formData.Price !== "" &&
      formData.Area !== "" &&
      formData.İtem !== "" &&
      formData.Repair !== "" &&
      formData.Paper !== "" &&
      formData.SellorRent !== "" &&
      images.length > 4 &&
      !isNaN(parseFloat(formData.Price)) &&
      !isNaN(parseFloat(formData.Area)) &&
      !isNaN(parseFloat(formData.Room))
    ) {
      fetch("http://localhost:5224/api/Obyekt", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
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
    fetch("http://localhost:5224/api/ObyektImg", {
      method: "POST",
      body: formData,
      mode: 'cors',
    })
      .then((response) => response)
      .then((data) => {
        console.log("Image uploaded successfully:", data);
      })
      .catch((error) => {
        console.error("Error uploading image:", error);
      });
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
                  *Obyekt sahibinin adı və Soyadı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={FullName} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  *Obyekt sahibinin əlaqə nömrəsi:(Nömrəniz gizli saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" placeholder="0xx-xxx-xx-xx" ref={Number} />
              </div>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  *Obyektinizə aid 5-10 şəkil əlavə edin.
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
                <label htmlFor="customerName">*Obyektin yerləşdiyi rayon:</label>
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
                  *Obyektin yerləşdiyi küçənin adı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Address} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="sellOrRentSelect">
                  *Obyektinizi satırsınız yoxsa kiraye verirsiniz:
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

            {sellOrRent  && (
              <div className="mt-3">
                <div className="div-in-label">
                  <label htmlFor="documentSelect">*Sənəd:</label>
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
                <label htmlFor="customerName">*Obyectinin qiyməti:</label>
              </div>
              <div className="col-12 div-in-input">
                <input type="number" ref={Price} />
              </div>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">*Əşya:</label>
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
              <MapComponent />
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
                  <option value="9 və daha çox otaqlı">
                    {" "}
                    9 və daha çox otaqlı
                  </option>
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
                <label htmlFor="customerName">*Obyektin sahəsi: (m²)</label>
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
            <div className="d-flex justify-content-center col-12 mb-5">
              <div className=" mt-5">
                <button
                  className="btn btn-mycolor pe-5 ps-5"
                  onClick={UploadInformation}
                >
                  Elan yerləşdirmək
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObyektForm;
