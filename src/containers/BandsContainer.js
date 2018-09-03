import React, { Component } from 'react'
import { connect } from 'react-redux';
import BandInput from '../components/BandInput';
import Band from '../components/Band';

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <Band key={id} band={band} />)

  render() {
    debugger;
    return(
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>{this.renderBands()}</ul>
      </div>
    );
  };
};

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({ type: "ADD_BAND", payload: band })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
