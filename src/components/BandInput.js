import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.store.dispatch({ type: 'ADD_BAND', band: this.state.text})
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Band Name </label>
        <input value={this.state.text} type='text' onChange={(event) => this.handleChange(event)}/> <br />
        <input type='submit' />
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
