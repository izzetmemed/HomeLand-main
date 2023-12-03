import React from 'react';
import ReactBingmaps  from "../../../node_modules/react-bingmaps/lib/components/ReactBingmaps";

const Coordinate = () => {
  const bingMapKey = 'AlUU5d_9b-VeQwUMtzD6ouh7JsTEYn7DK2J_3pjH3P5ABXxkD7gJPgLXWlY9B731'; 
  const centerCoordinates = [40.4039619, 49.864193]; 
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <ReactBingmaps
        bingMapsKey={bingMapKey}
        center={centerCoordinates}
        zoom={12}
      />
    </div>
  );
};

export default Coordinate;

