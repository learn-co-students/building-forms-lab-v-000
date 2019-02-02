import React from 'react';

const Bands = props => {

  return (
    <div>
      {props.bands.map((band, id) => <li key={id}>{band.name}</li>)}
    </div>
  )
}

export default Bands