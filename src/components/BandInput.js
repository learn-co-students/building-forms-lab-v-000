import React, { Component } from 'react';

class BandInput extends Component {
	constructor() {
		super();

		this.state = {
			text: ""
		}
	}

	handleChange = (event) => {
		this.setState({
			text: event.target.value
		})
	}

	handleSubmit = (event) => {
		event.preventDefault();
		this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
	}



  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        	<input 
        		type="text"
        		value={this.state.text}
        		onChange={this.handleChange}
        	/>
        	<button type="submit">Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
