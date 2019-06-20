// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
	constructor() {
		super()
		this.state = {
			band: '',
		}
	}

  handleSubmit = event => {
    event.preventDefault();
    this.props.addBand(this.state)
		this.setState({
			band: '',
		})
  }

  handleChange(event) {
    this.setState({
      band: event.target.value
    });
  }


  render() {
    return(
      <div>
				<div>
					Band Input
				</div>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>add band</label>
						<input type="text" onChange={(event) => this.handleChange(event)} value={this.state.band}/>
						<input type="submit" />
				 </form>
			 </div>
		 </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', band: formData.band })
})

export default connect(null, mapDispatchToProps)(BandInput)
