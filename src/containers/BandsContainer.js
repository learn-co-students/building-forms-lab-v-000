import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  render() {
    const bands = this.props.bands.map((name) => {
      return name={name}
    })

    return(
      <div>
        <BandInput />
        {bands}
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
  addBand: formData => dispatch(
    { type: 'ADD_BAND', payload: formData}
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
