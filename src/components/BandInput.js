// Add BandInput component
import React, { Component } from 'react'

const initialState = {
  name: ''
}
class BandInput extends Component {

  constructor() {
    super();
    this.state = initialState
  }

  onInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state.name)
    this.setState(initialState)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label>
          <input name="name" type="text" onChange={this.onInputChange} value={this.state.name} />
          <button type="submit">Add Band</button>
        </form>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default BandInput
