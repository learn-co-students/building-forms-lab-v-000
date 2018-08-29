import React, { Component } from 'react';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Band Name</label>
          <input type="text" value={this.state.name} onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput;
