import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type='text' name='name' value={this.state.name} onChange={(event) => this.handleChange(event)} />
          <input type='submit' value='Submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
