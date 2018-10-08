// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

state = {
  name: ''
}

  handleSubmit = event =>{
    event.preventDefault();
    this.props.handleUpdate(this.state)
    /*this.setState({
      name: '',
    })*/
  }

  handleChange(event) {
    this.setState({
      name: event.target.value
    });
  }

  render() {
    return(
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
        <input type="text" onChange={(event) => this.handleChange(event)}/>
        <input type="submit" />
        </form>
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {bands: state.bands}
}

export default BandInput
