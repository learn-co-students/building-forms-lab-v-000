import React from 'react'

const Band = (props) => {
  const bands = props.bands.map((band, index) => 
    <li key={index}>{band.name} </li> ); 
    
  return (
    <div>
     {bands}
    </div>
  )
  
};

export default Band;
