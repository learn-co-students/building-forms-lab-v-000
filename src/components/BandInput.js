// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {name: ""}

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("hit handleSubmit", event)
    this.props.addBand(this.state)
    
    console.log("after dispatch", this.props.store)
    this.setState({name: ""})
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
        <input name="name" type="text" onChange={this.handleChange} value={this.state.name}/>
        <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    )
  }
}

export default BandInput
