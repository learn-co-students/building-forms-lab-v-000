import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super()

    this.state =  {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.text} onChange={this.handleChange}/>
        <button type="submit" name="button">submit</button>
      </form>
    );
  }
};

export default BandInput;
