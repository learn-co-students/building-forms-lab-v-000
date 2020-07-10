import React, { Component } from 'react';

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
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <p>
            <label>Add a new band</label>
            <input type = 'text' onChange={this.handleOnChange} value={this.state.name} />
          </p>
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default BandInput;
