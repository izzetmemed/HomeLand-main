import { useState, useEffect } from "react";
import React from 'react';
import FetchGetId from "../../../MyComponents/FetchGetId";
import GetImg from "../../../MyComponents/GetImg";
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Update from '../../../mainpage/answer/rent';
import TurnImgIn from "../../../MyComponents/TurnImgIn";
import FetchDelete from "../../../MyComponentsAdmin/FetchDelete";
import GetBack from "../../../MyComponents/GetBack";
import AddPrice from "../../../MyComponents/AddPrice";
import AddTerritory from "../../../MyComponents/AddTerritory";
import DateCutting from "../../../MyComponents/DateCutting";
import DownloadImage from "../../../MyComponentsAdmin/DownloadImage";
import Swal from "sweetalert2";
const İnsideCardOwn = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/HomeLogin/MainAdmin/RentHome/Img/Update/${id}`);
    };
    const [keepingImgSource,setKeepingImgSource] = useState([]);
    var [getById, setGetById] = useState(null);
  
    const getByIdData = FetchGetId(id, 'RentHome/Admin');
    useEffect(() => {
      setGetById(getByIdData);
     }, [getByIdData]);
     
     useEffect(() => {
      if (getById) {
        const imageUrls = GetImg(getById.img ?? []);
        setKeepingImgSource(imageUrls);
      }
    }, [getById]);
    const deleteItem = async () => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          FetchDelete(getById.id, "RentHome");
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          navigate('/HomeLogin/MainAdmin/RentHome/own');
        }
      });


     
    };
    const [isTrueUpdate, setIsTrueUpdate]=useState(false);
    const UpdateItem=()=>{
       setIsTrueUpdate(true);
    }
    const UpdateItemFalse=()=>{
       setIsTrueUpdate(false);
    }
  
    return (
        <div >
          { !isTrueUpdate && (
             <div className=' col-12 p-2 mt-4 ps-2'>
             <div className='insideCard-home'>
                 <div className='overflow-hidden'>
                 <TurnImgIn keepingImgSource={keepingImgSource}/>
                 </div>
              
                 {getById && (
         <div className="pb-2 mt-3">
             <GetBack Direct={"/HomeLogin/MainAdmin/RentHome/Own"}/>
             <DownloadImage ImageUrl={keepingImgSource}/>
           <p>
             Qiymet:<span className="price-home">{AddPrice(getById.price)}</span>
           </p>
           <p>
             Ev sahibi:<span className="price-home">{getById.fullname}</span>
       
           </p>
           <p>
                Email:<span className="price-home">{getById.email}</span>
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
               {AddTerritory(getById.area)}
             </span>
           </p>
           {getById.addition
            && (
             <p>
             Ətraflı:<span className="measure-home">{getById.addition}</span>
           </p>
            )
            }
           <p>
             Əşya:<span className="time-home">{getById.item}</span>
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
             Rayon:<span className="time-home">{getById.region}</span>
           </p>
           
           <p>
             Evi aldığınız halda əmlakçıya verəcəyiniz ödəniş:
             <span className="time-home">
             {AddPrice(getById.price * 20 /100)}
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
             Tarix:<span className="time-home">{DateCutting(getById.date)}</span>
           </p>
           <div className='p-2 m-3 d-flex h-auto mt-5'>
                      <button className='btn btn-success me-2 h-100' onClick={UpdateItem} >Yeniləmək</button>
                      <button className='btn btn-primary me-2 h-100' onClick={handleClick} >Şəkil əlavə etmək</button>
            </div>
            <div className='p-2 m-3 d-flex h-auto mt-5'>
                      <button className='btn btn-danger me-2 h-100' onClick={deleteItem} >Silmək</button>
            </div>
         </div>
       )}
                
                
            </div>
         </div>
          )} 
            {
           isTrueUpdate && (
             <div className="mt-2 mb-2 p-4">
            <Update Data={getById} IsUpdating={true} SendFalse={UpdateItemFalse} />
             </div> 
              )
             }
        </div>
    )
}

export default İnsideCardOwn