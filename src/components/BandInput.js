import React, { Component } from 'react'
import { connect } from 'react-redux'

export default class BandInput extends Component {
  constructor () {
    super()
    this.state = {
      name: "",
    }
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: "",
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Enter band: </label>
          <input type="text" onChange={this.handleOnChange} value={this.state.name}/>
          <input type="submit" />
      </form>
      </div>
    );
  }
};
