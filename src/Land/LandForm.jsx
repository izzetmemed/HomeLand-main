import React from "react";
import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
import FetchPostAll from "../MyComponents/FetchPostAll";
import FetchPostImg from "../MyComponents/FetchPostImg";
import TurnImgIn from "../MyComponents/TurnImgIn";
import Coordinate from "../mainpage/answer/coordinate";
import Scroll from "../MyComponents/Scroll";
import { useNavigate } from "react-router-dom";
import NumberTurn from "../MyComponents/NumberTurn";
import FetchPut from "../MyComponentsAdmin/FetchPut";
import UpLoad from "../MyComponents/UpLoad";
import CheckEmpty from "../MyComponents/CheckEmpty";
import CheckLength from "../MyComponents/CheckLength";
import CheckNumber from "../MyComponents/CheckNumber";
import WarningComp from "../MyComponents/WarningComp";
const LandForm = ({ Data, IsUpdating, SendFalse }) => {
  const nav = useNavigate();
  const [IsLoading, setIsLoading] = useState(false);
  Scroll();
  const fileInputRef = useRef(null);
  const [images, setImages] = useState([]);
  const [imagesFile, setImagesFile] = useState([]);
  const [warning, setWarning] = useState([]);
  const FullName = useRef(null);
  const Number = useRef(null);
  const Region = useRef(null);
  const Email = useRef(null);
  const Address = useRef(null);
  const Area = useRef(null);
  const Price = useRef(null);
  const Addition = useRef(null);
  const Paper = useRef(null);

  const [CoordinateX, setCoordinateX] = useState(null);
  const [CoordinateY, setCoordinateY] = useState(null);

  useEffect(() => {
    if (IsUpdating) {
      FullName.current.value = Data.fullname;
      Number.current.value = Data.number;
      setCoordinateX(Data.coordinateX);
      setCoordinateY(Data.coordinateY);
      Region.current.value = Data.region;
      Email.current.value = Data.email;
      Address.current.value = Data.address;
      Area.current.value = Data.area;
      Price.current.value = Data.price;
      Addition.current.value = Data.addition;
      Paper.current.value = Data.document;
    }
  }, [IsUpdating, Data]);

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  var DataImg = new FormData();
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
  }, [images]);

  const UploadInformation = () => {
    for (let i = 0; i < imagesFile.length; i++) {
      DataImg.append(`image`, imagesFile[i]);
    }
    setWarning([]);
    const formData = {
      FullName: FullName.current.value,
      Number: NumberTurn(Number.current.value),
      CoordinateX: CoordinateX,
      CoordinateY: CoordinateY,
      Region: Region.current.value,
      Email: Email.current.value,
      Address: Address.current.value,
      Area: Area.current.value,
      Price: Price.current.value,
      Addition: Addition.current.value,
      Document: Paper.current.value,
    };
    const Check = [
      CheckEmpty(formData.FullName, setWarning, "FullNameWarn"),
      CheckEmpty(formData.Number, setWarning, "NumberWarn"),
      CheckEmpty(formData.CoordinateX ? null : "", setWarning, "CoordinateWarn"),
      CheckEmpty(formData.Address, setWarning, "AddressWarn"),
      CheckEmpty(formData.Email, setWarning, "EmailWarn"),
      CheckEmpty(formData.Price, setWarning, "PriceWarn"),
      CheckEmpty(formData.Region, setWarning, "RegionWarn"),
      CheckEmpty(formData.Area, setWarning, "AreaWarn"),
      CheckEmpty(formData.Document, setWarning, "DocumentWarn"),
      CheckLength(
        formData.FullName.length,
        setWarning,
        50,
        "FullNameLengthWarn"
      ),
      CheckLength(formData.Region.length, setWarning, 50, "RegionLengthWarn"),
      CheckLength(
        formData.Document.length,
        setWarning,
        50,
        "DocumentLengthWarn"
      ),
      CheckLength(formData.Number.length, setWarning, 30, "NumberLengthWarn"),
      CheckLength(formData.Address.length, setWarning, 50, "AddressLengthWarn"),
      CheckLength(
        formData.Addition.length,
        setWarning,
        500,
        "AdditionLengthWarn"
      ),
      CheckLength(2, setWarning,images.length , "ImagesLengthWarn"),
      CheckLength(formData.Price, setWarning, 40000000, "PriceLengthWarn"),
      CheckLength(formData.Area, setWarning, 30000, "AreaLengthWarn"),
      CheckNumber(formData.Price, setWarning, "isNaNPriceWarn"),
      CheckNumber(formData.Area, setWarning, "isNaNAreaWarn"),
      CheckNumber(formData.Number, setWarning, "isNaNNumberWarn"),
    ];
    if (Check.every((x) => x === true)) {
      if (!IsLoading) {
        setIsLoading(true);
        FetchPostAll(formData, "Land", imgFunc);
        setTimeout(() => {
          setIsLoading(false);
          Swal.fire({
            title: "Uğurlu",
            text: "Elanınız yükləndi.",
            icon: "success",
          });
          nav("/Land");
        }, 10000);
      } else {
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
    FetchPostImg(DataImg, "LandImg");
  };

  const updateload = () => {
    Data.fullname = FullName.current.value;
    Data.number = Number.current.value;
    Data.region = Region.current.value;
    Data.email = Email.current.value;
    Data.coordinateX = CoordinateX;
    Data.coordinateY = CoordinateY;
    Data.address = Address.current.value;
    Data.area = Area.current.value;
    Data.price = Price.current.value;
    Data.addition = Addition.current.value;
    Data.document = Paper.current.value;
    if (
      Data.fullname !== "" &&
      Data.number !== "" &&
      Data.address !== "" &&
      Data.metro !== "" &&
      Data.price !== "" &&
      Data.area !== "" &&
      Data.document !== "" &&
      !isNaN(parseFloat(Data.price)) &&
      !isNaN(parseFloat(Data.area))
    ) {
      const PutData = async () => {
        await FetchPut(Data, "Land");
      };
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
                Yalnız torpağ sahibləri elan yerləşdirə bilər.
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
                  <span className="attention">* </span>Torpağ sahibinin adı və
                  Soyadı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={FullName} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"FullNameWarn"} Text={"Torpaq sahibinin adı və soyadı daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"FullNameLengthWarn"} Text={"Daha qısa ad və soyad daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span> Emailinizi daxil edin.
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input
                  type="email"
                  placeholder="Homeland.az@gmail.com"
                  ref={Email}
                />
              </div>
            </div>
            <WarningComp warning={warning} StringName={"EmailWarn"} Text={"Email daxil edin."}/>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Torpağ sahibinin əlaqə
                  nömrəsi:(Nömrəniz gizli saxlanılacaq)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input
                  type="text"
                  placeholder="0xx-xxx-xx-xx"
                  ref={Number}
                  inputmode="numeric"
                />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"NumberWarn"} Text={"Torpaq sahibinin əlaqə nömrəsi daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNNumberWarn"} Text={"Torpaq sahibinin əlaqə nömrəsi rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"NumberLengthWarn"} Text={"Daha qısa əlaqə nömrəsi daxil edilməlidir."}/>
            </div>
            <div>
              <div className="d-flex flex-column align-items-center mt-3">
                <p className="text-danger fs-5">
                  * Torpağa aid 2-10 şəkil əlavə edin.
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
                  <div className="overflow-hidden  shadowHomeColor">
                    <TurnImgIn
                      keepingImgSource={keepingImgSource}
                      Counter={true}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <WarningComp warning={warning} StringName={"ImagesLengthWarn"} Text={"Ən azı 2 şəkil daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Torpağın yerləşdiyi
                  rayon:
                </label>
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
            <WarningComp warning={warning} StringName={"RegionWarn"} Text={"Torpağın yerləşdiyi rayon daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"RegionLengthWarn"} Text={"Daha qısa rayon adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Torpağın yerləşdiyi
                  küçənin adı:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Address} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AddressWarn"} Text={"Torpağın yerləşdiyi ünvan daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"AddressLengthWarn"} Text={"Daha qısa ünvan adı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Torpağın qiyməti:(Azn)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number" ref={Price} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"PriceWarn"} Text={"Torpağın qiyməti daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNPriceWarn"} Text={"Torpağın qiyməti rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"PriceLengthWarn"} Text={"Daha az qiymət daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <p>
                <span className="attention">* </span>Torpağın konumunu qeyd
                edin.
              </p>
              <Coordinate x={setCoordinateX} y={setCoordinateY} CanClick={true} />
            </div>
            <div>
            <WarningComp warning={warning} StringName={"CoordinateWarn"} Text={"Torpağın yerləşdiyi konum daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Sənəd:
                </label>
              </div>

              <div className="col-12 div-in-select">
                <select name="" id="" ref={Paper}>
                  <option value=""></option>
                  <option value="Kupça var.">Kupça var.</option>
                  <option value="Kupça yoxdur.">Kupça yoxdur.</option>
                </select>
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"DocumentWarn"} Text={"Torpağın sənədi daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"DocumentLengthWarn"} Text={"Daha qısa yazı daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  <span className="attention">* </span>Torpağın sahəsi: (sot)
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="Number" ref={Area} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AreaWarn"} Text={"Torpağın sahəsi daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"isNaNAreaWarn"} Text={"Torpağın sahəsi rəqəmlərlə daxil edilməlidir."}/>
            <WarningComp warning={warning} StringName={"AreaLengthWarn"} Text={"Daha az sahə daxil edilməlidir."}/>
            </div>
            <div className="mt-3">
              <div className="div-in-label">
                <label htmlFor="customerName">
                  Torpaq haqqında əlavə məlumat yaza bilərsiniz:
                </label>
              </div>
              <div className="col-12 div-in-input">
                <input type="text" ref={Addition} />
              </div>
            </div>
            <div>
            <WarningComp warning={warning} StringName={"AdditionLengthWarn"} Text={"Qısa əlavə məlumat daxil edilməlidir."}/>
            </div>
            {IsLoading && <UpLoad />}
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

export default LandForm;
