import React from 'react'

const Bands = props => {                       //could also list {bands} instead of props
    const bands = props.bands.map((band, index) => {      //then use bands.map instead of props.bands.map
      return <li key={index}>{band.name}</li>
    })

  return (
    <div>
      {bands}
    </div>
  )
}

  export default Bands;