import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Section from '../section';
import Search from '../search';
import axios from 'axios';

const Cards = () => {

  const [filteredData, setFilteredData] = useState([]);
 
 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get("http://localhost:3000/Rent");
        const filtered = resp.data;
        // const filtered = resp.data.filter((x) => selectedIds.includes(x.Metro));
        setFilteredData(filtered);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [filteredData]);

  return (
    <div>
      <Search />
      <div className='d-flex flex-wrap'>
        {filteredData.map((x) => (
          <Section
            id={x.id}
            type={"rentHome"}
            priceHome={x.Price}
            address={x.Street}
            MetroHome={x.Metro}
            Items={x.Furniture}
            roomHome={x.Room}
            WhoCanTake={x.WhoCan}
            measureHome={x.Area}
            dateTime={x.Date}
            key={x.Id} 
          />
        ))}
      </div>
      <Outlet />
    </div>
  );
};

export default Cards;
