// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'tls';

class BandInput extends Component {
  
  state = {
    name: ''
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
        name: '',
      })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' onChange={(event) => this.handleChange(event)}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default BandInput
