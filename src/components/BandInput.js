import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} />
          <input type="submit" />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
