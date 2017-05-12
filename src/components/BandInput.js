import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super(); 
    this.state = {
      text: '',  
    }
  }
  handleOnChange(event) {
    this.state = {
      text: event.target.value, 
    } 
  }
  handleSubmit(event) {
    event.preventDefault(); 
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text});  
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)} /> 
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
