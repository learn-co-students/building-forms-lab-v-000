import React, { Component } from 'react';

class Bands extends Component {
  render(){
    const bandLi = this.props.store.getState().bands.map((band, i) => <li key={i}>{band}</li> );

    return (
      <div>
        <ul>
          {bandLi}
        </ul>
      </div>
    );
  }
};

export default Bands;
