
import React, { Component } from 'react'
import Band from './Band.js'

class BandInput extends Component {

  // constructor() {
  //   super();

    state = {
      name: ''
    }

  // }




  handleChange = (event) => {
    console.log("handleChange...............")
    this.setState({
      name: event.target.value
    })
  }


  handleSubmit = event => {
    console.log("handleSubmit function in BandInput")
    event.preventDefault();
    // console.log("this.props.addBand(this.state.name)", this.props.addBand(this.state.name))
    this.props.addBand(this.state)

    this.setState({
      name: ''
    })
  }



  render() {
    console.log("this.props.addBand.........", this.props.addBand)
    return(
      <div>
        <form onSubmit={ event => this.handleSubmit(event)}>
          <p>
            <label> Input a Band! </label>
            <input type="text" value={this.state.name} onChange={(event) => this.handleChange(event)} />
          </p>
          <input type="submit" />
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default BandInput
