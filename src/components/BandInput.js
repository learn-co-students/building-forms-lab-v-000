import React, { Component } from 'react';

class BandInput extends Component {

  constructor(){
    super();

    this.state = {
      text: ''
    }

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(event) {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label>Band: </label>
          <input type="text"
            value={this.state.text}
            onChange={(event) => this.handleOnChange(event)}
           />
          <br/>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
