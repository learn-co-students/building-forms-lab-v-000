import React, {Component} from 'react'

const Bands = ({ bands }) => {
  return (
    <div>
      {bands.map(band => (<li> {band.name} </li>)
      )}
    </div>
  )
}

export default Bands;
