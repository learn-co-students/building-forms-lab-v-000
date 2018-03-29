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
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" onChange={(event) => this.handleChange(event)} >
          </input>
        </form>
      </div>
    );
  }
};

export default BandInput;
