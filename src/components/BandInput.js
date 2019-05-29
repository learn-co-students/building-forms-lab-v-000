// Add BandInput component
import React, { Component } from 'react';

// import { connect } from 'react-redux';
// import { addBand } from '../actions/bands';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input name='name' type='text' onChange={this.handleOnChange} /><br />
          <p>{this.state.name}</p>
          <button type='submit'>Add Band</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
