import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }


  render() {
    return(
      <div>
        Band Input
        <form onSubmit={ (event) => this.handleOnSubmit(event) }>
          <input
            type='text'
            name='name'
            onChange={ (event) => this.handleOnChange(event) }
            value={ this.state.name } />
          <input type="submit" />
        </form>
      </div>
    )
  }
}


export default BandInput
