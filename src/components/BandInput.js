// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux';

class BandInput extends Component {

	state = {
		name: ''
	}

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
  }
 
  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand({ type: 'ADD_BAND', payload: this.state })
    this.setState({
    	name: ''
    })
  }


  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <p>
            <label>add band</label>
            <input
          type="text"
          onChange={ (event) => this.handleChange(event) } value={ this.state.name }/>
          </p>
          <input type="submit" />
       </form>
     </div>
    )
  }
}

export default BandInput



// store.dispatch({ type: 'ADD_TODO', todo: this.state })

