import React from "react";
import SectionPayment from "./SellSectionPayment";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
import {Load} from '../../../Load/Load';
import Pagination from "../../../pagenation";
import FetchGetAll from "../../../MyComponents/FetchGetAll";
const SellPayment = () => {
  const inputValue = useRef(null);
  const inputOwnValue = useRef(null);
  const inputCustomerValue = useRef(null);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState(null);
  const [inputOwn, setInputOwn] = useState(null);
  const [inputCustomer, setInputCustomer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await FetchGetAll('Sell/Normal');
        const data = resp.data;
        let filterCondition = null;
        if (input != null) {
          filterCondition = (item) => JSON.parse(item).Id === input;
        } else if (inputOwn != null) {
          filterCondition = (item) => JSON.parse(item).Number === inputOwn;
        } else if (inputCustomer != null) {
          filterCondition = (item) => JSON.parse(item).Customer.some(x=>JSON.parse(x).Number.replace(/['"]+/g, '')=== inputCustomer);
        } 

        setFilteredData(filterCondition ? data.filter(filterCondition) : data.filter(x=>JSON.parse(x).Customer.length>0 && (JSON.parse(x).IsPaidHomeOwnFirstStep===false || JSON.parse(x).IsPaidCustomerFirstStep===false )));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [input, inputCustomer, inputOwn]);
  const searchCode = () => {
    const Value = Number(inputValue.current.value);

    setInputOwn(null);
    setInputCustomer(null);
    setInput(Value);
  };
  const searchOwn = () => {
    const Value = inputOwnValue.current.value;

    setInput(null);
    setInputCustomer(null);
    setInputOwn(Value);
  };
  const searchCustomer = () => {
    const Value = inputCustomerValue.current.value;

    setInput(null);
    setInputOwn(null);
    setInputCustomer(Value);
   
  };

  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(20);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);
  const convertDate = (x) => {
    return x.toString().replace("T", " ").substring(0, 16);
  };
  const parsedData = filteredDataSlice.map((jsonString) => JSON.parse(jsonString));

 const setPage=(x)=>{
  setCurrentPage(x)
 }
 const [showLoad, setShowLoad] = useState(true);

useEffect(() => {
  if (filteredDataSlice.length === 0) {
    const timer = setTimeout(() => setShowLoad(false), 5000);
    return () => clearTimeout(timer);
  } else {
    setShowLoad(false);
  }
}, [filteredDataSlice.length]);


  return (
    <div>
      <div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <input type="number" placeholder="kod" ref={inputValue} />
          <button className="btn btn-success" onClick={searchCode}>
            {" "}
            Axtarmaq
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <input
            type="number"
            ref={inputOwnValue}
            placeholder="Ev sahibinin nömrəsi"
          />
          <button className="btn btn-success" onClick={searchOwn}>
            {" "}
            Axtarmaq
          </button>
        </div>
        <div className="col-12 d-flex justify-content-center mt-5">
          <input
            type="number"
            ref={inputCustomerValue}
            placeholder="Müştəri nömrəsi"
          />
          <button className="btn btn-success" onClick={searchCustomer}>
            {" "}
            Axtarmaq
          </button>
        </div>
        <div className="d-flex flex-wrap">
          {parsedData.map((x) => (
            <SectionPayment
              id={x.Id}
              Name={x.FullName}
              Number={x.Number}
              Code={x.Id}
              key={x.Id}
              data={x}
            />
          ))}
           {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
          </div>
        )}
        </div>
        <Pagination countOfPagenation={countOfPagenation} setPage={setPage} />;
      </div>
    </div>
  );
};

export default SellPayment;
