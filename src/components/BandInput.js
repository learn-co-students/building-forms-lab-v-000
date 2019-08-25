// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Input: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput


