import React from 'react'
 
const Bands = props => {
  const bandList = props.bands.map((band, id) => {
    return (
      <li key={id}>{band.name}</li>
    );
  });

  return (
    <ul>
      {bandList}
    </ul>
  );
};
 
export default Bands;