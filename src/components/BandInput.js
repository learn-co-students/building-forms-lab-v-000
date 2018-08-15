// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(){
    super()
    this.state={
      name: ""
    }
  }
  
  
  handleChange=(event)=>{
    //Gotta use arrow function to keep 'this' bound to the component
    this.setState({
      name: event.target.value,
    })
  }
  
  handleSubmit=(event)=>{
    event.preventDefault();
    this.props.addBand(this.state)
  }
  
  
  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="band-name" value={this.state.name} onChange={this.handleChange}></input>
          <input type="submit"></input>
        </form>
      </div>
    )
  }
}




export default BandInput
