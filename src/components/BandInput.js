// Add BandInput component
import React, { Component } from 'react';

class BandInput extends Component {

  state= {
    name:''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name:''
    });
  }

  render() {
    // console.log(this.props.addBand)
    return(
      <div>
    

        <form onSubmit={this.handleSubmit}>
          
          <input type="text" name="name" id="name" onChange={this.handleChange} value={this.state.name}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
