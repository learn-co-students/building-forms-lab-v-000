import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import Bands from '../components/Bands.js';
import { connect } from 'react-redux';

export const addBand = band => {
  return {
    type: 'ADD_BAND',
    band: Object.assign({}, band)
  }
}

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands
    debugger;
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
 return {
   bands: state.bands
 }
}

export default connect(mapStateToProps)(BandsContainer)
