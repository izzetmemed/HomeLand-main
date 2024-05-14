import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchPut from '../../../MyComponentsAdmin/FetchPut';
import TurnImg from '../../../MyComponents/TurnImg';
import StringCutting from "../../../MyComponents/StringCutting";
import DateCutting from "../../../MyComponents/DateCutting";
import GetImg from "../../../MyComponents/GetImg";
const LandSectionOwn = ({props}) => {
  if(props.Img.length!==0){
    var keepingImgSource =GetImg(props.Img);
  }else{
    keepingImgSource=[];
  }
      const price="Azn";
    var Data=props
    const [sendTrueOrFalse, setSendTrueOrFalse]=useState(Data.IsCalledWithHomeOwnFirstStep);
    const [recommendBool, setRecommendBool]=useState(Data.Recommend);

    const handleButtonClick = () => {
      Data.İtem=Data.Item;
      Data.IsCalledWithHomeOwnFirstStep=!sendTrueOrFalse;
      setSendTrueOrFalse(!sendTrueOrFalse);
      const PutData=async()=>{
        await FetchPut(Data,"Land");
       }
       PutData();
    };
    const recommendSell = () => {
      Data.İtem=Data.Item;
      Data.Recommend=!recommendBool;
      setRecommendBool(!recommendBool);
      const PutData=async()=>{
        await FetchPut(Data,"Land/Recommend");
       }
       PutData();
    };
    const buttonStyle = {
      backgroundColor: Data.IsCalledWithHomeOwnFirstStep ?  'green' :'red',
      borderRadius: '5px',
      padding:'0',
      cursor: 'pointer',
      marginLeft:'5px',
      height:'50px',
      color:'white',
    };
    const buttonRecommendStyle = {
      backgroundColor: Data.Recommend ?  'green' :'red',
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
             <TurnImg keepingImgSource={keepingImgSource}/> 
           </div> 
           <div className='pb-2'><Link to={`/Homelogin/MainAdmin/Land/Own/Kart/${props.Id}`}>
              <p>Qiymet:<span >{props.Price}</span><span>{price}</span></p> 
              <p>Ünvan:<span >{StringCutting(props.Address,20)}</span></p> 
              <p>Rayon:<span >{props.Region}</span></p> 
               <p>Tarix:<span >{DateCutting(props.Date)}</span></p>
                </Link>
                <button className='btn col-5' style={buttonStyle} onClick={handleButtonClick}> Ev sahibi ilə danışıldı</button>
                <button className='btn col-5' style={buttonRecommendStyle} onClick={recommendSell}> Tövsiyə et</button>

           </div>
       </div>
   </div>
</div>
  )
}

export default LandSectionOwn