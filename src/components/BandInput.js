// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ""
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({
      name: ""
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Add Band Name:</label>
            <input type="text" onChange={this.handleChange} value={this.state.name} />
          </p>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: formData => dispatch({type: 'ADD_BAND', band: formData})
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
