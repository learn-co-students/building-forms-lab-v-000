import React from 'react'

const Bands = ({bands}) =>
<ul>{bands.map((band, index) => <li key={index}>{band}</li>)}</ul>

export default Bands
