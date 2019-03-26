// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch({ type: 'ADD_BAND', payload: this.state });
    this.setState({
      text: '',
    })
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add band</label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text} />
          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default connect()(BandInput);
