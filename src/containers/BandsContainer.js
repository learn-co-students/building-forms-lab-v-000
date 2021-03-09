import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'
import Bands from '../components/Bands.js'


class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map((band, index) => <Bands name={band.name} key={index} />)
    
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        {bands}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  bands: state.bands
})

const mapDispatchToProps = dispatch => ({
  addBand: newBand => {
    dispatch({ type: 'ADD_BAND', newBand})
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
