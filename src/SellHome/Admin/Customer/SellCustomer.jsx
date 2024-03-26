import React from 'react'
import SectionCustomer from './SellSectionCustomer';
import { useEffect,useState,useRef } from 'react';
import Pagenation from '../../../pagenation';
import {Load} from '../../../Load/Load';
import FetchGetAll from '../../../MyComponents/FetchGetAll';
const SellCustomer = () => {
  const inputValue=useRef(null);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await FetchGetAll('Sell/Normal');

        if (resp.data) {
          let data = Array.isArray(resp.data) ? resp.data : JSON.parse(resp.data);
          const filteredArray = input !== null
            ? data.filter(item => JSON.parse(item).Id === input)
            : data;
          setFilteredData(filteredArray);
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [input]);
  const searchCode=()=>{
    const Value=Number(inputValue.current.value);
    setInput(Value);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [itemCount, setItemCount] = useState(20);

  const lastIndex = currentPage * itemCount;
  const firstItem = lastIndex - itemCount;
  const filteredDataSlice = filteredData.slice(firstItem, lastIndex);
  const countOfPagenation = Math.ceil(filteredData.length / itemCount);
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
            <input type="number"  placeholder='kod' ref={inputValue}/>
            <button className='btn btn-success' onClick={searchCode}> Axtarmaq</button>
          </div>
          <div className='d-flex flex-wrap'>
          {parsedData.map((x) => ( 
          <SectionCustomer
            key={x.Id}
            props={x}
          />
        ))}
        {filteredDataSlice.length === 0 && (
          <div className="w-100 BasketİsEmpty d-flex justify-content-center align-items-center">
            {showLoad ? <Load/> :  <p className='fs-3 text-danger'>Ev tapılmadı!!!</p>} 
          </div>
        )}
          </div>
        
      </div>
      <Pagenation countOfPagenation={countOfPagenation} setPage={setPage} />;
         
        
       
    </div>
  )
}

export default SellCustomer