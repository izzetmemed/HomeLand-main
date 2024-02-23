import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import FetchPut from '../../../MyComponentsAdmin/FetchPut';
import UseFetchData from '../../../MyComponents/FetchImg';
import TurnImg from '../../../MyComponents/TurnImg';
const SellSectionPayment = ({id,Name,Number,Code , data}) => {
    
    var Data=data
    const [sendTrueOrFalse, setSendTrueOrFalse]=useState(Data.IsCalledWithHomeOwnThirdStep)
    const [isButtonTwoClicked, setIsButtonTwoClicked] = useState(Data.IsCalledWithCustomerFirstStep);
    const [isButtonThreeClicked, setIsButtonThreeClicked] = useState(Data.IsPaidHomeOwnFirstStep);
    const [isButtonFourClicked, setIsButtonFourClicked] = useState(Data.IsPaidCustomerFirstStep);
  
  const handleButtonClick = () => {
    Data.IsCalledWithHomeOwnThirdStep=!sendTrueOrFalse;
    Data.İtem=Data.Item;
    setSendTrueOrFalse(!sendTrueOrFalse);
    fetchFunc();
  };

  const handleTwoButtonClick = () => {
    Data.IsCalledWithCustomerFirstStep=!isButtonTwoClicked;
    Data.İtem=Data.Item;
    setIsButtonTwoClicked(!isButtonTwoClicked);
    fetchFunc();
  };
  const handleThreeButtonClick = () => {
    Data.IsPaidHomeOwnFirstStep=!isButtonThreeClicked;
    Data.İtem=Data.Item;
    setIsButtonThreeClicked(!isButtonThreeClicked);
    fetchFunc();
  };
  const handleFourButtonClick = () => {
    Data.IsPaidCustomerFirstStep=!isButtonFourClicked;
    Data.İtem=Data.Item;
    setIsButtonFourClicked(!isButtonFourClicked);
    fetchFunc();
  };

  const fetchFunc=()=>{
    const PutData=async()=>{
      await FetchPut(Data,"Sell");
     }
     PutData();
  }
  const [keepingImgSource, setKeepingImgSource] = useState([]);
 
  const imageUrls = UseFetchData(data?.Img, 'SellImg');
  
  useEffect(() => {
   setKeepingImgSource(imageUrls);
  }, [data, imageUrls]);

      

    const buttonStyle = {
        backgroundColor:  sendTrueOrFalse ? 'green' : 'red',
        borderRadius: '5px',
        padding:'0',
        cursor: 'pointer',
        marginLeft:'5px',
        height:'50px',
        color:'white',
      };
    const buttonTwoStyle = {
        backgroundColor: isButtonTwoClicked ? 'green' : 'red',
        borderRadius: '5px',
        padding:'0',
        cursor: 'pointer',
        marginLeft:'5px',
        height:'50px',
        color:'white',
      };
    const buttonThreeStyle = {
        backgroundColor: isButtonThreeClicked ? 'green' : 'red',
        borderRadius: '5px',
        padding:'0',
        cursor: 'pointer',
        marginLeft:'5px',
        height:'50px',
        color:'white',
      };
    const buttonFourStyle = {
        backgroundColor: isButtonFourClicked ? 'green' : 'red',
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
                <div className='pb-2'>
                <Link to={`/homelogin/MainAdmin/Sell/Payment/Kart/${id}`}>
                <p>Ev sahibi:<span >{Name}</span></p> 
                    <p>Kod:<span>{Code}</span></p> 
                    <p>Nömrəsi<span >{Number}</span></p>
                    </Link>
                    <div className=' d-flex flex-wrap'>
                         <button className='btn col-5' style={buttonStyle} onClick={handleButtonClick}> Ev sahibi <br /> ilə danışıldı</button>
                         <button className='btn col-5' style={buttonTwoStyle} onClick={handleTwoButtonClick}>Müştərilə <br /> danışıldı</button>
                         <button className='btn col-5 mt-1' style={buttonThreeStyle} onClick={handleThreeButtonClick}> Ev sahibi <br />ödədi</button>
                         <button className='btn col-5 mt-1' style={buttonFourStyle} onClick={handleFourButtonClick}>Müştərilə <br />ödədi</button>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
       
  )
}

export default SellSectionPayment