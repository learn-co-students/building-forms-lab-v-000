/* 
  act as your connection to the Redux store
  Any values we want to use from Redux as well as any actions we want to dispatch should be set up and available in BandsContainer so they can be passed down to other components.
*/
import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput.js'
import Band from '../components/Band.js'


class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map((band, index) => <Band name={band.name} key={index} />)
    
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
