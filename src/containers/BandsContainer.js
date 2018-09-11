
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Bands from '../components/Bands';
import BandInput from '../components/BandInput';
class BandsContainer extends Component {
  render() {
    return(
      <div>

        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => {
    dispatch({type: 'ADD_BAND', payload: formData})
  }
})
 const mapStateToProps = state => {
  return {bands: state.bands}
}
 export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
