// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const band ={
      name: this.state.name
    }
    this.props.addBand(band);
  }

  render() {
    return(
      <div>
        Band Input
        <form>
          onSubmit={this.handleOnSubmit}
        </form>
        <textarea
          value={this.state.name}
          onChange={this.handleOnChange}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch(
    { type: 'ADD_BAND', payload: formData}
  )
})

export default connect(null, mapDispatchToProps)(BandInput);

// You will need to write the BandInput component as a child of BandsContainer. This component should have a form with a text input and submit button. We would like to update this component's state each time the user types a new character in the input, stored as this.state.name. We will only update the Redux store's state when the user hits the submit button. The dispatched action required to initiate this update should be set up in BandsContainer and passed down as the prop addBand to BandInput.