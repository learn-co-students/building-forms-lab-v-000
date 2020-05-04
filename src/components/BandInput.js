// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
    }

    handleOnChange = event => {
      this.setState({name: event.target.value})
    }

    handleOnSubmit = event => {
      event.preventDefault()
         this.props.addBand(this.state)
    }

  render() {
    return(
      <div>
      <form onSubmit={this.handleOnSubmit}>
        Band Name: <input type="text" value={this.state.name} onChange={this.handleOnChange}></input>
        <button type="submit"> Submit </button>
      </form>
      </div>
    )
  }
}

export default BandInput
