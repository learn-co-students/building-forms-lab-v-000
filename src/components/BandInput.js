import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
  }

  handleInputChange(event) {
    this.setState(
      {
        text: event.target.value,
      }
    )
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({type: 'ADD_BAND', band: this.state.text});
  }
  
  render() {
    return (
      <div>
        <h3>Add A Band</h3>
        <form onSubmit={this.handleFormSubmit.bind(this)}>
          <div>
            <input type="text" onChange={this.handleInputChange.bind(this)}/>
          </div>
          <div>
            <input type="submit"/>
          </div>
        </form>
      </div>
    );
  }
};

export default BandInput;
