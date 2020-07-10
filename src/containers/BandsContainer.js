  
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput';
import TheBands from '../components/TheBands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <h1>Bands Container</h1>
        <p>Enter a Band: </p>
        <BandInput addBand={this.props.addBand}/>
        <TheBands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

 const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: 'ADD_BAND', band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
