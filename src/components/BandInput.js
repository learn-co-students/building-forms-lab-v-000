// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="text" placeholder="band name" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    )
  }
}


export default BandInput
