import React from 'react'
import "../Load/load.css"
import { useState,useEffect } from 'react';
const UpLoad = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prevCounter => {
        const newCounter = prevCounter + 1;
        console.log(newCounter); // Log the updated value
        if (newCounter > 99) {
          clearInterval(interval);
        }
        return newCounter;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);
  return (
<div className="Alert-media col-4 col-sm-2 d-flex flex-column">
      <p className="mb-1">Gözləyin:{counter}%</p>
      <p className="text-danger">Çıxmayın !!!</p>
      <div className="d-flex justify-content-center">
      <div class="loader"></div> 
      </div>
    </div>
  )
}

export default UpLoad