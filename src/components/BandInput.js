// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
    constructor(){
        super()
        this.state ={
            name: ""
        }
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        this.props.addBand(this.state)
        this.setState({name: ''})
    }

    handleChange = (event) => this.setState({name: event.target.value})

  render() {
      return(
            <form onSubmit={this.handleSubmit}>
              <label>Band Name: </label>
              <input type="text" onChange={this.handleChange} value={this.state.name}/>
              <input type="submit"/>
            </form>
      )
  }
}

export default BandInput
