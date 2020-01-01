import React, { Component } from "react";
import BandInput from "../components/BandInput";
import { connect } from "react-redux";

class BandsContainer extends Component {
  render() {
    const { addBand } = this.props;
    return (
      <div>
        <div>
          <BandInput addBand={addBand} />
        </div>
        <div>
          <ul>
            {this.props.bands.map((band, index) => (
              <li key={`"${index}"`}>{band.name}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addBand: band =>
      dispatch({
        type: "ADD_BAND",
        band: band
      })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
