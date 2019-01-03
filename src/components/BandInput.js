// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
      Band Name
      <form onSubmit={this.handleSubmit.bind(this)} >
        <input
        value={this.state.name}
        type='text'
        onChange={this.handleChange.bind(this)} />
        <input type='submit' />
      </form>
      </div>
    )
  }
}

export default BandInput
