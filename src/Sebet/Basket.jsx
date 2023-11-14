import React, { useState, useEffect } from 'react';
import Section from '../section';

const Basket = () => {
  const [getData, setgetData] = useState([]);

  useEffect(() => {
    setgetData(JSON.parse(localStorage.getItem("Section")) || []);
  }, []); 

 
  
  return (
    <div>
       <div className="col-12 mt-3 pe-2">
            <div className='btn w-100 text-white search-btn-click' >
              Bütün səbətiniz
            </div>
          </div>
         <div className='d-flex flex-wrap'>
      {getData.map((x, index) => (
        <Section
          key={index} 
          priceHome={x[1]}
          address={x[2]}
          MetroHome={x[3]}
          roomHome={x[4]}
          WhoCanTake={x[5]}
          measureHome={x[6]}
          Items={x[7]}
          dateTime={x[8]}
          deleteBasket={() => {
            const updatedData = [...getData];
            updatedData.splice(index, 1);
            setgetData(updatedData);
            localStorage.setItem("Section", JSON.stringify(updatedData));
          }}
        />
      ))}
      </div>
      <style>
        {`
          .mybasketOnImg {
            display: none;
          }
          .mydeleteOnImg{
            display:block;
          }
        `}
      </style>
    </div>
  );
}

export default Basket;
