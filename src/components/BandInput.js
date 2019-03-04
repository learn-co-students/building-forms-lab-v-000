// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state={
      name:''
    }
  }

  handleChange = event => {
    this.setState({name: event.target.value})
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addband(this.state)
    this.setState({name: ''})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
