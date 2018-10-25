// Add BandInput component
import React, { Component } from 'react'
// import {connect} from 'react-redux';

class BandInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    }
  }
  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBand(this.state)
    this.setState({
      name: ''
    })
  }
  
  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.name} onChange={this.handleOnChange}/>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addBand: formData => dispatch({ type: 'ADD_BAND', band: formData })
// })

export default BandInput
