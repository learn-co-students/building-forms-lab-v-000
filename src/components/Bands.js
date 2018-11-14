import React from 'react'

const Bands = props => {
  const bandsTotal = props.bands.map(x => <li>{x.name}</li>)
  return (<ul>{bandsTotal}</ul>)
}

export default Bands 
