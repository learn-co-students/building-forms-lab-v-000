// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  } 

  handleOnChange = event => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const name = this.state.name;
    debugger
    this.props.addBand(name);
    this.setState({
      name: ''
    })
  }
  
  render() {
    return(
      <div>
        <h1>Enter a Favorite Band Name</h1>
        <form onSubmit={this.handleOnSubmit}>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

export default BandInput
