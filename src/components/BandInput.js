import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({
      text: ''
    });
  };

  handleOnChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <label>band: </label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleOnChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default BandInput;
