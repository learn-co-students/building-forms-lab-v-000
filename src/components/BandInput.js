import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
    this.setState({
      text: ''
    })
  }

  handleOnChange = (e) => {
    this.setState({
      text: e.target.value
    })

  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
       <input type="text" onChange={this.handleOnChange} value={this.state.text}/>
       <input type="submit"/>
       {this.state.text}
      </form>
    );
  }
};

export default BandInput;
