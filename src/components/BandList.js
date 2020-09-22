import React, { Component } from 'react'


const BandList = (props) => {


  return (
    <div>
      <ul>
        {props.bands.map( (band, index) => {
          return (
            <li key={index}>{band.name}</li>
          )
        })}
      </ul>
    </div>
  )

}


export default BandList
