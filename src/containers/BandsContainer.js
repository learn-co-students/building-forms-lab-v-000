import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';

class BandsContainer extends Component {

  generateBandsList = () => {
    console.log("From inside the generateBandsList function: ", this.props)
    return this.props.bands.map( band => {
      return (
        <li key={uuid()}>{band.name}</li>
      )
    })
  }

  render() {
    console.log("From inside the render function: ", this.props)
    return(
      <div>
        <ul>
        {this.props.bands ? this.generateBandsList() : null}
        </ul>
      </div>
    )
  }

}

const mapStateToProps = state => {
  return {
    bands: state.bands // this is an array of band objects
  }
}

export default connect(mapStateToProps)(BandsContainer)
