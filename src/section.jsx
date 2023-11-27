import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import InsideCard from './mainpage/İnsideCard';
const Section = ({id,type,priceHome,address,MetroHome,roomHome,WhoCanTake,measureHome,Items,dateTime,deleteBasket}) => {
    const keepingImgSource = [
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp',
        'https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPRSAAg1MOr6nFfMv7L131kZl7O3se-oYEf0V0ZLW7jDUVmh7vtnwLZ1uJHUI7Ji_-pTE&usqp=CAU',
        'https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg',
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://tjh.com/wp-content/uploads/2023/04/denver-new-home-Meade2.webp',
        'https://foyr.com/learn/wp-content/uploads/2021/08/design-your-dream-home.jpg',
        'https://nh.rdcpix.com/0ca5883f9bf997505d554633ca1e8aa9l-f3652169346od-w480_h360.jpg',
        'https://photos.zillowstatic.com/fp/99e328626c7284a24c908e885ecb489e-cc_ft_960.jpg',
        
      ];
      
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
      [keepingImgSource,id,type, priceHome, address, MetroHome, roomHome, WhoCanTake, measureHome, Items, dateTime],
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
                    <span className='mybasketOnImg' style={mybasketOnImg} onClick={SendBasket} >
                    <i className="fa-solid fa-basket-shopping"></i>
                    </span> 
                    <span className='mydeleteOnImg' onClick={deleteBasket} >
                    <i className="fa-solid fa-trash"></i>
                    </span> 

                
                   
                </div>
                  
                <div className='pb-2'><Link to='/Kart'>
                   <p>Qiymet:<span >{priceHome}</span><span>{price}</span></p> 
                   <p>Ünvan:<span >{cutString(address,20)}</span></p> 
                   <p>Metro:<span >{MetroHome}</span></p> 
                    <p>Otaq sayi:<span>{roomHome}</span></p> 
                    <p>Kiraye verilir:<span >{WhoCanTake}</span></p>
                    <p>Sahe:<span>{measureHome}<span>{teratory}</span></span></p>
                    <p>Əşya:<span >{Items}</span></p>
                    <p>Tarix:<span >{dateTime}</span></p>
                                     </Link>
                </div>

            </div>
        </div>
       
        
    </div>
       
  )
}

export default Section