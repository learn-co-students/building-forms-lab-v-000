// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ""
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
      name: ""
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>
            Band Name:
            <input type="text" id="band-name" value={this.state.name} onChange={this.handleOnChange}/>
          </label>
            <br/>
            <input type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
