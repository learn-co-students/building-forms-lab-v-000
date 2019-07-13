// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          Band Name
          <input type="text" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}

export default BandInput
