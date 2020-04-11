// Add BandInput component
import React, { Component } from "react";

const defaultState = { name: "" };

class BandInput extends Component {
  state = { ...defaultState };

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ ...defaultState });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="name" onChange={this.handleChange} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BandInput;
