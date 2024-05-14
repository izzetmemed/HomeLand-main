import React from "react";

const VideoSection = ({ videoUrl }) => {
    var cloudinary=`https://res.cloudinary.com/dmttplmw7/video/upload/v1234567890/${videoUrl}`
  return (
    <>
      <video controls controlsList="nodownload" className="col-12 mt-2 px-3 h-100">
        <source src={cloudinary} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoSection;
