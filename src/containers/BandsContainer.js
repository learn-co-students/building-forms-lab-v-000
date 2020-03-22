import React, { Component } from 'react';
import {connect} from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  
  addBand = (band) => {
    this.props.dispatch({type: 'ADD_BAND', band})
  }
  
  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.addBand} />
        <ul>{this.props.bands.map(band => <li>{band.name}</li>)}</ul>
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
