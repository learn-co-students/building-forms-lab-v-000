// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = { name: '' }

  handleOnChange = event => {
    const { value, name } = event.target 
    this.setState({
      [name]: value 
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band = {...this.state} 
    this.props.addBand(band)
    this.setState({
        name: '',
      })
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input 
          type="text" 
          name="name" 
          value={this.state.name} 
          onChange={this.handleOnChange}
          />
          <button type="submit">Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput
