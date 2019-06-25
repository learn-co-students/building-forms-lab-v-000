import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import { connect } from 'react-redux';

class BandsContainer extends Component {

  // console.log(this.props)
  // renderBands = () => this.props.bands.map((band, index) => <li key={index} value={band}></li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return {
//     bands: state.bands
//   }
// }
//
// const mapDispatchToProps = dispatch => ({ addBand: band => dispatch({ type: "ADD_BAND", band }) })
//

export default connect(null, mapDispatchToProps)(BandsContainer);
