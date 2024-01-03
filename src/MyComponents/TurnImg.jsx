import { useState } from "react";
import React from "react";
const TurnImg = ({ keepingImgSource, WeightTrue }) => {
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
  const weightHeight = {
    width: "100%",
    height: "100%"
  };

  const middle = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <>
      <div>
        <span onClick={btnLeftIcon}>
          <i className="fa-solid fa-angle-left"></i>
        </span>
        <span onClick={btnRightIcon}>
          <i className="fa-solid fa-angle-right"></i>
        </span>
      </div>
      <div style={WeightTrue ? middle : {}}>
        <img
          src={
            keepingImgSource.length > 0
              ? keepingImgSource[ImgSourceIndex]
              : require("../logo.home/Logo-white.PNG")
          }
          alt=""
          style={WeightTrue ? {} : weightHeight}
        />
      </div>
    </>
  );
};

export default TurnImg;
