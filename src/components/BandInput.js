import React, { Component } from 'react'

class BandInput extends Component {

  state = {
    name: ''
  } 

  handleOnChange = event => {
    this.setState({
      name: event.target.value,
    });
  }
  // handleOnChange = event => {
  //   const { value } = event.target;
  //   this.setState({
  //     name: value
  //   });
  // }

  handleOnSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state);
    this.setState({
      name: '',
    })
  }
  
  render() {
    return(
      <div>
        <h1>Enter a Favorite Band Name</h1>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type="text" value={this.state.name} onChange={(event) => this.handleOnChange(event)} />
          <input
            type="submit"
            value="Submit"
          />
        </form>
      </div>
    )
  }
}

export default BandInput
