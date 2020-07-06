// Add BandInput component
import React, { Component } from 'react'
import uuid from 'uuid';

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band = {name: this.state.name, id: uuid()};
    this.props.addBand(band)
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input
          onChange={(event) => this.handleOnChange(event)}
          name="name"
          className="form-control"
          type="text"
          value={this.state.name}
          />
          <button className="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;