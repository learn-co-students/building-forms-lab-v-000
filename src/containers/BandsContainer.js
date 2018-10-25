import React, { Component } from 'react'
import { connect } from 'react-redux'
import Band from './Band'
import BandInput from '../components/BandInput.js'

class BandsContainer extends Component {
  
  render() {
    return(
      <div>
      <BandInput addBand={this.props.addBand}/>
      <Band bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: (band) => dispatch({ type: 'ADD_BAND', band: band })
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
