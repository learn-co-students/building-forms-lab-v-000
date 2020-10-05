import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';
import { addBand } from '../actions/bands'

class BandsContainer extends Component {

  render() {
    // const bands = this.props.bands.map(band => <li>band</li>)
    console.log(this.props.bands)
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand} />
        {/* {bands} */}
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    bands: state.bands //you can name key whatever you want
    }
}

export default connect(mapStateToProps, { addBand })(BandsContainer);

