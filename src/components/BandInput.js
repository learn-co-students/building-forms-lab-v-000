import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state
    });
  }

  render() {
    return (
      <div>
        <p>
          <label>Enter band name here: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} />
        </p>
        <input type="submit" onSubmit={(event) => this.handleSubmit(event)} />
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
