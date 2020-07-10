// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Band: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}/>
          </p>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
