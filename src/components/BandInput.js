// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { manageTodo } from '../reducers/manageBand'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name: </label>
          <input type="text" onChange={this.handleOnChange} value={this.state.name} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
