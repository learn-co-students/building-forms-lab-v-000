import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    text: ""
  }


  handleOnChange = e => {
      this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }


  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.text} onChange={this.handleOnChange}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
