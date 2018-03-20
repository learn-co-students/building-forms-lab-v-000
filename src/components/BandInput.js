import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ""
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.store.dispatch({
      type:"ADD_BAND",
      band: this.state.text
    })

  this.setState({
    text: ""
  })

  }

  handleChange(e){
    this.setState({
      text: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Band Input</label>
          <input type="text" onChange={(e) => this.handleChange(e)}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
