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
        <div className='btn w-100 text-white search-btn-click'>
          Bütün səbətiniz
        </div>
      </div>
      <div className='d-flex flex-wrap'>
        {getData.map((x, index) => (
          <Section
            key={index} 
            priceHome={x[2]}
            address={x[3]}
            MetroHome={x[4]}
            roomHome={x[5]}
            WhoCanTake={x[6]}
            measureHome={x[7]}
            Items={x[8]}
            dateTime={x[9]}
            deleteBasket={() => {
              const updatedData = [...getData];
              updatedData.splice(index, 1);
              setgetData(updatedData);
              localStorage.setItem("Section", JSON.stringify(updatedData));
            }}
          />
        ))}
      </div>
      <div>
        {getData.length === 0 && (
          <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
            <p className='fs-3 text-danger'>Səbətiniz boşdur.</p>
          </div>
        )}
      </div>
      <style>
        {`
          .mybasketOnImg {
            display: none;
          }
          .mydeleteOnImg {
            display: block;
          }
        `}
      </style>
    </div>
  );
}

export default Basket;
