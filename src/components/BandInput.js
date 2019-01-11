// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    console.log(this.state)
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput;
