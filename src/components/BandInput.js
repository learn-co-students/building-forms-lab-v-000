// Add BandInput component
import React, { Component } from 'react'
import connect from 'react-redux'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch( { action: 'ADD_BAND', payload: this.state})
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit} >
          <label>Name: </label>
          <input type="text" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default connect()(BandInput);
