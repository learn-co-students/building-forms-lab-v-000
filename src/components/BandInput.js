// Add BandInput component
import React, { Component } from 'react'

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
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
       <form onSubmit={this.handleOnSubmit}>
         <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
         <button type="submit">Add Band</button>
       </form>
      </div>
    )
  }
}

export default BandInput
