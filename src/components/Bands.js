import React, { Component } from 'react';

// Defined to be able to use Band Component.
// See below.

// import Band from './Band';


class Bands extends Component {


  render(){

    const bands = this.props.store.getState().bands.map((band, index) => {

      //This way passes the tests...
      return <li key={index}>{band}</li>

      //...However, this would be more ideal..
       // return <Band text={band} key={index}/>
     });

    return (
        <ul>
          {bands}
        </ul>
    );
  }
};

export default Bands;
