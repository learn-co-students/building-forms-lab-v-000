import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: ''
    });
    console.log(this.props.store.state)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input onChange={this.handleChange}/>
        <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
