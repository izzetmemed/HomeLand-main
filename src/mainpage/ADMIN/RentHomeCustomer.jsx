import React from 'react'
import SectionCustomer from './Customer/sectionCustomer';
import axios from 'axios';
import { useEffect,useState,useRef } from 'react';
const RentHomeCustomer = () => {
  const inputValue=useRef(null);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
       const ArrayData=[];
      const resp = await axios.get("http://localhost:3000/Rent");
      if(input!==null){
        const filteredArray = Array.from(resp.data).filter((x) =>  x.Id===input
        );
    
        setFilteredData(filteredArray)
      }
      else{
        setFilteredData(resp.data);
      }
      
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchData();
  }, [input]);
  const searchCode=()=>{
    const Value=Number(inputValue.current.value);
    setInput(Value);
  }
  return (
    <div>
        <div>
          <div className="col-12 d-flex justify-content-center mt-5">
            <input type="number" ref={inputValue}/>
            <button className='btn btn-success' onClick={searchCode}> Axtarmaq</button>
          </div>
          <div className='d-flex flex-wrap'>
          {filteredData.map((x) => (
          <SectionCustomer
            id={x.id}
            priceHome={x.Price}
            address={x.Street}
            MetroHome={x.Metro}
            roomHome={x.Room}
            Code={x.id}
            dateTime={x.Date}
            key={x.Id} 
          />
        ))}
          
          </div>
         
        
        </div>
    </div>
  )
}

export default RentHomeCustomer