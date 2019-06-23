import React, { Component } from 'react';
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import {connect} from 'react-redux';
import {addBand} from '../actions/bands';


class BandsContainer extends Component {
  render() {
    return(
      <div>
        Our Favorite Bands!
        < BandInput addBand={this.props.addBand} />    {/*props comes from mapDispatchToProps which is automatically included*/}
        < Bands bands={this.props.bands} />            {/*props comes from mapStateToProps*/}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({
    bands: state.bands         //bands is the props for Bands
  })
}


export default connect(mapStateToProps, { addBand })(BandsContainer)