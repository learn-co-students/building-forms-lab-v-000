// // Add BandInput component

import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleFormChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  handleFormSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="Bandname"
            name="name"
            value={this.state.name}
            onChange={e => this.handleFormChange(e)}
          />
        <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
