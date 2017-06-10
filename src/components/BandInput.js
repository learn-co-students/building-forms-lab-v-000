import React, { Component } from 'react';

class BandInput extends Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
        this.setState({
            text: ''
        })
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input type="text"
            value={this.state.text}
            onChange={ event => {this.setState({ text: event.target.value })}} />
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
