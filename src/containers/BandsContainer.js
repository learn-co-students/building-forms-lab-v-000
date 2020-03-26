import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Band from '../components/Band';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  // updateBand = name => {
  //   this.props.addBand(name)
  // };

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Band bands={this.props.bands} />
        // <ul>
        //   {this.props.bands.map(band => <li>{band}</li>)}
        // </ul>


      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({type: 'ADD_BAND', band})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
