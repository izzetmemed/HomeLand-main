import React from "react";
import SectionPayment from "./payment/sectionpayment";
import axios from "axios";
import { useEffect, useState, useRef } from "react";
const RentPayment = () => {
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
        const resp = await axios.get("http://localhost:3000/Rent");
        if (input != null) {
          const filteredArray = Array.from(resp.data).filter(
            (x) => x.Id === input
          );

          setFilteredData(filteredArray);
          return;
        }
        if (inputOwn != null) {
          const filteredArray = Array.from(resp.data).filter(
            (x) => x.OwnNumber === inputOwn
          );
          setFilteredData(filteredArray);
          return;
        }
        if (inputCustomer != null) {
          const filteredArray = Array.from(resp.data).filter(
            (x) => x.CustomerNumber === inputCustomer
          );

          setFilteredData(filteredArray);
          return;
        } else {
          setFilteredData(resp.data);
        }
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
          {filteredData.map((x) => (
            <SectionPayment
              id={x.Id}
              OwnNumber={x.OwnNumber}
              priceHome={x.Price}
              Code={x.Id}
              key={x.Id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RentPayment;
