// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.AddBand(this.state)
    this.setState({
      name: ""
    })
  }

  render() {
    return(
      <div>
        Add New Band:
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.name}/>
          <input type="submit"/>

        </form>
      </div>
    )
  }
}

export default BandInput
