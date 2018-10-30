// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {
    name: ""
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }
  
  handleChange = (event) => {
    this.setState({
    name: event.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Band Name</label>
          <input value={this.state.name} onChange={this.handleChange} type="text" name='name'/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput
