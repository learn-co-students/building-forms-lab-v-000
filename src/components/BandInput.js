import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = { text: '' }
  }

  handleChange(ev) {
    this.setState({ text: ev.target.value });
  }

  handleSubmit(ev) {
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(ev) => this.handleSubmit(ev)}>
          <input type="text"
            value={this.state.text}
            onChange={(ev) => this.handleChange(ev)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
