// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
  //BandInput's own state
  state = {
    name: ''
  }

//inputChangeHandler updates the BandInput component's state (NOT the Redux store's state!!)
  inputChangeHandler(event) {
    this.setState({
      name: event.target.value
    })
  }

//submitFormHandler updates the Redux store's state!
//the addBand prop comes from BandsContainer's mapDispatchToProps
  submitFormHandler(event) {
    event.preventDefault();
    //this calls the dispatch method addBand
    this.props.addBand(this.state);
    this.setState({
      name: ''
    })
    console.log(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={(event) => this.submitFormHandler(event)}>
          <input type="text" onChange={(event) => this.inputChangeHandler(event)} value={this.state.name}></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput;
