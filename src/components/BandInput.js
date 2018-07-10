import React, { Component } from 'react';

class BandInput extends Component {

  state = { text: '' }
  
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
    this.setState({ text: ''})
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Band Name:</label>
          <input type='text'
            onChange={(event) => this.handleChange(event)}
            value={this.state.text}/>
          <input type='submit'/>
        </form>
      </div>
    );
  }
};

export default BandInput;
