import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from './../components/BandInput';
import Band from './../components/Band'

class BandsContainer extends Component {
  render() {
    const { bands, addBand } = this.props
    return(
      <div>
        <BandInput addBand={addBand} />
        {bands.map((band, id) => (
          <Band key={id} name={band.name} />
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({ type: 'ADD_BAND', band})
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
