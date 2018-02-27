import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.store.dispatch({
      type: "ADD_BAND", 
      band: this.state.text
    })
    this.setState({
      text: ''
    })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleChange} /><br/>
          <input type="submit" value="Add Band" />
        </form>
      </div>
    );
  }
};

export default BandInput;
