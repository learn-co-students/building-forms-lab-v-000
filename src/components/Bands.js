import React, { Component } from 'react'

const Bands = props => {
    const bands = props.bands.map((band, i) => (
        <li key={i}>{band.name}</li>
    ))
    return (<div><ul style={{ listStyleType: "none" }}>{bands}</ul></div>)
}

export default Bands;