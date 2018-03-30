import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super()

    this.state = { text: '' }
  }

  handleKeyDown(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
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
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" value={this.state.text} onChange={e => this.handleKeyDown(e)} />
          <button type="submit" onSubmit={this.handleSubmit}>Add band</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
