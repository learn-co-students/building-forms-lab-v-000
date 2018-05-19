import React, { Component } from 'react';

class Bands extends Component {
  render(){

  const bandList = this.props.store.getState().bands.map((band, index) =>{
    return <li key={index}>{band}</li>
  });

    return (
      <div>
        {bandList}
      </div>
    );
  }
};

export default Bands;
