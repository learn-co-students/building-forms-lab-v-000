import React, { Component } from "react";
import BandInput from "../components/BandInput";
import Bands from "../components/Bands";
import { connect } from "react-redux";
import { addBand } from "../actions/addBand";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <Bands bands={this.props.bands} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state, "hi");
  return {
    bands: state.bands
  };
};

export default connect(
  mapStateToProps,
  { addBand }
)(BandsContainer);
