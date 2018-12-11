import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux'

// You will need to write the BandsContainer component.
// This component should act as your connection to the Redux store.
// It should be a child of the App component.

class BandsContainer extends Component {
  render() {
    const renderBands = () => this.props.bands.map((band, id) => <Band key={id} name={band.name} />)
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        {renderBands()}
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
    addBand: band => dispatch({ type: "ADD_BAND", payload: band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
