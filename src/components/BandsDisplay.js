import React from 'react';

 const BandsDisplay = props => {
  const ListBands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

   return (
    <div>
      {ListBands}
    </div>
  );

 };

 export default BandsDisplay;
