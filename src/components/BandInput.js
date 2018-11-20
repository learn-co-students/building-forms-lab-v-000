// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  constructor() {
    super();

    this.state = {
      name: ''
    }
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    // clear form input once form has been submitted
    this.setState({
      name: '',
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <label>Add Band</label>
          <input
          type="text"
          onChange={ (event) => this.handleChange(event) } value={ this.state.text }/>

          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default BandInput;
