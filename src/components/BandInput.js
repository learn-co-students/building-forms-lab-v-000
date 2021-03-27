// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  onhandleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  onhandleSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
    this.props.handleAddBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.onhandleSubmit}>
        <input 
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.onhandleChange}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
