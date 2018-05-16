import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value,
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      band: this.state.text,
      type: 'ADD_BAND',
    });
    this.setState({
      text: ''
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band</label>
          <input value={this.state.text} type='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default BandInput;
