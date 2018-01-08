import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
        text: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_BAND",
      band: this.state.text
    });
    this.setState({
      text: ""
    });
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  }

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.text} type="text" onChange={this.handleChange}/>
        
          <input type="submit"/>
        </form>
    );
  }
};

export default BandInput;
