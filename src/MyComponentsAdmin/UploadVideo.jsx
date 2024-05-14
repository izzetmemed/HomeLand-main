import React, { useState,useRef } from 'react';
import Scroll from '../MyComponents/Scroll';
import { useParams } from "react-router-dom";
import FetchUpdateImg from "../MyComponents/FetchUpdateImg";
const UploadVideo = () => {
    Scroll();
    const { id } = useParams();
  const [videoUrl, setVideoUrl] = useState('');
  const [video, setVideo] = useState();
  const fileInputRef = useRef(null);
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const Url = URL.createObjectURL(file)
    setVideoUrl(Url);
    setVideo(file);
  };
  const triggerFileInput = () => {
    fileInputRef.current.click();
  };
  const Upload = () => {
    let formData = new FormData();
      formData.append(`video`, video);
    FetchUpdateImg(formData,"SellImg/Video",id);
    window.history.back();
  };
  return (
    <div className='d-flex flex-column justify-content-center align-items-center mt-5'>
         <div className="custom-file-input  mb-5" onClick={triggerFileInput}>
            Vidio əlavə etmək.
          </div>
          <input
            type="file"
            onChange={handleFileChange} 
            className="filetype"
            name="videoFile" accept="video/*"
            ref={fileInputRef}
            multiple
            style={{ display: "none" }}
          />
      {videoUrl && (
        <><video controls controlsList="nodownload" width="640" height="360">
          <source src={videoUrl} type="video/mp4" />
        </video>
        <button onClick={Upload} className='mt-4 custom-file-input'>Yükləmək</button>
        </>
      )}
     
    </div>
  );
};

export default UploadVideo;
