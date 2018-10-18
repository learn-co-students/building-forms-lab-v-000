// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  };

  handleChange = (event) => this.setState( {band: event.target.value} );

  handleSubmit = () => this.props.dispatch({ type: 'ADD_BAND', band: this.state });
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} >
          <p>
            <label>Band:</label>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
