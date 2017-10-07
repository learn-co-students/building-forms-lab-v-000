import React, { Component } from 'react';

class BandInput extends Component {
    state={
      text: ""
    }

    handleChange = (event) => {
      this.setState({text: event.target.value})
    }

    handleSubmit = (event) => {
      event.preventDefault()
      this.props.store.dispatch({type: "ADD_BAND", band: this.state.text})
      this.setState({text: ""})
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>Band Name</label>
            <input onChange={this.handleChange} value= {this.state.text}/>
          </p>
          <input type="submit"/>
        </form>
        {this.state.text}
      </div>
    );
  }
};

export default BandInput;
