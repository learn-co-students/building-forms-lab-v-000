import React, { Component } from 'react'
import BandInput from "../components/BandInput"
import Bands from "../components/Bands"
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div className="bands-container">
        <BandInput addBand={this.props.addBand} />
        <h2>Your Bands</h2>
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })

const enhance = connect(mapStateToProps, mapDispatchToProps)

export default enhance(BandsContainer)
