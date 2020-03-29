import React, { Component } from 'react'
import BandInput from '../components/BandInput'
import {connect} from 'react-redux';

class BandsContainer extends Component {

  addBand = (band) => {
    this.props.dispatch({type: 'ADD_BAND', band})
  }

  render() {
    return(
      <div>
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
