// Add BandInput component
import React, { Component } from 'react'
// import { connect} from 'react-redux'

class BandInput extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
   }
  
  render() {
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event) }>
          <label>Band Input</label>
          
          <input id = "name" type="text" onChange={this.handleChange} value={this.state.name}></input>
         
          <input type="submit"></input>
        </form>
        {this.state.name}
      </div>
    )
  }
}






export default  BandInput 
