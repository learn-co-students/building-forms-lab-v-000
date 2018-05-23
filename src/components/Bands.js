import React, { Component } from 'react';

// class Band extends Component {
//   render() {
//     return(
//       <li>{this.props.text}</li>
//     );
//   };
// }

class Bands extends Component {
  render(){
    const bands = this.props.store.getState().bands.map((band, index) => {
      return <li key={index}>{band}</li>
      // return <Band text={band} key={index} />
    });

    return (
      <div>
        <ul>{bands}</ul>
      </div>
    );
  }
};

export default Bands;
