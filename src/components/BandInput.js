// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

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
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>Name: </label>
          <input type="text" onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
