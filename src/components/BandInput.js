import React, { Component } from 'react';

export default class BandInput extends Component {
  constructor(props){
    super(props);
    this.state = {text: ''};
  }

  handleOnChange(e){
    this.setState({text: e.target.value});
  }

  handleOnSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    });
    this.setState({text: ''});
  }

  render() {
    return (
      <div>
        <form onSubmit={e => this.handleOnSubmit(e)}>
          <input
            type="text"
            value={this.state.text}
            onChange={e => this.handleOnChange(e)}
          />
          <input type="submit"/>
        </form>
      </div>
    );
  }

};
