import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'
import Bands from '../components/Bands.js'


class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>      
      </div>
    )
  }
}



const mapStateToProps = state => ({
  bands: state.bands
})

// const mapDispatcherToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
// })

const mapDispatchToProps = dispatch => ({
  addBand: newBand => {
    dispatch({ type: 'ADD_BAND', newBand})
  }
})

export default  connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
