import React, { useState, useEffect } from 'react';
import Section from '../section';
import SectionObyekt from '../Obyekt/SectionObyekt';
import SectionSell from '../SellHome/SectionSell';

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
        {getData.map((x, index) => {
          if (x[2] === "obyekt") {
            return (
              <SectionObyekt
                key={index} 
                priceHome={x[1]}
                address={x[4]}
                MetroHome={x[5]}
                roomHome={x[6]}
                SellorRent={x[7]}
                Region={x[8]}
                measureHome={x[9]}
                dateTime={x[10]}
                deleteBasket={() => {
                  const updatedData = [...getData];
                  updatedData.splice(index, 1);
                  setgetData(updatedData);
                  localStorage.setItem("Section", JSON.stringify(updatedData));
                }}
              />
            );
          }
          if (x[2] == "sellHome") {
            console.log(x[9])
            return (
              <SectionSell
                key={index} 
                priceHome={x[3]}
                address={x[4]}
                MetroHome={x[5]}
                roomHome={x[6]}
                kindofHome={x[7]}
                measureHome={x[8]}
                Sənəd={x[9]}
                dateTime={x[10]}
                deleteBasket={() => {
                  const updatedData = [...getData];
                  updatedData.splice(index, 1);
                  setgetData(updatedData);
                  localStorage.setItem("Section", JSON.stringify(updatedData));
                }}
              />
            );
          }

          return (
            <Section
              key={index} 
              priceHome={x[3]}
              address={x[4]}
              MetroHome={x[5]}
              roomHome={x[6]}
              WhoCanTake={x[7]}
              measureHome={x[8]}
              Items={x[9]}
              dateTime={x[10]}
              deleteBasket={() => {
                const updatedData = [...getData];
                updatedData.splice(index, 1);
                setgetData(updatedData);
                localStorage.setItem("Section", JSON.stringify(updatedData));
              }}
            />
          );
        })}
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
