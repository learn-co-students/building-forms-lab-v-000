import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
 

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  };



  render() {
    return (
      <div>
        <p>
          <label>Enter band name here: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} />
        </p>
        <input type="submit" onClick={this.handleSubit}/>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
