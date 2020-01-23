// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <form onSubmit={this.handleOnSubmit}>
        <h3>Band Input</h3>
        <label>Band Name:
          <input type="text" name="band-name" onChange={this.handleOnChange}></input>
        </label>
        <input type="submit" value="Submit Band Name"></input>


      </form>
    )
  }
}

export default BandInput
