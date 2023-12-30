import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const SellSectionOwn = ({id,type,priceHome,address,MetroHome,roomHome,Region,measureHome,Sənəd,dateTime,deleteBasket,imgNames,data}) => {
  const [keepingImgSource, setKeepingImgSource] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      try {
        if(imgNames.length!==0){
          const response = await fetch(
            `http://localhost:5224/api/SellImg/DownloadImages?imgNames=${imgNames}`
          );

          const data = await response.json();
          setKeepingImgSource(data.imageUrls);

        }
      
      } catch (error) {
        console.error("Error downloading images:", error);
      }
    };
    fetchData();
  }, [imgNames]);

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
    const price="Aze";
    const teratory="km";
  
    const [changeColor,setchangeColor]=useState(false);
    const [userData, setUserData] = useState([]);
    const [CheckRptrData, setCheckRptrData] = useState(true);
    const newData = [
      [keepingImgSource,id,type, priceHome, address, MetroHome, roomHome, Region, measureHome, Sənəd, dateTime],
    ];
   
    const SendBasket = () => {
      setchangeColor(true);
      const LastinfoLocal = JSON.parse(localStorage.getItem("Section")) || [];
      if(CheckRptrData){
         
        setUserData([...LastinfoLocal, ...newData]);
      localStorage.setItem('Section', JSON.stringify([...LastinfoLocal, ...newData]));
        setCheckRptrData(false);
      }else{
        setchangeColor(false);
        const updatedData =LastinfoLocal;
        setUserData(updatedData);
        const indexToRemove = updatedData.findIndex(item => item[1] === id && item[2]===type);
        if (indexToRemove !== -1) {
          updatedData.splice(indexToRemove, 1);
          setUserData(updatedData);
          localStorage.setItem("Section", JSON.stringify(updatedData));
        }
      }
     
    };
     useEffect(() => {
      const isHave = (JSON.parse(localStorage.getItem("Section")) || []).some((x) => (x[1] == id && x[2]===type));
      if (isHave) {
        setchangeColor(true);
        setCheckRptrData(false);
      }
    }, []); 

   const mybasketOnImg={
     backgroundColor:changeColor?"rgb(79, 189, 89)":"",
   }
 
   function cutString(inputString, maxLength) {
    if (typeof inputString !== 'string') {
      console.error("Error: Input is not a string");
      return inputString;
    }
  
    if (inputString.length <= maxLength) {
      return inputString;
    }
  
    return inputString.slice(0, maxLength) + '...';
  }
  var Data=data
  const [sendTrueOrFalse, setSendTrueOrFalse]=useState(Data.IsCalledWithHomeOwnFirstStep)
  const handleButtonClick = () => {
    Data.IsCalledWithHomeOwnFirstStep=!sendTrueOrFalse;
    setSendTrueOrFalse(!sendTrueOrFalse);
    fetch("http://localhost:5224/api/Sell", {
        method: "PUT",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response;
        })
        .then((responseData) => {
          console.log("Data uploaded successfully:", responseData);
        })
        .catch((error) => {
          console.error("Error uploading data:", error);
        });
  };
  const buttonStyle = {
    backgroundColor: Data.IsCalledWithHomeOwnFirstStep ? 'red' : 'green',
    borderRadius: '5px',
    padding:'0',
    cursor: 'pointer',
    marginLeft:'5px',
    height:'50px',
    color:'white',
  };
  return (
    <div className='col-md-4 col-sm-6 col-12 col-lg-3'>
      
         <div className=' p-2 mt-4'>
            <div className='card-home'>
                <div className='overflow-hidden'>
                    <div>
                    <span onClick={btnLeftIcon}><i className="fa-solid fa-angle-left"></i></span>
                    <span onClick={btnRightIcon}><i className="fa-solid fa-angle-right"></i></span>
                    </div>
                    
                    <div>
                    <img
                src={
                  keepingImgSource.length > 0
                    ? keepingImgSource[ImgSourceIndex]
                    : require("../../../logo.home/Logo-white.PNG")
                }
                alt=""
                className="w-100 h-100"
              />
                    </div>
                    <span className='mybasketOnImg' style={mybasketOnImg} onClick={SendBasket} >
                    <i className="fa-solid fa-basket-shopping"></i>
                    </span> 
                    <span className='mydeleteOnImg' onClick={deleteBasket} >
                    <i className="fa-solid fa-trash"></i>
                    </span>      
                </div> 
                <div className='pb-2'><Link to={`/Homelogin/MainAdmin/Sell/Own/Kart/${id}`}>
                   <p>Qiymet:<span >{priceHome}</span><span>{price}</span></p> 
                   <p>Ünvan:<span >{cutString(address,20)}</span></p> 
                   <p>Metro:<span >{MetroHome}</span></p> 
                    <p>Otaq sayi:<span>{roomHome}</span></p> 
                    <p>Region:<span >{Region}</span></p>
                    <p>Tarix:<span >{dateTime}</span></p>
                     </Link>
                     <button className='btn col-5' style={buttonStyle} onClick={handleButtonClick}> Ev sahibi ilə danışıldı</button>

                </div>

            </div>
        </div>
       
        
    </div>
       
  )
}

export default SellSectionOwn