import React from 'react'

const Band = props => {
  const band = props.bands.map((band, index) => {
  return
    <li key={index}>{band.name}</li>
  );
};

export default Band;
