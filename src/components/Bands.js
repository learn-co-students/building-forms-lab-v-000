import React from 'react';

const Bands = props => {
  return(
    <ul>
    {props.bands.map(band => <li>{band.name}</li> )}
    </ul>
  );
};

export default Bands;
