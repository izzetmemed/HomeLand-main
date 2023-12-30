import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
const SellSectionCustomer = (({id,priceHome,address,MetroHome,roomHome,Region,dateTime , imgNames}) => {
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
      const price="Aze";
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
                            <img src={keepingImgSource[ImgSourceIndex]} alt="" className='w-100 h-100'/>
                    </div>
  
                </div>
                <div className='pb-2'><Link to={`/HomeLogin/MainAdmin/Sell/Customer/Kart/${id}`}>
                   <p>Qiymet:<span >{priceHome}</span><span>{price}</span></p> 
                   <p>Ünvan:<span >{cutString(address,20)}</span></p> 
                   <p>Metro:<span >{MetroHome}</span></p> 
                    <p>Otaq sayi:<span>{roomHome}</span></p> 
                    <p>Region:<span >{Region}</span></p>
                    <p>Kod:<span >{id}</span></p>
                    <p>Tarix:<span >{dateTime}</span></p>

                     </Link>
                    

                </div>
            </div>
        </div>
    </div>
       
  )
}

)
export default SellSectionCustomer