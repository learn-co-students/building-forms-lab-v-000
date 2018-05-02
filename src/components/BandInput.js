import React, { Component } from 'react';

class BandInput extends Component {

  constructor () {
    super()
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: ''
    }
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input type="text" value={this.state.text} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
