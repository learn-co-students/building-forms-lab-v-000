// Create the bands
import React, { Component } from 'react'
import {connect} from "react-redux"

class BandInput extends Component {

  state = {
  	name: ""
  }	

  handleChange = event => {
  	this.setState({
  		name: event.target.value
  	})
  }

  handleSubmit = event => {
  	event.preventDefault()
  	this.props.addBand(this.state)
  	this.setState({
  		name: "" 
  	})
  }
  // * ALTERNATIVE handleSubmit*
  // * If not given any arguments, connect will return dispatch 
  // * as a prop to the component we're wrapping with connect
  // handleSubmit = event => {
  //  event.preventDefault()
  //  this.props.dispatch({type: "ADD_BAND", payload: this.state})
  // }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
        	<p>
        		<label>Add band name: </label>
        		<input
        			type="text"
        			onChange={this.handleChange}
        			value={this.state.name} 
        		/>
        	</p>
        	<input type="submit" /><br /><br />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
	addBand: formData => dispatch({ type: "ADD_BAND", payload: formData })
})
// In this component, we're not currently concerned with writing a 
// mapStateToProps function (the first argument passed to connect) 
// so we can use null instead of mapStateToProps as the first argument
export default connect(null, mapDispatchToProps)(BandInput)

// * ALTERNATIVE connect*
// * If not given any arguments, connect will return dispatch 
// * as a prop to the component we're wrapping with connect

// export default connect()(CreateTodo)