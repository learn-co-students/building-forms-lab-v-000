// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  constructor() {
      super();
      this.state = {
        name: '',
      };
    }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    console.log("state:", this.state)
    this.setState({
    name: '',
  })
  }

    handleChange= (event) => {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        Add a New Band:
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type ="text" value={this.state.name} onChange={(event) => this.handleChange(event)} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}



export default BandInput
