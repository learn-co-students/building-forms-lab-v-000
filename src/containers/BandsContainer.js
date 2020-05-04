import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    let bands = this.props.bands.map((band, index) => <li key={index}>{band.name}</li>);
    return(
      <div>
      <BandInput addBand={this.props.addBand}/>
      {bands}
      </div>
      // pass addband
    )
  }
}

const mapStateToProps = state => {
  return{
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({
      type: 'ADD_BAND', name: formData
    })
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
