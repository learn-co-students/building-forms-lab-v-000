import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text
    })
  }


  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <input type="text" onChange={(e) => this.handleChange(e)} />
          <input type="submit" />
        </form>
      </div>
    );
  }
};

export default BandInput;
