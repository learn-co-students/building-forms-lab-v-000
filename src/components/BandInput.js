// Add BandInput component
import React, { Component } from 'react'
// import addBand from '../containers/BandsContainer'

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" onChange={event => this.handleChange(event)} value={this.state.name} />
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
