// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {

	state = {
     name: ''
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const newName = {...this.state};
    this.props.addBand(newName);
    this.setState(
      {
     name: ''
    });
        	console.log("hello")

  }

  render() {
    return(
      <div>
      <form onSubmit={(event) => this.handleOnSubmit(event)}>
        Band Input: <input type="input" name="input" onChange={(event) => this.handleOnChange(event)}
/>
        <input type="submit" value="Submit"/>
       </form>
      </div>
    )
  }
}


export default BandInput
