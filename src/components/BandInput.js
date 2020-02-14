// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleOnChange = event => {
    this.setState({
      name: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    // this.props.addBand(this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <input type='text' value={this.state.text} onChange={this.handleOnChange}/>
          <input type='submit'/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addBand: () => dispatch({type: 'ADD_BAND'})
//   }
// }

export default (BandInput)
