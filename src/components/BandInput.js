import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    var action = {
      type: "ADD_BAND",
      band: this.state.text
    }
    this.props.store.dispatch(action)
    this.setState({
      test: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.text} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
};

export default BandInput;
