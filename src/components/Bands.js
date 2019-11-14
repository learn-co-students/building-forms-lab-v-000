import React from 'react';

const Bands = props => {
  const bands = props.bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });
debugger; 
  return (
    <div>
      {bands}
    </div>
  );

};

export default Bands;
