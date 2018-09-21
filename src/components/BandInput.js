// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  state = {
    name: ''
  }
  
  handleSubmit = (e) =>  {
     e.preventDefault() 
     this.props.addBand(this.state.name)
     this.setState({name: ''})
}

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' onChange={ (e) => this.setState({name: e.target.value})} value={this.state.name}/>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput
