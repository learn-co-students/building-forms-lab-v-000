import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add a band</label>
          <input type="text" onChange={this.handleChange} value={this.state.band}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
