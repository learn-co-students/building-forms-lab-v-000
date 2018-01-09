import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();

    this.state = {
      text:''
    }
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.store.dispatch({type: "ADD_BAND", band: this.state.text })
    this.setState({text: ''})
  }

  handleChange(e){
    this.setState({ text: e.target.value })
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input onChange={(event) => this.handleChange(event)} value={this.state.text} type="text"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
