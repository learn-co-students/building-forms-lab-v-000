import React, { Component } from "react";
import BandsInput from "../components/BandInput";
import { connect } from "react-redux";
import { addBand } from "../actions/addBand";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandsInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band) => (
            <li key={band.name}>{band.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps, { addBand })(BandsContainer);
