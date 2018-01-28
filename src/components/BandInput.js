import React, { Component } from 'react';
import Bands from './Bands'

class BandInput extends Component {
  constructor(props){
  super(props)
    this.state = {
      text: '',
    }
  }
    
  handleOnChange(event){
    this.setState({
      text: event.target.value
    })
    
}
  handleSubmit(event){
    event.preventDefault()
    
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    })
    this.setState({
      text: '',
    })
  }
  render() {
    
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" onChange={(event) => this.handleOnChange(event)}/>
          <input type="submit" />

        </form>
      </div>
    );
  }
};

export default BandInput;
