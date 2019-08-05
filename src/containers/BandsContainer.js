import React, { Component } from 'react'
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map(band => {
      <li>{band.name}</li>
    })
    return(
      <div>
       <BandInput/>
       <ul> {bands} </ul>
      
      </div>
    )
  }
}

export default BandsContainer
