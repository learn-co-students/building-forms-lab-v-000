import React, { Component } from 'react';
import { connect } from 'react-redux';

export class BandInput extends Component {
  constructor() {
    super()
    
    this.state = { name: "" };
    this.baseState = this.state;
  }

  handleChange = e => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.addBand(this.state);
    this.setState(this.baseState);
    
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
                 name="name"
                 placeholder="Name"
                 onChange={this.handleChange}
                 value={this.state.name}
                 />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput)
