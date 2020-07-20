// Add BandInput component
import React, { Component } from 'react'
//import { connect } from 'react-redux'

//This component should have a form 
//  with a text input and submit button. 
class BandInput extends Component {
  
  //update this component's state each time 
  //  the user types a new character in the input

  state = {
    name: ''
  }

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value
    })
  
    //console.log(this.state) bc its nots in redux
  }

//We will only update the Redux store's state when the user hits the submit button. 
  handleOnSubmit = event => {
    event.preventDefault()
    //should be set up in BandsContainer 
      //and passed down as the prop addBand to BandInput
      let newBand = this.state
      //console.log(this.state)
      //console.log(this.props.addBand(newBand))
      this.props.addBand(newBand)
      this.setState({name: ""})
  }


  render() {
    console.log(this.props)
    return(
      <div>
        Band Input
        <form onSubmit={this.handleOnSubmit}>
          <label>Band Name:</label>
            < input type="text" name="name" value={this.state.name} onChange={this.handleOnChange}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default BandInput
