import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.props.bands.map(band => <li>{band.name}</li>)}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatch = dispatch => {
  return {
    addBand: (band) => dispatch({ type: 'ADD_BAND', band: band })
  }
}


export default connect(mapStateToProps, mapDispatch)(BandsContainer)
