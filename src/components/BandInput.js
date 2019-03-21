// Add BandInput component
import React, { Component } from 'react';
import {connect} from 'react-redux';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      name: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='band' onChange={this.handleOnChange} value={this.state.name}></input>
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default BandInput;
