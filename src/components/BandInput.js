import React, { Component } from 'react'

class BandInput extends Component {
  state = {
      name: ''
    }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state);
    this.setState({ name: '' })
  }

  handleChange = (e) => {
    this.setState({ name: e.target.value })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>add band</label>
          <input type="text" onChange={this.handleChange} value={this.state.name} name="name" id="name"/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

export default BandInput
