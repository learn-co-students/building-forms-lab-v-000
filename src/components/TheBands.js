import React from 'react';

 const TheBands = ({ bands }) => {

   const renderBands = bands.map((band) => {
    return <li>{band.name}</li>;
  });

   return (
    <div>
      {renderBands}
    </div>
  )
}

 export default TheBands;