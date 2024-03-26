import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FetchPut from '../../../MyComponentsAdmin/FetchPut';
import TurnImg from '../../../MyComponents/TurnImg';
import StringCutting from "../../../MyComponents/StringCutting";
import DateCutting from "../../../MyComponents/DateCutting";
import GetImg from '../../../MyComponents/GetImg';
import AddPrice from "../../../MyComponents/AddPrice";
const SectionOwn = ({props}) => {
  if(props.Img.length!==0){
    var keepingImgSource =GetImg(props.Img);
  }else{
    keepingImgSource=[];
  }
  var Data=props
  const [sendTrueOrFalse, setSendTrueOrFalse]=useState(Data.IsCalledWithHomeOwnFirstStep)
  const handleButtonClick = () => {
    Data.İtem=Data.Item;
    Data.IsCalledWithHomeOwnFirstStep=!sendTrueOrFalse;
    setSendTrueOrFalse(!sendTrueOrFalse);
    const PutData=async()=>{
      await FetchPut(Data,"RentHome");
     }
     PutData();
  };
  const buttonStyle = {
    backgroundColor: sendTrueOrFalse ? 'green':'red',
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
                <div className='pb-2'><Link to={`/Homelogin/MainAdmin/Renthome/Own/Kart/${props.Id}`}>
                   <p>Qiymet:<span >{AddPrice(props.Price)}</span></p> 
                   <p>Ünvan:<span >{StringCutting(props.Address,20)}</span></p> 
                   <p>Metro:<span >{props.Metro}</span></p> 
                    <p>Otaq sayi:<span>{props.Room}</span></p> 
                    <p>Region:<span >{props.Region}</span></p>
                    <p>Tarix:<span >{DateCutting(props.Date)}</span></p>
                     </Link>
                     <button className='btn col-5' style={buttonStyle} onClick={handleButtonClick}> Ev sahibi ilə danışıldı</button>

                </div>

            </div>
        </div>
       
        
    </div>
       
  )
}

export default SectionOwn