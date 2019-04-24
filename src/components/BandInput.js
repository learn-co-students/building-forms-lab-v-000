import React, { Component } from 'react';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    // let newBand = this.getState();
    // this.props.manageBand(this.props.bands, { type: 'ADD_BAND', band: newBand});
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
