import React, { Component } from 'react';

class BandInput extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      text: "",
    }
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value,
    }, console.log("state.text is " + this.state.text))
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    })
    this.setState({
      text: "",
    }, () => {console.log("duh! I had to link the li's value to the input!")})
  }
  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input value={this.state.text} onChange={this.handleChange} type="text"/>
          <input type="submit" className="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
