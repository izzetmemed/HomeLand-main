import React, { useState, useEffect } from 'react';
import Section from '../section';
import SectionObyekt from '../Obyekt/SectionObyekt';
import SectionSell from '../SellHome/SectionSell';
import FetchGetAll from '../MyComponents/FetchGetAll';

const Basket = () => {
  const [getData, setGetData] = useState(JSON.parse(localStorage.getItem("Section")) || []);
  const [getAllRentHome, setGetAllRentHome] = useState([]);
  const [getAllSell, setGetAllSell] = useState([]);
  const [getAllObyekt, setGetAllObyekt] = useState([]);
 

  useEffect(() => {
    async function fetchRentHome() {
      try {
        setTimeout(async() => {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'rentHome')
          .map(item => item[0]);
            const resp = await FetchGetAll("RentHome");
        const parsedData = resp.data.map(item => JSON.parse(item));
        const rentData = parsedData.filter(x => BasketRentIds.includes(x.Id));
        setGetAllRentHome(rentData);
        }, 500);
      } catch (error) {
        console.error('Error fetching RentHome:', error);
      }
    }
    fetchRentHome();
  }, [getData]);
  
  useEffect(() => {
    async function fetchObyekt() {
      try {
        setTimeout(async() => {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'obyekt')
          .map(item => item[0]);
            const resp = await FetchGetAll("Obyekt");
        const parsedData = resp.data.map(item => JSON.parse(item));
        const rentData = parsedData.filter(x => BasketRentIds.includes(x.Id));
          setGetAllObyekt(rentData);
        }, 600);
      } catch (error) {
        console.error('Error fetching Obyekt:', error);
      }
    }
    fetchObyekt();
  }, [getData]); 
  
  useEffect(() => {
    async function fetchSell() {
      try {
        setTimeout(async() => {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'sellHome')
          .map(item => item[0]);
            const resp = await FetchGetAll("Sell");
            const parsedData = resp.data.map(item => JSON.parse(item));
            const rentData = parsedData.filter(x => BasketRentIds.includes(x.Id));
            setGetAllSell(rentData);
        }, 700);
      } catch (error) {
        console.error('Error fetching Sell:', error);
      }
    }
    fetchSell();
  }, [getData]); 
  
  const handleDelete = (Id,type) => {
    var DatainLocal=JSON.parse(localStorage.getItem("Section")) || []
      var index=DatainLocal.findIndex(x=>x[0]===Id && x[1]===type)
      DatainLocal.splice(index, 1);
      localStorage.setItem("Section", JSON.stringify(DatainLocal));
      setGetData(JSON.parse(localStorage.getItem("Section")) || []);
  };

  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div>
       <div className="col-12 mt-3 pe-2 ps-2">
        <div className='btn w-100 text-white search-btn-click'>
          Bütün səbətiniz
        </div>
      </div>
      <div className='d-flex flex-wrap'>
      {getAllObyekt.map((x, index) => (
        <SectionObyekt
          key={index}
          id={x.Id}
          priceHome={x.Price}
          address={x.Address}
          MetroHome={x.Metro}
          roomHome={x.Room}
          SellorRent={x.SellorRent}
          Region={x.Region}
          measureHome={x.Area}
          dateTime={convertDate(x.Date)}
          imgNames={x.Img}
          deleteButton={true}
          deleteBasket={() => handleDelete(x.Id,"obyekt")}
        />
      ))}
      {getAllSell.map((x, index) => (
        <SectionSell
        key={index}
        id={x.Id}
        priceHome={x.Price}
        address={x.Address}
        MetroHome={x.Metro}
        roomHome={x.Room}
        Sənəd={x.Document}
        Region={x.Region}
        measureHome={x.Area}
        dateTime={convertDate(x.Date)}
        imgNames={x.Img} 
        deleteButton={true}
        deleteBasket={() => handleDelete(x.Id,"sellHome")}
        />
      ))}
      {getAllRentHome.map((x, index) => (
        <Section
        key={index}
        id={x.Id}
        priceHome={x.Price}
        address={x.Address}
        MetroHome={x.Metro}
        roomHome={x.Room}
        Items={x.Item}
        region={x.Region}
        measureHome={x.Area}
        dateTime={convertDate(x.Date)}
        imgNames={x.Img}
        deleteBasket={() => handleDelete(x.Id,"rentHome")}
        deleteButton={true}
        />
      ))}
      {getAllRentHome.length === 0 && getAllSell.length === 0 && getAllObyekt.length === 0 && (
        <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
         {showMessage && <p className='fs-3'>Səbətiniz boşdur.</p>}
       </div>
      )}
      </div>
    </div>
  );
}

export default Basket;
