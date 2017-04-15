import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();

    this.state = { text: '' };
  }

  handleOnChange(e){
    this.setState({
      text: e.target.value
    })
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleOnSubmit(event)}>
          <input type='text' value={this.state.text} onChange={(event) => this.handleOnChange(event)} />
        </form>
      </div>
    );
  }
};

export default BandInput;
