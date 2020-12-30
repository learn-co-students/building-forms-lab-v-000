import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleInputChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <form onSubmit={event => this.handleSubmit(event)}>
        <input 
          type="text" 
          onChange={event => this.handleInputChange(event)}
          value={this.state.name}>
        </input>
        <button type="submit">Add Band</button>
      </form>
    )
  }
}

export default BandInput