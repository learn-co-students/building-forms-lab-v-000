import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  render() {

    return (
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map((band,index) =>
          <li key={index}>{band.name}</li>)}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData
    })
  }
}

const mapStateToProps = state => {
  return { bands: state.bands }
}


export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
