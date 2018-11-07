import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = event => {
    // debugger
    this.setState({
    [event.target.className]: event.target.value
    })
  }

  handleOnSubmit = event => {
    // debugger
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({name: ''})

  }



  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <label>Band Name  </label>
          <input
          type="text"
          className="name"
          value={this.state.name}
          onChange={(event) => this.handleOnChange(event)}
          />
          <input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput;
