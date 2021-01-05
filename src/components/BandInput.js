// Add BandInput component
// Child of BandsContainer
// Form with a text input and submit button
import React, { Component } from 'react'

class BandInput extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      name: ''
    }
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
          <label>Band Name: </label>
          <input type="text" value={this.state.name} onChange={this.handleChange} />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
