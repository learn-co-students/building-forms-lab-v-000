import React from 'react';

 const Bands = props => {

   const showBands = props.bands.map((band) => {
    return <li>{band.name}</li>
  });

   return (
    <ul>
      {showBands}
    </ul>
  )
}

 export default Bands;