import React, { Component } from 'react'
import BandInput from '../components/BandInput.js'
import { connect } from 'react-redux';
import Bands from '../components/Bands.js'


class BandsContainer extends Component {


  render() {

    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}  />
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}


const mapDispatchToProps = dispatch => {
    return {
        addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
