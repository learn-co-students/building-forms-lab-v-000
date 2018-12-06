// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux';

class BandInput extends Component {

	state = {
		name: ''
	}

  handleChange = event => {
    this.setState({
      name: event.target.value
    });
    console.log(this.state)
  }
 
  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state.name)
    this.setState({
    	name: ''
    })
    console.log(this.state)
  }


  render() {
    return(
      <div>
        <form onSubmit={ (event) => this.handleSubmit(event) }>
          <p>
            <label>add band</label>
            <input type="text" onChange={ (event) => this.handleChange(event) } value={ this.state.name }/>
          </p>
          <input type="submit" />
       </form>
     </div>
    )
  }
}

export default BandInput



// store.dispatch({ type: 'ADD_TODO', todo: this.state })

