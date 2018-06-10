import React, { Component } from 'react';

class Bands extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <div>
        <ul>
          {this.props.store.getState().bands.map((band, idx) => <li key={idx}>{band}</li>)}
        </ul>
      </div>
    );
  }
};

export default Bands;
