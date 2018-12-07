import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { addBand } from '../actions/addBand';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { bands: state.bands };
};

const mapDispatchToProps = {
    addBand: (band) => addBand(band.name)
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
