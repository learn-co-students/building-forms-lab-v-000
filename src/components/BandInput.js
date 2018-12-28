import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name}/><br></br>
          <input type="submit" value="add band"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
