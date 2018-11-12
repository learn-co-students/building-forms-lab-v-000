import React, { Component } from 'react';
import {connect} from 'react-redux'

class Bands extends Component {
  render(){
    const bands = this.props.bands.map((band, index) => {
      return <li key={index}>{band}</li>
    });
    return (
      <div>
        {bands}
      </div>
    );
  }
};

const mapStateToProps=state=>{
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps)(Bands);
