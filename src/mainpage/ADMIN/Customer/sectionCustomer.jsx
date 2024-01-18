import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import TurnImg from '../../../MyComponents/TurnImg';
import UseFetchData from '../../../MyComponents/FetchImg';
const SectionCustomer = (({id,priceHome,address,MetroHome,roomHome,Region,dateTime , imgNames}) => {
  const [keepingImgSource, setKeepingImgSource] = useState([]);
 
  const imageUrls = UseFetchData(imgNames, 'RentHomeImg');
  
  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [imgNames, imageUrls]);


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
                  <TurnImg keepingImgSource={keepingImgSource}/>
                </div>
                <div className='pb-2'><Link to={`/HomeLogin/MainAdmin/Renthome/Customer/Kart/${id}`}>
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
export default SectionCustomer