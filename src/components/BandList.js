import React, { Component } from 'react';

const BandList = props => (
  <ol>
  {props.bands.map(band => (
    <li>{band.name}</li>
  ))}
</ol>
)

export default BandList;
