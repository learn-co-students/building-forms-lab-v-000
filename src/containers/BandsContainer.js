import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import BandList from '../components/BandList';

class BandsContainer extends Component {

  render() {
    return(
      <div>
        <h1>Bands Container</h1>
        <h2>Enter New Band: </h2>
        <BandInput addBand={this.props.addBand}/>
        <BandList bands={this.props.bands}/>
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
