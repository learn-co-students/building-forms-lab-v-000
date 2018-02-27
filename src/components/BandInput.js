import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ""
    }
  }

  handleChange(e) {
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
      text: ""
    })
  }
  render() {
    return (
      <form onSubmit={(e => this.handleSubmit(e))} >
        <input
          type="text"
          value={this.state.text}
          onChange={(e) => this.handleChange(e)} />
        <input
          type="submit"/>
      </form>
    );
  }
};

export default BandInput;
