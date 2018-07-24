import React, { Component } from 'react'

class Bands extends Component {
  render () {
    let bandsList = this.props.store.getState().bands.map(band => <li>{band}</li>)

    return (
      <div>
        <ul>{bandsList}</ul>}
      </div>
    )
  }
};

export default Bands
