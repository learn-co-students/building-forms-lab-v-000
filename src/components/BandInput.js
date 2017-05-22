import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit(ev){
    ev.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND', 
      band: this.state.text
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event) }>
          <input type="text" onChange={(event) => this.handleChange(event)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
