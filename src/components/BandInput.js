// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };

  // Handle Updating Component State
  handleOnChange = event => {
    this.setState({
      // [event.target.name]: event.target.value
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);

  }






  render() {
    return(
      <div>
        <form onSubmit={event => this.handleOnSubmit(event)}>
          <label>
            Band Input:
            <input
              name="text"
              type="text"
              onChange={this.handleOnChange}
            />
            <button type="submit"> Submit </button>
          </label>
        </form>
      </div>
    )
  }
}

export default BandInput
