import React, { Component } from 'react';

class BandInput extends Component {
// setting initial state (local state of BandInput React component)
  state = {
    name: '' // textfield in form is initially empty, hence empty string
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state); 
    this.setState({ // clearing the textfield after form submission
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Enter a band name:</label>
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange} />
          <br />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
// this.props.addBand  = action-dispatching arrow function, which accepts the band object of submitted form data, i.e.,
// the local state object: { name: string band name submitted in textfield of form }
// When the action-dispatching function is invoked upon form submission,
// the dispatch function is called with an action object argument that looks like this:
// { type: 'ADD_BAND', band: band object of submitted form data }
// The corresponding switch case statement in the manageBand reducer function will match (see reducer)