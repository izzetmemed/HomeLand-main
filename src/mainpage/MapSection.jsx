import React, { useEffect, useState } from 'react';
import FetchGetAll from '../MyComponents/FetchGetAll';
import MapSearch from './MapSearch';

const MapSection = ({link,Rent,Sell,Obyekt}) => {
    const [coordinate, setCoordinate] = useState(null);

    useEffect(() => {
        const getAll = async () => {
            try {
                // Ensure that you await the async operation
                const resp = await FetchGetAll(link);
                setCoordinate(resp.data);
            } catch (error) {
                console.error('Failed to fetch coordinates:', error);
            }
        };

        getAll();
    }, []); 


    return (
        <div>
            {coordinate ? <MapSearch Array={coordinate} Rent={Rent} Sell={Sell} Obyekt={Obyekt}/> : <div className='w-100  d-flex justify-content-center py-5'><p >Loading...</p></div>}
        </div>
    );
}

export default MapSection;
