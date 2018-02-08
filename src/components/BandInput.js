import React, { Component } from 'react';
import Bands from './Bands'

class BandInput extends Component {
  constructor() {
    super();

    this.state = {
      text: '',
    }
  }

  handleKeyChange(event) {
    this.setState({
      text: event.target.value,
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={(event) => this.handleKeyChange(event)}
            value = {this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
