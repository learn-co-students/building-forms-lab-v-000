import React, { Component } from 'react';

class BandInput extends Component {

  constructor() {
    super();
    this.state = {
      text: '',
    };
  }

  handleChange(event){
    this.setState({
      text: event.target.value
    });
  };

  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state,
    });
    this.setState({
      band: '',
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)} >
          <p>
            <lable>add band</lable>
            <input
            type="text"
            value={this.state}
            onChange={(event) => this.handleChange(event)} />
          </p>
            <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
