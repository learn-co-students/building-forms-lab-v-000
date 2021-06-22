import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';
import Band from '../components/Band';


class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Band bands={this.props.bands} />
      </div>
    )
  }
}

const mapStatetoProps = state => {
  return { bands: state.bands };
}

const mapDispatchtoProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", band })
  };
}


export default connect(mapStatetoProps, mapDispatchtoProps)(BandsContainer);