// Add BandInput component
import React, { Component } from "react";
import { connect } from "react-redux";
import { addBand } from "../actions/addBand";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    );
  }
}

export default connect(
  null,
  { addBand }
)(BandInput);
