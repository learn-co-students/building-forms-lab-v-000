import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();

    this.state = {
      text: ''
    }
  }

  handleKeydown(event) {
    this.setState({
      text: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({  //just to reset react form
    text: ''
  });
}

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input type="text" value={this.state.text} onChange={(event) => this.handleKeydown(event)} />
        <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
