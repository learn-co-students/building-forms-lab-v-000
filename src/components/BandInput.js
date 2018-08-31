// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

  constructor() {
    super()
    this.state = {
      name: ''
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form>
          <label>Name: </label>
          <input type="text" onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
