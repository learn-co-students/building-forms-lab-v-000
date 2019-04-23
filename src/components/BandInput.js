import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../reducers/manageBand';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    let newBand = {this.state};
    this.props.addBand(newBand);
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

export default connect(null, { addBand })(BandInput);
