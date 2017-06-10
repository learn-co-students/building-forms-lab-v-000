import React, { Component } from 'react';

class BandInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: this.state.text,
    });
    this.setState({
      text: '',
    });
  }

  handleChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <label>Add Band</label>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.handleChange(event)} />
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default BandInput;
