import React, { Component } from 'react';

class BandInput extends Component {

  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }


  handleInputChange(event) {
    this.setState({
      text: event.target.value
    })
  } 


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
        <input 
        type="text"
        onChange={ (event) => this.handleInputChange(event)}
        />
        <input type="submit" value="Create New Band"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
