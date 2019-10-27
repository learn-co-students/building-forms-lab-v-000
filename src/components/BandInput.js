import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleOnChange = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input onChange={this.handleOnChange} value={this.state.name} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default BandInput;
