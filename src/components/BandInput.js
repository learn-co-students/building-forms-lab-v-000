// Add BandInput component
import React, { Component } from 'react'


class BandInput extends Component {
	
	constructor() {
		super();

		this.state = {
			name: ''
		}
	}

	handleOnSubmit = e => {
		e.preventDefault();
		this.props.addBand(this.state)
		this.setState({
			name: ''
		})
	}

	handleChange = e => {
		this.setState({
			name: e.target.value 
		})
	}

  render() {
    return(
      <div>
        <form 
        	onSubmit={this.handleOnSubmit}
        >
        	<input 
        		type="text" 
        		onChange={this.handleChange}
        		value={this.state.name} />

    		<input type="submit"/>
        </form>
      </div>
    )
  }
}

export default BandInput
