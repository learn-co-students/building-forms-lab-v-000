import React, { Component } from 'react';
// since this is the container for our bands, we need to import what we need from redux and our components
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    );
  };
};

// beyond the simple importing and rendering we do above, we need to be sure to update our props and export them accordingly
const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => ({
  addBand: band => dispatch({type: 'ADD_Band', band})
});

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
