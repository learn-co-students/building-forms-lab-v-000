// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component{
  state = {
    name: ''
  }
  handleChange = (e) => {
    this.setState({
      name: e.target.value
    })
    console.log(this.state.name)
  }

  render(){
    return(
      <div>
        <form onSubmit={(e)=>{this.props.handleSubmit(e,this.state.name)}}>
          <input type="text" onChange={this.handleChange} name="bandName" value={this.state.name}/>
          <button type="submit">Submit Band Name</button>
        </form>
      </div>
    )
  }

  }


export default BandInput
