import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li>{this.props.text}</li>
    );
  }
};

export default Band;
