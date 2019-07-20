// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: '',
  };

  // we'll create a function to handle our changes
  // we'll avoid the arrow function for this one
  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  };

  // to update the store, we'll utilize a submit function
  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  };

  // we need to render a form to implement our changes above
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band:</label>
          <input type="text"
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}
          />
          <input type="submit" />
        </form>
      </div>
    );
  };
};

export default BandInput;
