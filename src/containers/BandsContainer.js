import React, { Component } from "react";
import { connect } from "react-redux";
import { addBand } from "../actions/band";
import BandInput from "../components/BandInput";

class BandsContainer extends Component {
  render() {
    return (
      <div>
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map((band, idx) => (
            <li key={idx}>{band.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ bands }) => ({ bands });
export default connect(mapStateToProps, { addBand })(BandsContainer);
