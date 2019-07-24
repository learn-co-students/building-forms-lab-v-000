// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name:''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // action to update state
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label> Band Input </label>
          <input
            type="text"
            name="name"
            onChange={(event) => this.handleChange(event)}
            value={this.state.name} />
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
