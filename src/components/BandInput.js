// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <div>
            <label htmlFor='name'>Band Name: </label>
            <input onChange={this.handleOnChange} type="text" name="name" value={this.state.name}/>
          </div>
          <div>
            <input type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default BandInput;
