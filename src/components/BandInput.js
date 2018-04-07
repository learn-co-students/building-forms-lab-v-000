import React, { Component } from 'react';

class BandInput extends Component {
  constructor () {
    super();
    this.state = {
      text: ''
    }
  }

  handleSubmit (event) {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({
      text: ''
    });
  }

  handleInputChange (event) {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label htmlFor="addBand">Add Band: </label>
            <input id="addBand" type="text" value={this.state.text} onChange={(event) => this.handleInputChange(event)}/>
          </p>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
