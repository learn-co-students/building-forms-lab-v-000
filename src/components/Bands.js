import React from 'react'

const Bands = ({ bands }) => {
    debugger
    const allbands = bands.map((band, index) => {
      return <li key={index}>{band.name}</li>;
    });
  
    return (
      <div>
        {allbands}
      </div>
    );
  
  };

export default Bands