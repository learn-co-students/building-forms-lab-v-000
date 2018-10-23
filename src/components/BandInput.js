// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {

  state = {
    name: "",
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatch({type: 'ADD_BAND', payload: this.state})
  }

  render() {
    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" />
          <input type="submit" value="Add Band" />
        </form>
      </div>
    )
  }
}

export default connect()(BandInput);
