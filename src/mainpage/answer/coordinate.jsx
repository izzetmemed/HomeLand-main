import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';

const Coordinate = ({x,y,CanClick,Xvalue,Yvalue}) => {
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current).setView([Number(Xvalue)? Number(Xvalue): 40.4093,Number(Yvalue)? Number(Yvalue):  49.8671], 13);

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19,
                attribution: '© OpenStreetMap contributors'
            }).addTo(mapRef.current);

            const defaultIcon = L.icon({
                iconUrl: markerIcon,
                shadowUrl: markerIconShadow,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                shadowSize: [41, 41]
            });

            const marker = L.marker([Number(Xvalue)? Number(Xvalue): 40.4093,Number(Yvalue)? Number(Yvalue):  49.8671], { icon: defaultIcon }).addTo(mapRef.current);
            if(CanClick){
              mapRef.current.on('click', function(e) {
                marker.setLatLng(e.latlng);
                x(e.latlng.lat.toString());
                y(e.latlng.lng.toString());
            });
            }
         
        }

        return () => {
            if (mapRef.current) {
                mapRef.current.off();
                mapRef.current.remove();
                mapRef.current = null;
            }
        };
    }, []);

    return (
     <>
     <div className='px-4'>
      
          <div ref={mapContainerRef}  style={{ height: '400px', width: '100%' }}></div>
       
     </div>
   
     </>
      
     
    )
};

export default Coordinate;

 