import React, { Component } from 'react'

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
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band</label>
          <p><input type="text" value={this.state.name} onChange={this.handleChange} /></p>
        <p><input type="submit" /></p>
        </form>
      </div>
    )
  }
}

export default BandInput
