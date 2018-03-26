import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
  	super();

  	this.state = {
  		text: ''
  	}
  }
  
  handleSubmit = (e)=> {
  	e.preventDefault();

  	this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})

  	this.setState({text: ''})
  }

  handleChange = (e)=> {
  	this.setState({text: e.target.value})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
		  <label htmlFor="bandName">band</label>
		  <input type="text" 
		  		 id="bandName"
		  		 value={this.state.text} 
		  		 onChange={this.handleChange} />

		  <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
