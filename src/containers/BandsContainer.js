import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import { addBand } from '../actions/bands';
import { connect } from 'react-redux';

class BandsContainer extends Component {
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} />

        <ul>
          { this.props.bands.map( band => <li>{band.name}</li>)}
        </ul>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { bands: state.bands }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);
