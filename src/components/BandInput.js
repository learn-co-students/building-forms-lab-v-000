// Add BandInput component
import React, { Component } from 'react'

const INITIAL_STATE = {
  name: ""
}

class BandInput extends Component {
  state = INITIAL_STATE

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState(INITIAL_STATE)
  }

  render() {
    return(
      <div className="band-input">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="band">Band Name: </label>
          <input type="text" id="band" onChange={this.handleChange} value={this.state.name}/><br />
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
