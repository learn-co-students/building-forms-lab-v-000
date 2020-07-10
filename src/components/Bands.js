// Map over the bands received from Redux and return each band as a list item
import React from "react"

const Bands = props => {
  const bands = props.bands.map((band, index) => {
  		return (band.name !== "" ? <li key={index}>{band.name}</li> : null)
  	})

  return (
    <div>
      {bands}
    </div>
  )

}

export default Bands