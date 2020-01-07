import React, { Component } from 'react';
import { connect } from 'react-redux';

import BandInput from '../components/BandInput';

class BandsContainer extends Component {
  renderBands = () => {
    return this.props.bands.map((band, id) => {
      return <li key={id}>{band.name}</li>;
    });
  };

  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: name => dispatch({type: 'ADD_BAND', bandName: name})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
