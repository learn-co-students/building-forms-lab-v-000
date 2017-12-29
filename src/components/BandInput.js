import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ''
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      text: value
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="addTodo">Add Todo</label>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <input type="submit" />
      </form>
    );
  }
}

export default BandInput;
