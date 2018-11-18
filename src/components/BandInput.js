// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: '',
    })
  }

  render() {
    return(
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>add band</label>
        <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.name}/>
        <input type="submit" />
      </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })
})

export default connect(null, mapDispatchToProps)(BandInput);
