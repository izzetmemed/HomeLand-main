import { useState, useEffect } from "react";
import React from "react";
import { useParams } from "react-router-dom";
import FetchGetId from "../../../MyComponents/FetchGetId";
import UseFetchData from "../../../MyComponents/FetchImg";
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchPostAll from "../../../MyComponents/FetchPostAll";
import FetchPutImg from "../../../MyComponents/FetchPutImg";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import Swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import GetBack from "../../../MyComponents/GetBack";
const İnsideCardPayment = () => {
  const { id } = useParams();
 const navigate = useNavigate();
  const [keepingImgSource,setKeepingImgSource] = useState([]);

  var [getById, setGetById] = useState(null);
  
  const getByIdData = FetchGetId(id, 'RentHome/Admin');
  useEffect(() => {
    setGetById(getByIdData);
   }, [getByIdData]);
   

  const imageUrls = UseFetchData(getById?.img, 'RentHomeImg');

  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [getById, imageUrls]);
  
  const price = "Aze";
  const teratory = "m²";
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };

  const Reload=async()=>{
    const ReloadData = {
      Id:getById.id,
      FullName: getById.fullname,
      Number:getById.number,
      CoordinateX:getById.coordinateX,
      CoordinateY:getById.coordinateY,
      Region: getById.region,
      Address: getById.address,
      Floor: getById.floor,
      Metro: getById.metro,
      Room: getById.room,
      Repair: getById.repair,
      Building: getById.building,
      İtem: getById.İtem,
      Bed: getById.bed,
      wardrobe: getById.wardrobe,
      TableChair: getById.tableChair,
      HeatingSystem: getById.heatingSystem,
      GasHeating: getById.gasHeating,
      Combi: getById.combi,
      Tv: getById.tv,
      WashingClothes: getById.washingClothes,
      AirConditioning: getById.airConditioning,
      Sofa: getById.sofa,
      Wifi: getById.wifi,
      Area: getById.area,
      Price: getById.price,
      Boy: getById.boy,
      Girl: getById.girl,
      Family: getById.family,
      WorkingBoy: getById.workingBoy,
      Addition: getById.addition,
      IsCalledWithHomeOwnFirstStep:true
    };
    if (
      ReloadData.FullName !== "" &&
      ReloadData.Number !== "" &&
      ReloadData.Address !== "" &&
      ReloadData.Metro !== "" &&
      ReloadData.Price !== "" &&
      ReloadData.Floor !== "" &&
      ReloadData.Building !== "" &&
      ReloadData.Area !== "" &&
      ReloadData.İtem !== "" &&
      ReloadData.Repair !== "" &&
      ReloadData.Address !== "" 
    ) {
      const fake= ()=>{
      }
      async function executeSequentially() {
    try {
        await FetchPostAll(ReloadData, "RentHome/Admin", fake);
        
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

executeSequentially();
    
    navigate('/HomeLogin/MainAdmin/RentHome/Payment');
    }else{
      Swal.fire({
        title: "Uğursuz",
        text: "Bütün (*) xanaları doldurun.",
        icon: "error",
      });
    }
    
  }
  return (
    <div>
      <div className=" col-12 p-2 mt-4 ps-2">
        <div className="insideCard-home">
          <div className="overflow-hidden">
          <TurnImgIn keepingImgSource={keepingImgSource}/>
          </div>
      
          {getById && (
            <div className="pb-2 mt-3">
              <p>
                Qiymet:<span className="price-home">{getById.price}</span>
                <span>{price}</span>
              </p>
              <p>
                Ev sahibi:<span className="price-home">{getById.fullname}</span>
              </p>
              <p>
                Nömrəsi:<span className="price-home">{getById.number}</span>
              </p>
              <p>
                Kod:<span className="price-home">{getById.id}</span>
              </p>
              <p>
                Ünvan:<span className="address-home">{getById.address}</span>
              </p>
              <p>
                Metro:<span className="address-home">{getById.metro}</span>
              </p>
              <p>
                Otaq sayi:<span className="room-home">{getById.room}</span>
              </p>
              <p>
                Sahe:
                <span className="measure-home">
                  {getById.area}
                  <span>{teratory}</span>
                </span>
              </p>
              {getById.addition && (
                <p>
                  Ətraflı:
                  <span className="measure-home">{getById.addition}</span>
                </p>
              )}
              <p>
                Əşya:<span className="time-home">{getById.İtem}</span>
              </p>
              <p>
                Təmir:<span className="time-home">{getById.repair}</span>
              </p>
              <p>
                Mərtəbə:<span className="time-home">{getById.floor}</span>
              </p>
              <p>
                Bina:<span className="time-home">{getById.building}</span>
              </p>

              <p>
                Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
                <span className="time-home">
                  {(getById.price * 20) / 100}
                  <span>{price}</span>
                </span>
              </p>
              <p>
                Ev kimə verilir:
                <span className="time-home">
                  {[
                    getById.family && "Ailə",
                    getById.boy && "Oğlan tələbələrə",
                    getById.girl && "Xanım tələbələrə",
                    getById.workingBoy && "İşləyən bəylərə",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>
              <p>
                Evdə olan Əşyalar:
                <span className="time-home">
                  {[
                    getById.bed && "Yataq",
                    getById.wardrobe && "Dolab",
                    getById.tableChair && "Masa və Stol",
                    getById.centralHeating && "Mərkəzi İstilik sistemi",
                    getById.gasHeating && "Qaz İstilik sistemi",
                    getById.combi && "Kombi",
                    getById.tv && "Televizor",
                    getById.washingClothes && "Paltar Yuyan",
                    getById.airConditioning && "Kondisioner",
                    getById.sofa && "Divan",
                    getById.wifi && "Wi-Fi",
                  ]
                    .filter(Boolean)
                    .join(", ")
                    .replace(/, (?=[^,]*$)/, " və ")}
                </span>
              </p>
              <p>
                Tarix:
                <span className="time-home">{convertDate(getById.date)}</span>
              </p>
              <div className="col-12 d-flex justify-content-center h-auto mt-3">
            <div className="col-12 col-sm-6 d-flex ">
              <table className="table table-dark table-striped">
                <thead>
                  <tr>
                    <th>Müştərinin adı soyadı</th>
                    <th>Nömrə</th>
                    <th>Tarix</th>
                  </tr>
                </thead>
                <tbody>
                  {getById &&
                    getById.customer.map((x, index) => (
                      <tr key={index}>
                        <td>{x.fullName}</td>
                        <td>{x.number}</td>
                        <td>{convertDate(x.directCustomerDate)}</td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
           
          </div>
          <GetBack Direct={"/HomeLogin/MainAdmin/RentHome/payment"}/>

          <button className="p-2 m-3 bg-success text-white" onClick={Reload}>Yenidən yüklə</button>
            </div>
          )}
          
        </div>
        
      </div>
    </div>
  );
};

export default İnsideCardPayment;
