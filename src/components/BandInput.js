import React, { Component } from 'react'

class BandInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state)
    this.setState({ name: '' })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add Band</label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" id="name" />
          <button type="button" id="btn">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;

