import React, { Component } from 'react'

const Bands = props => {
  const renderBandNames = props.bands.map((band, id) => <li key={id}>{band.name}</li>)
  return (<div>
    {renderBandNames}
  </div>)
}

export default Bands
