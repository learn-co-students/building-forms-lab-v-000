// Add BandInput component
import React, { Component } from 'react'
//import { connect } from 'react-redux'

class BandInput extends Component {
  state = { name: '' };


  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
   name: '',
    })
  }

 handleChange(event) {
   this.setState({
     name: event.target.value
   });
 }


  render() {
    return(
      <form onSubmit={(event) => this.handleSubmit(event)}>
        <label>Bands</label>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
        <input type="submit" />
     </form>
    )
    }
  }




export default BandInput;
