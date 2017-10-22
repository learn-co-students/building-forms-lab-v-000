import React, { Component } from 'react';

class Bands extends Component {
  render(){
    return (
      <div>
        <ul>
          <li>{this.props.store.getState().bands[0]}</li>
          <li>{this.props.store.getState().bands[1]}</li>
          <li>{this.props.store.getState().bands[2]}</li>
        </ul>
      </div>
    );
  }
};

export default Bands;
