import React, { useEffect, useState } from 'react';

const MapComponent = () => {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setCoordinates({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting user coordinates:', error);
      }
    );
  }, []); 

  if (coordinates.latitude === null || coordinates.longitude === null) {
    return <div>Loading...</div>;
  }

  const googleMapUrl = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d0.1!2d${coordinates.longitude}!3d${coordinates.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1691157988826`;

  return (
    <div className="google-map ">
      <iframe
        className=""
        src={googleMapUrl}
        style={{ width: '100%', height: '400px', border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
