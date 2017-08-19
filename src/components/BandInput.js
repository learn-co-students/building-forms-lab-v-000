import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    //console.log("CONSOLE LOG " + this.props.store.getState())
    //debugger
    //console.log("hello")
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({
      text: ''
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name: </label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
