import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {text: ''}
  }

  _handleInputValueChange(event) {
    this.setState({text: event.target.value});
  }

  _handleSubmit(event) {
    event.preventDefault();

    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })

    this.setState({text: ''})
  }

  render() {
    return (
      <div>
        bands component
        <form onSubmit={e => this._handleSubmit(e)}>
          <input onChange={e => this._handleInputValueChange(e)} value={this.state.text}></input>
          <button type="submit" value="Submit"></button>
        </form>
      </div>
    );
  }
};

export default BandInput;
