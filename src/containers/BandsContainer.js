import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands';
import BandInput from '../components/BandInput';
import uuid from 'uuid';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        {this.props.bands.map(band => <React.Fragment key={uuid()}><li>{band.name}</li></React.Fragment>)}
      </div>
    )
  }
}

const mapStateToProps = (state => {
  return { bands: state.bands }
})

const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch(addBand(formData))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer);
