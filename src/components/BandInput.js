// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ""
    });    
  }
  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }
  render() {
    return(
      <div>
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add band</label>
            <input
          type="text"
          onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          </p>
          <input type="submit" />
       </form>
     </div>
      </div>
    )
  }
}

export default BandInput;
