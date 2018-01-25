import React, { Component } from 'react';

class Band extends Component {

  render() {
    return(
      <li key={this.key}>{this.props.text}</li>
    );
  }
};

export default Band;
