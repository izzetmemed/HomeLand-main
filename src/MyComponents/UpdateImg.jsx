import { useState, useRef, useEffect } from "react";
import React from "react";
import TurnImgIn from "./TurnImgIn";
import FetchUpdateImg from "./FetchUpdateImg";
import { useParams } from "react-router-dom";
import Scroll from "./Scroll";
const UpdateImg = ({Kind}) => {
    Scroll()
    const { id } = useParams();
  const fileInputRef = useRef(null);
  const [imagesFile, setImagesFile] = useState([]);
  const [images, setImages] = useState([]);
  var [keepingImgSource, setkeepingImgSource] = useState([]);
  useEffect(() => {
    setkeepingImgSource(images);
  }, [images]);
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const onImageChange = (event) => {
    if (event.target.files) {
      const selectedImages = Array.from(event.target.files).slice(0, 10);
      const newImageUrls = selectedImages.map((image) =>
        URL.createObjectURL(image)
      );
      if (images.length > 9) {
        return;
      }
      setImages((prevImages) => [...prevImages, ...newImageUrls]);
      selectedImages.forEach(x=>{
        setImagesFile((prevImages) => [...prevImages, x]);
      })
    }
  };
  const imgFunc = () => {
    let formData = new FormData();
    for (let i = 0; i < imagesFile.length; i++) {
      formData.append(`image`, imagesFile[i]);
    }
    FetchUpdateImg(formData,Kind,id);
    window.history.back();
  };
  return (
    <>
      <div>
        <div className="d-flex flex-column align-items-center mt-3">
         
          <div className="custom-file-input" onClick={triggerFileInput}>
            Şəkil əlavə etmək.
          </div>
          <input
            type="file"
            onChange={onImageChange}
            className="filetype"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
          />
          <div className="mt-4">
            <p>Yüklədiyiniz şəkil sayı: {images.length}</p>
          </div>
        </div>
      </div>
      <div>
        <div className=" col-12 p-2 mt-4 ps-2 ">
          <div className="answer-images-rent shadowHomeColor">
            <div className="overflow-hidden">
              <TurnImgIn keepingImgSource={keepingImgSource} Counter={true} />
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center col-12 mb-5">
        <div className=" mt-5">
                  <button
                    className="btn btn-mycolor pe-5 ps-5"
                    onClick={imgFunc}
                  >
                    Şəkil yükləmək
                  </button>
                </div>
        </div>
        
      </div>
    </>
  );
};

export default UpdateImg;
