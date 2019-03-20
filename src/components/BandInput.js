// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    text: ""
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.add(this.state.text)
    this.state.text = ""
  }

  handleChange = (event) => {
    this.setState({text: event.target.value})
    
  }
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} placeholder="Band Name" onChange={ this.handleChange}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
