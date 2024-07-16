import { useState, useRef } from "react";
import React from "react";
const TurnImgIn = ({ keepingImgSource, Counter }) => {
  if (!keepingImgSource) {
    keepingImgSource = [];
  }
  const [ImgSourceIndex, setImgSourceIndex] = useState(0);
  const [Block, setBlock] = useState(true);
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
  const imageRef = useRef(null);
  const [imgStyles, setImgStyles] = useState({
    height: '100%',
    width: 'auto'
  });
  const handleFullscreenToggle = () => {
    if (imageRef.current) {
      if (!document.fullscreenElement) {
        imageRef.current.requestFullscreen();
        setImgStyles({
          height: 'auto',
          width: '70%'
        });
      } else {
        document.exitFullscreen();
        setImgStyles({
          height: '100%',
          width: 'auto'
        });
      }
    }
    setBlock(!Block);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center w-100 h-100 align-items-center "
        ref={imageRef}
      >
        <div className="imgDivInside">
          <span onClick={btnRightIcon}>
            <i className="fa-solid fa-angle-left"></i>
          </span>
          <span onClick={btnLeftIcon}>
            <i className="fa-solid fa-angle-right"></i>
          </span>
        </div>
        <img
          decoding="async"
          src={
            keepingImgSource.length > 0
              ? keepingImgSource[ImgSourceIndex]
              : require("../logo.home/Logo-white.PNG")
          }
          alt="Home"
          style={imgStyles}
        />
        <span
          className={`FullScreen `}
          onClick={handleFullscreenToggle}
          style={{ display: Block ? "block" : "none" }}
        >
          <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
        </span>
        <span
          className={`FullScreen `}
          onClick={handleFullscreenToggle}
          style={{ display: Block ? "none" : "block" }}
        >
          <i class="fa-solid fa-down-left-and-up-right-to-center"></i>
        </span>
        <span
          className="CounterOnImg"
          style={{ display: Counter ? "none" : "block" }}
        >
          {Number(ImgSourceIndex) + 1 + "/" + keepingImgSource.length}
        </span>
      </div>
    </>
  );
};

export default TurnImgIn;
