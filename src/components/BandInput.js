// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ""
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    });
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
