import React from 'react';

const Bands = props => {
  console.log('in Bands', props)
  return (
    <div>
      <li>{props.band.name}</li>
    </div>
  )
}

export default Bands;















