import React from "react";

const Share = ({Link}) => {

  const message = encodeURIComponent(`Sizin seçdiyiniz evin linki- ${Link} HomeLand`);
  var whatsappUrl = `https://wa.me/?text=${message}`;
  const handleClick = () => {
    if (!isMobileDevice()) {
        whatsappUrl = `https://web.whatsapp.com/send?phone=&text=${message}`;
    }
    window.open(whatsappUrl, '_blank');
};

const isMobileDevice = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};
  return (
    <div className="ShareOnWhatsapp">
      <button>Share</button>
      <div onClick={handleClick}></div>
      <div onClick={() => window.open('https://www.instagram.com/HomeLand.az_', '_blank')}></div>
    </div>
  );
};

export default Share;
