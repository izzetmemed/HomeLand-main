
import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIconShadow from 'leaflet/dist/images/marker-shadow.png';
import {useNavigate} from 'react-router-dom';

const MapSearch = ({Array ,Rent,Sell,Obyekt}) => {
    var nav=useNavigate();
    var StringParse;
    if(Array.length>0){
         StringParse = Array.map((jsonString) => JSON.parse(jsonString));
    }
    
    const mapRef = useRef(null);
    const mapContainerRef = useRef(null);
    useEffect(() => {
        if (!mapRef.current) {
            mapRef.current = L.map(mapContainerRef.current).setView([ 40.4093, 49.8671], 13);

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
            if(Array.length>0){
                for (let index = 0; index < Array.length; index++) {
                     const marker = L.marker([Number(StringParse[index].CoordinateX)? Number(StringParse[index].CoordinateX): 40.4093,Number(StringParse[index].CoordinateY)? Number(StringParse[index].CoordinateY):  49.8671], { icon: defaultIcon }).addTo(mapRef.current);
                     marker.on('click', () => {
                        if(Rent){
                            nav(`/Kart/${StringParse[index].Id}`);
                        }else if(Sell){
                            nav(`/Sell/Kart/${StringParse[index].Id}`);
                        }else if(Obyekt){
                            nav(`/Obyekt/Kart/${StringParse[index].Id}`);
                        } 
                    });
                }
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
}

export default MapSearch