// Add BandInput component
import React, { Component } from 'react'

// You will need to write the BandInput component as a child of BandsContainer.
// The component should have a form with a text input and submit button.
// We would like to update the component's state each time the user types a new character in the input. 
// Stored as this.state.name. We will only update the Redux store's state when the user hits the submit button.

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
    return (
      <div>
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <input
            type="text"
            placeholder="Bandname"
            name="name"
            value={this.state.name}
            onChange={e => this.handleFormChange(e)}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput