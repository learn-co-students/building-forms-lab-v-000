import React from 'react'

const Bands = (props) => {

  const showBands = props.bands.map((band, id) => {
      return <li key={id}>{band.name}</li>
    })

  return <div>{showBands}</div>
}

export default Bands
