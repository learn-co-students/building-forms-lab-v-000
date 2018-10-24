import React, { Component } from 'react'

class Bands extends Component {

  bandz = () => {
    return this.props.bands.map((b, index) => <li key={index}>{b.name}</li>)
  }

  render() {
      return(
        <div>
          <ul>
          { this.bandz() }
          </ul>
        </div>
      )
    }

  }


export default Bands
