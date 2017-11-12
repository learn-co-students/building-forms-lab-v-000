import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();

    this.state ={
      text: ''
    }
  }

  handleIputChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();;

    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })

    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={ (event)=> this.handleSubmit(event) }>
          <p>
            <label>New Band</label>
            <input 
              value={this.state.text}
              type="text" 
              onChange={ (event)=> this.handleIputChange(event) }
            />
          </p>
          <input type="submit" />  
        </form>  
      </div>
    );
  }
};

export default BandInput;
