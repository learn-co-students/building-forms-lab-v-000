// bands has to be plural change it

import React from 'react'

const Bands = props => {

  const renderBands = props.bands.map((band,id) => <li key={id}>{band.name}</li>)

    return (
    <ul>
      {renderBands}
    </ul>
  )
}

export default Bands
