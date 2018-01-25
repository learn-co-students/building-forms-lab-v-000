import React, { Component } from 'react';

class BandInput extends Component {

  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleChange(event) {
    this.setState({
      text: event.target.value
    });
  }

  handleSubmit(event) {
  event.preventDefault();
  this.props.store.dispatch({
    type: 'ADD_BAND',
    band: this.state.text,
  });
  this.setState({
    text: '',
  });
 }


  render() {
    return (
      <div>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <p>
            <label>Band Input</label>
             <input
               type="text"
               onChange={(event) => this.handleChange(event)}
               value={this.state.text}
             />
             <input
               type="submit"
             />
          </p>
        </form>
      </div>
    );
  }
};

export default BandInput;
