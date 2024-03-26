import React from 'react';
import { Link } from 'react-router-dom';
import TurnImg from '../MyComponents/TurnImg';
import Shopping from '../MyComponents/Shopping';
import InfoSell from '../MyComponents/InfoSell';
import GetImg from "../MyComponents/GetImg";
const SectionSell = ({props}) => {
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
                <Shopping props={props} type={"sellHome"} />
                </div>
                <div className='pb-2'>
                <Link to={`/Sell/Kart/${props.Id}`}>
                  <InfoSell props={props}/>
                </Link>
                </div>
            </div>
        </div> 
    </div>  
  )
}

export default SectionSell