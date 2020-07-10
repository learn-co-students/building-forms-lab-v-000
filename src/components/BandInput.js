import React, { Component } from 'react'

class BandInput extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addBand(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <label name="bandName">Enter Band Name:</label>
          <input type="text" name="bandName" value={this.state.name} onChange={e => this.setState({name: e.target.value })} />
          <button type="submit">Submit</button>
        </form>
      </div>
          )
        }

          }

          export default BandInput
