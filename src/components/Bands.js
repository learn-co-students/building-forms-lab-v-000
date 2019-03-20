import React from 'react';

const Bands = (props) => {
  return(
    <div >{props.bands.map((band, index) => <li key={index}>{band}</li>)}</div>
  )
}
export default Bands
