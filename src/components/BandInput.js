import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()

    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    let val = e.target.value;

    this.setState({
      text: val
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.store.dispatch({ type: 'ADD_BAND', band: this.state.text })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
