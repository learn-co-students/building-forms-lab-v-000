
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      text: '',
    })
  }


  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>add band</label>
          <input type="text" onChange={this.handleChange} value={this.state.text}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
