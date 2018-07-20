import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {
    this.setState({text: event.target.value}, () => console.log(this.state))
  }

  handleSubmit = () => {
    this.props.store.dispatch({
      type: 'ADD_BAND', 
      band: this.state.text,
    });

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={(event) => this.handleChange(event)}/>
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
