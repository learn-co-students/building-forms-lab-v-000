import React, { Component } from 'react';

class BandInput extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
    }
  }

  handleChange = function (event) {
      this.setState({
        text: event.target.value
      })
  }.bind(this);

  handleSubmit = function (event) {
      event.preventDefault();
      this.props.store.dispatch(
          {type: 'ADD_BAND',
           band: this.state.text
          });
      this.setState({
          text: ''
      })
  }.bind(this);


  render() {
    return (
      <div>
          <form onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.text} onChange={this.handleChange}/>
              <input type="submit"/>
              {this.state.text}
          </form>
      </div>
    );
  }
};

export default BandInput;
