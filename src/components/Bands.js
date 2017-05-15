import React, { Component } from 'react';


class Bands extends Component {

  render(){

    return(
      <div>
        <ul>
  {this.props.store.getState().bands.map((bands) => {
        return <li>{bands}</li>
  })
}
        </ul>
      </div>
    );
  }
};

export default Bands;
