// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandInput extends Component {
    constructor() {
  super()
  this.state = {
    name: ""
  }
  }
  handleOnChange = event => {
  this.setState({
    name: event.target.value
  })
  }
  handleSubmit = event => {
  event.preventDefault()
  this.props.addBand(this.state)
  this.setState({
    name: ""
  })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
