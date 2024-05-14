import { useState } from "react";
import React from "react";
const TurnImgIn = ({ keepingImgSource ,Counter}) => {
  if(!keepingImgSource){
    keepingImgSource=[]
  }
  const [ImgSourceIndex, setImgSourceIndex] = useState(0);
  const btnLeftIcon = () => {
    if (ImgSourceIndex < keepingImgSource.length - 1) {
      setImgSourceIndex(ImgSourceIndex + 1);
    } else {
      setImgSourceIndex(0);
    }
  };

  const btnRightIcon = () => {
    if (ImgSourceIndex > 0) {
      setImgSourceIndex(ImgSourceIndex - 1);
    } else {
      setImgSourceIndex(keepingImgSource.length - 1);
    }
  };
  return (
    <>
      <div className="imgDivInside ">
        
        <span onClick={btnRightIcon}>
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <span onClick={btnLeftIcon}>
          <i className="fa-solid fa-angle-right"></i>
        </span>
     
      </div>
      <div className="d-flex justify-content-center w-auto h-100">
        <img
        decoding="async"
          src={
            keepingImgSource.length > 0
              ? keepingImgSource[ImgSourceIndex]
              : require("../logo.home/Logo-white.PNG")
          }
          alt=""
          className="w-100"
        />
        <span className="CounterOnImg" style={{ display: Counter ? "none" : "block" }}>
        {(Number(ImgSourceIndex) + 1) + "/" + (keepingImgSource.length)}
        </span>
      </div>
    </>
  );
};

export default TurnImgIn;
