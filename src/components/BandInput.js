// Add BandInput component
import React, { Component } from "react";

class BandInput extends Component {
  state = {
    name: ""
  };

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: "" });
  };

  render() {
    return (
      <div>
        <label>Add a Band:</label>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={event => this.handleChange(event)}
            value={this.state.text}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
