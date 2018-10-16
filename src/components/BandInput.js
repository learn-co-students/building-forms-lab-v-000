import React, { Component } from 'react'

// You will need to write the BandInput component as a child of BandsContainer. The component
// should have a form with a text input and submit button. We would like to update the
// component's state each time the user types a new character in the input. stored as
// this.state.name. We will only update the Redux store's state when the user hits
// the submit button.

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
