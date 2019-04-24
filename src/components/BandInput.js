// Add BandInput component
import React, { Component } from 'react';
import { connect } from 'react-redux';

class BandInput extends Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }

  handleChange = event => {
    this.setState({
      name: event.target.value
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Add Band </label>
            <input type='text' onChange={this.handleChange} value={this.state.name} />
          </p>
            <input type='submit'/>
        </form>
        {/* {this.state.name} */}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addBand: band => dispatch({
      type: 'ADD_BAND',
      band
    })
  }
}

export default connect(null, mapDispatchToProps)(BandInput)
