import React, { useState } from 'react';

const SectionPayment = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const [isButtonTwoClicked, setIsButtonTwoClicked] = useState(false);
    const [isButtonThreeClicked, setIsButtonThreeClicked] = useState(false);
    const [isButtonFourClicked, setIsButtonFourClicked] = useState(false);

  const handleButtonClick = () => {
    setIsButtonClicked(true);
  };
  const handleTwoButtonClick = () => {
    setIsButtonTwoClicked(true);
  };
  const handleThreeButtonClick = () => {
    setIsButtonThreeClicked(true);
  };
  const handleFourButtonClick = () => {
    setIsButtonFourClicked(true);
  };
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
    const buttonStyle = {
        backgroundColor: isButtonClicked ? 'green' : 'red',
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
                    <div>
                    <span onClick={btnLeftIcon}><i className="fa-solid fa-angle-left"></i></span>
                    <span onClick={btnRightIcon}><i className="fa-solid fa-angle-right"></i></span>
                    </div>
                    <div>
                            <img src={keepingImgSource[ImgSourceIndex]} alt="" className='w-100 h-100'/>
                    </div>
                        

                
                   
                </div>
                <div className='pb-2'>
                   <p>Qiymet:<span className='price-home'>500</span></p> 
                   <p>Unvan:<span className='address-home'>Nesimi Rayon, eliiskenderov kucesi</span></p> 
                    <p>Tarix:<span className='time-home'>06.09.2023 17:23</span></p>
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

export default SectionPayment