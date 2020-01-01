import React, { Component } from "react";

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            <p>Band Name:</p>
          </label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default BandInput;
