import React, { Component } from 'react'
import { connect } from 'react-redux';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        BandsContainer
      </div>
    )
  }
}


const mapDispatchToProps = dispatch => {
  return {
    addBand: (newName) => {
      dispatch(addBand(newName))
    }
  };
};

export default connect(null, mapDispatchToProps)(BandsContainer);
