// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // const band = {...this.state};
    // this.props.addBand(band);
    // console.log(band)
    console.log(this.state)
    this.props.dispatch({type: 'ADD_BAND', band: this.state.name})

    this.setState({
      name: ''
    });
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    });
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
    	    <label>Add Band: </label>
          <input type="text" onChange={(event) => this.handleChange(event)} value={this.state.text}/>
          <input type="submit" />
       </form>
      </div>
    )
  }
}

// const mapDispatchToProps = dispatch => ({
//   addBand: () => {
//     dispatch(addBand())
//   }
// })

export default connect()(BandInput);
