import React from 'react';

const Bands = props => {
  const bands = props.bands

  return (
    <ul>
      {bands.map((band,index) => <li key={index}>{band.name}</li>)}
    </ul>
  )
}

export default Bands;
