import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  }

  handleInput = event => {
    this.setState({name: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input 
          className="name" 
          type="text" 
          value={this.state.name}
          onChange={this.handleInput} />
          <input 
          type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
