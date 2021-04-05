// Add BandInput component
import React, { Component } from 'react';


class BandInput extends Component {

  state = {name: ''}

  
  handleOnChange = event => {
    // console.log(event.target.value)
    this.setState(
      {name: event.target.value}
    );
    // console.log(this.state)
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
  }
  

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name</label>
          <input type="text" name="name" onChange={(event) => this.handleOnChange(event)} value={this.state.name}/>
          <button type="submit">Add Band</button>
        </form>
      </div>
    );
  } d
};


export default BandInput
