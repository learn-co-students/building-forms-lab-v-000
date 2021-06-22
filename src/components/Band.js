import React, { Component } from 'react';

class Band extends Component {

  render() {
    console.log(this.props)
    return (
      <div>
        <ul>
          {this.props.bands.map(
            (band, index) => {
              return <li key={index}>{band.name}</li>
            }
          )
          }
        </ul>
      </div>
    )
  }
}

export default Band;