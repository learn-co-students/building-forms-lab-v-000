import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		text: '',
  	}
  }

  handleInput = (e) => {
  	this.setState({
  		text: e.target.value,
  	})
  }

  handleSubmit = (e) => {
  	e.preventDefault();
  	
  	this.props.store.dispatch({
    	type: 'ADD_BAND',
    	state: this.state.text,    	
 	});
  	
  	this.setState({
    	text: '',
  	});
  }


  render() {
    return (
      <div>
      	<form onSubmit={this.handleSubmit} >
      		<input type="text" onChange={this.handleInput} value={this.state.text}/>
	      	<input type="submit" />
      	</form>
      	{this.state.text}
      </div>
    );
  }
}

export default BandInput;
