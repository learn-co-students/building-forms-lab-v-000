// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addBand } from '../actions/bands'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault(); 
    const band = { ...this.state };

    this.props.addBand(band);
    this.setState({
      name: ''
    });
  }
  
  render() {
    return(
      <div>
        <h3>Add a New Band:</h3>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name:</label>
          <input type="text" value={this.state.name} onChange={this.handleOnChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
