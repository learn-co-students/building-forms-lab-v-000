import React from 'react'

const Band = props => {
  return (
    <li key={props.id}>{props.band.name}</li>
  )
}

export default Band;
