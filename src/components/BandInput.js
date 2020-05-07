import React, { Component } from 'react'

class BandInput extends Component {
  state = { name: '' }
  
  render() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text"
            onChange={this.onInputChange}
            value={this.state.name}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }

  onInputChange = (event) => {
    this.setState({ 
      name: event.target.value  
    })
  }

  onFormSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({ 
      name: '' 
    });
  }
}

export default BandInput
