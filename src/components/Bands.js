import React from 'react'
 const Bands = ({bands})=>
  <ul>{bands.map((band, id) => <li key={id}> {band.name} </li>)}</ul>
 export default Bands
