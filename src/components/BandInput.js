import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(ev) {
    this.setState({
      text: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <label>Band Name: </label>
          <input
            type="text"
            onChange={(ev) => this.handleChange(ev)}
            value={this.state.text} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
