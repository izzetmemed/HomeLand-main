import React, { useState, useEffect } from 'react';
import Section from '../section';
import SectionObyekt from '../Obyekt/SectionObyekt';
import SectionSell from '../SellHome/SectionSell';
import SectionLand from '../Land/SectionLand';
import OfficeSection from "../Office/SectionOffice";
import { useSelector } from 'react-redux';
import { Load } from '../Load/Load';
import FetchGetSearch from '../MyComponents/FetchGetSearch';
const Basket = () => {
  const [getData,setGetData] = useState(useSelector(state => state.deleteBasket.data));

  useEffect(() => {
    setGetData(JSON.parse(localStorage.getItem("Section")) || []);
  }, [useSelector(state => state.deleteBasket.data)]);
  const [getAllRentHome, setGetAllRentHome] = useState([]);
  const [getAllLand, setGetAllLand] = useState([]);
  const [getAllOffice, setGetAllOffice] = useState([]);
  const [getAllSell, setGetAllSell] = useState([]);
  const [getAllObyekt, setGetAllObyekt] = useState([]);

  useEffect(() => {
    async function fetchRentHome() {
      try {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'rentHome')
          .map(item => item[0]);
            const resp = await FetchGetSearch(BasketRentIds,"RentHome/GetAll");
        const parsedData = resp.map(item => JSON.parse(item));
        setGetAllRentHome(parsedData);
      } catch (error) {
        console.error('Error fetching RentHome:', error);
      }
    }
    fetchRentHome();
  }, [getData]);
  useEffect(() => {
    async function fetchRentHome() {
      try {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'Land')
          .map(item => item[0]);
            const resp = await FetchGetSearch(BasketRentIds,"Land/GetAll");
        const parsedData = resp.map(item => JSON.parse(item));
        setGetAllLand(parsedData);
      } catch (error) {
        console.error('Error fetching RentHome:', error);
      }
    }
    fetchRentHome();
  }, [getData]);
  useEffect(() => {
    async function fetchRentHome() {
      try {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'Office')
          .map(item => item[0]);
            const resp = await FetchGetSearch(BasketRentIds,"Office/GetAll");
        const parsedData = resp.map(item => JSON.parse(item));
        setGetAllOffice(parsedData);
      } catch (error) {
        console.error('Error fetching RentHome:', error);
      }
    }
    fetchRentHome();
  }, [getData]);
  useEffect(() => {
    async function fetchObyekt() {
      try {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'obyekt')
          .map(item => item[0]);
            const resp = await FetchGetSearch(BasketRentIds,"Obyekt/GetAll");
        const parsedData = resp.map(item => JSON.parse(item));
          setGetAllObyekt(parsedData);
      } catch (error) {
        console.error('Error fetching Obyekt:', error);
      }
    }
    fetchObyekt();
  }, [getData]); 
  useEffect(() => {
    async function fetchSell() {
      try {
          const BasketRentIds =await getData
          .filter(x => x[1] === 'sellHome')
          .map(item => item[0]);
            const resp = await FetchGetSearch(BasketRentIds,"Sell/GetAll");
            const parsedData = resp.map(item => JSON.parse(item));
            setGetAllSell(parsedData);
      } catch (error) {
        console.error('Error fetching Sell:', error);
      }
    }
    fetchSell();
  }, [getData]); 
  
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);
  useEffect(() => {
      const timer = setTimeout(() => setShowMessage(false), 10000);
      return () => clearTimeout(timer);
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
          props={x}
         
        />
      ))}
      {getAllOffice.map((x, index) => (
        <OfficeSection
          key={index}
          props={x}
   
        />
      ))}
      {getAllSell.map((x, index) => (
        <SectionSell
        key={index}
        props={x}

        />
      ))}
      {getAllLand.map((x, index) => (
        <SectionLand
        key={index}
        props={x}

        />
      ))}
      {getAllRentHome.map((x, index) => (
        <Section
        key={index}
        props={x}
        />
      ))}
      {getAllRentHome.length === 0 && getAllSell.length === 0 && getAllObyekt.length === 0 && getAllLand.length=== 0 && getAllOffice.length=== 0 && (
        <div className='w-100 BasketİsEmpty d-flex justify-content-center align-items-center'> 
         {showMessage  ? <Load/> :  <p className='fs-3 '>Səbətiniz boşdur.</p>}
       </div>
      )}
      </div>
    </div>
  );
}

export default Basket;
