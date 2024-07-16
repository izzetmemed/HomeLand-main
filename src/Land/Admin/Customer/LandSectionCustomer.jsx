import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import TurnImg from '../../../MyComponents/TurnImg';
import StringCutting from "../../../MyComponents/StringCutting";
import GetImg from "../../../MyComponents/GetImg";
import AddPrice from '../../../MyComponents/AddPrice';
const LandSectionCustomer = ({props}) => {
    const [keepingImgSource, setKeepingImgSource] = useState([]);
  const imageUrls =GetImg(props.Img);
  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [props]);
  return (
    <div className='col-md-4 col-sm-6 col-12 col-lg-3'>
    <div className=' p-2 mt-4'>
       <div className='card-home'>
           <div className='overflow-hidden'>
              <TurnImg keepingImgSource={keepingImgSource}/>
           </div>
           <div className='pb-2'><Link to={`/HomeLogin/MainAdmin/Land/Customer/Kart/${props.Id}`}>
              <p>Qiymet:<span >{AddPrice(props.Price) }</span></p> 
              <p>Ünvan:<span >{StringCutting(props.Address,20)}</span></p> 
               <p>Region:<span >{props.Region}</span></p>
               <p>Kod:<span >{props.Id}</span></p>
               <p>Tarix:<span >{props.Date}</span></p>
                </Link>
           </div>
       </div>
   </div>
</div>
  )
}

export default LandSectionCustomer