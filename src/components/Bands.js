import React, { Component } from 'react';

class Bands extends Component {

  render(){

    let bands = this.props.store.getState().bands.map(band => <li>{band}</li>);

    return (
      <div>
        <ul>
          {bands}
        </ul>
      </div>
    );
  }
};

export default Bands;
