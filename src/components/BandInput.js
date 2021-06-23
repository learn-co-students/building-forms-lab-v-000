// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  };
 
  handleSubmit = event => {
    event.preventDefault();
    this.setState(
    this.props.addBand(this.state)
    )
  };

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add Band</label>
          <input type="name" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}


 
export default BandInput;
