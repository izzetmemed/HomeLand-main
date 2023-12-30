import { useState, useEffect } from "react";
import React from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import Update from '../../../SellHome/Sell';
const SellInside = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [keepingImgSource,setKeepingImgSource] = useState([]);
  
   
  
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
    var [getById, setGetById] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
  
          const response = await fetch(
            `http://localhost:5224/api/Sell/Admin/${id}`
          );
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const data = await response.json();
          setGetById(data);
          console.log(data);
          
        } catch (error) {
          console.error("Error in fetchData:", error);
        }
      };
      fetchData();
    }, [id]);
  
    useEffect(() => {
      const fetchData = async () => {
          try {
            if(getById.img.length>0){
              const response = await fetch(`http://localhost:5224/api/SellImg/DownloadImages?imgNames=${getById.img}`);
              const data = await response.json();
              setKeepingImgSource(data.imageUrls);
            }
             
  
          } catch (error) {
              console.error("Error downloading images:", error);
          }
      };
      fetchData();
  }, [getById]);
    const price = "Aze";
    const teratory = "m²";
    const convertDate = (x) => {
      return x.toString().replace("T", " ").substring(0, 16);
    };
    const deleteItem = async () => {
        try {
          const response = await fetch(`http://localhost:5224/api/Sell/${getById.id}`, {
            method: 'DELETE'
          });
          
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
             navigate('/homelogin/MainAdmin/Sell/Own');
          if (response.status === 204) { 
            console.log("Item deleted successfully");
        
          }
      
        } catch (error) {
          console.error("Error in deleteItem:", error);
        }
      }
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
                     <div>
                         <span onClick={btnLeftIcon}><i className="fa-solid fa-angle-left"></i></span>
                         <span onClick={btnRightIcon}><i className="fa-solid fa-angle-right"></i></span>
                     </div>
                     <div>
                         <img src={keepingImgSource[ImgSourceIndex]} alt="" className='w-100 h-100' />
                     </div>




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
           {getById.addition
            && (
             <p>
             Ətraflı:<span className="measure-home">{getById.addition}</span>
           </p>
            )
            }
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
             {getById.price * 20 /100}<span>{price}</span>
             </span>
           </p>
           <p>
             Tarix:<span className="time-home">{convertDate(getById.date)}</span>
           </p>
           {/* <div className="height-for-coordiante mt-2 mb-2 p-4">
             <Coordinate />
           </div> */}
           <div>
             <div className="d-flex justify-content-center w-100">
               <button className="btn btn-mycolor height-for-calling fs-5">
                 <i className="fa-solid fa-phone"></i> Əmlakçıya zəng etmək.
               </button>
             </div>
           </div>
         </div>
       )}
                     <div className='p-2 m-3 d-flex h-auto'>
                      <button className='btn btn-danger me-2 h-100' onClick={deleteItem} >Silmək</button>
                      <button className='btn btn-success me-2 h-100' onClick={UpdateItem} >Yeniləmək</button>
                 </div>
                
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

export default SellInside