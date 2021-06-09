import React from 'react'

const Band = ({band, key})=><li key={key}>{band.name}</li>

export default Band;