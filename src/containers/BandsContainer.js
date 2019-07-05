import React, { Component } from 'react';
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

export default connect()(BandsContainer);
