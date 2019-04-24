import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' });
  }

  handleOnChange = event => {
    this.setState({ name: event.target.value})
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleOnChange} value={this.state.name}/>
          <input type="submit"/>
        </form>
      </div>
    )
  };
}

export default BandInput;
