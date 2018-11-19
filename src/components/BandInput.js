import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.props.submitForm(this.state.name)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <label>Band: </label>
          <input type="text" onChange={this.handleChange}
            value={this.state.text} />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
