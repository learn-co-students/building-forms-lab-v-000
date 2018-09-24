// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {

	state = {
		name: ''
	}

	handleChange(event){
		this.setState({
			name: event.target.value
		})
	}

	handleSubmit(event){
		event.preventDefault();
		this.props.handleUpdate(this.state)
	}

  render() {
    return(
      <div>
      <form onSubmit={event => this.handleSubmit(event)}>
      	<input type="text" onChange={event => this.handleChange(event)}/>
      	<input type="submit" />
      </form>
     	 <ul>
        	
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
	return {bands: state.bands}
	
}

export default BandInput
