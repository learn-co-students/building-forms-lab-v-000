// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  };

  handleOnChange (event) {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit (event) {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
              <label>Band Name:</label>
              <input
                name="name"
                onChange={(event) => this.handleOnChange(event)}
                type="text"
                value={this.state.name} />
              <input type="submit" />
        </form>
      </div>
    )
  }

}

export default BandInput;
