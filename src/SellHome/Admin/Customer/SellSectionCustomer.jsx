import React from 'react';
import { Link } from 'react-router-dom';
import GetImg from '../../../MyComponents/GetImg';
import TurnImg from '../../../MyComponents/TurnImg';
import StringCutting from "../../../MyComponents/StringCutting";
import DateCutting from "../../../MyComponents/DateCutting";
import AddPrice from '../../../MyComponents/AddPrice';
const SellSectionCustomer = (({props}) => {
  if(props.Img.length!==0){
    var keepingImgSource =GetImg(props.Img);
  }else{
    keepingImgSource=[];
  }
  return (
    <div className='col-md-4 col-sm-6 col-12 col-lg-3'>
         <div className=' p-2 mt-4'>
            <div className='card-home'>
                <div className='overflow-hidden'>
                   <TurnImg keepingImgSource={keepingImgSource}/>
                </div>
                <div className='pb-2'><Link to={`/HomeLogin/MainAdmin/Sell/Customer/Kart/${props.Id}`}>
                   <p>Qiymet:<span >{AddPrice(props.Price)}</span></p> 
                   <p>Ünvan:<span >{StringCutting(props.Address,20)}</span></p> 
                   <p>Metro:<span >{props.Metro}</span></p> 
                    <p>Otaq sayi:<span>{props.Room}</span></p> 
                    <p>Region:<span >{props.Region}</span></p>
                    <p>Kod:<span >{props.Id}</span></p>
                    <p>Tarix:<span >{DateCutting(props.Date)}</span></p>
                     </Link>
                </div>
            </div>
        </div>
    </div>
       
  )
}

)
export default SellSectionCustomer