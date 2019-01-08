import React from 'react';

const Band = props => {

  const bands = props.bands.map(function(band, index){

    return (
      <li key={band.index}>{band.name}</li>
    );
  })

  return(
    <div>
    {bands}
    </div>
  )

};
export default Band;
