import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  }

handleOnChange(event){
  this.setState({
    name: event.target.value
  })
}

handleSubmit(event) {
  event.preventDefault();
  this.props.addBand(this.state)
  this.setState({
    name: ''
  })
}
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Band Name:</label>
          <input type="text" onChange={(event) => this.handleOnChange(event)} value={this.state.name}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
