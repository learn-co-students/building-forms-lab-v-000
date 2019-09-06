import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux'
import { addBand } from '../actions/bands'
import Bands from '../containers/Bands'

class BandsContainer extends Component {

  render() {
    console.log('BandContainerProps', this.props)
    return (
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        <ul>
          {this.props.bands.map(band => <Bands band={band} />)}
        </ul>
      </div>
    )
  }
}


const mapStateToProps = state => {
  console.log('in MapStateoProps', state)
  return {
    bands: state.bands
  }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);

